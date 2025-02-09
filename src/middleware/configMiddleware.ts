import { AWS_LAMBDA_PLATFORM } from '../constants'
import { MetaPipe, NextPipe } from '@stone-js/pipeline'
import { ClassType, ConfigContext, IBlueprint, OutgoingResponse, OutgoingResponseOptions } from '@stone-js/core'

/**
 * Middleware to dynamically set response resolver for adapter.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next pipeline function to continue processing.
 * @returns The updated blueprint or a promise resolving to it.
 *
 * @example
 * ```typescript
 * SetResponseResolverMiddleware(context, next)
 * ```
 */
export const SetResponseResolverMiddleware = async (
  context: ConfigContext<IBlueprint, ClassType>,
  next: NextPipe<ConfigContext<IBlueprint, ClassType>, IBlueprint>
): Promise<IBlueprint> => {
  if (context.blueprint.get<string>('stone.adapter.platform') === AWS_LAMBDA_PLATFORM) {
    context.blueprint.set('stone.kernel.responseResolver', (options: OutgoingResponseOptions) => OutgoingResponse.create(options))
  }

  return await next(context)
}

/**
 * Configuration for adapter processing middleware.
 *
 * This array defines a list of middleware pipes, each with a `pipe` function and a `priority`.
 * These pipes are executed in the order of their priority values, with lower values running first.
 */
export const metaAdapterConfigMiddleware: Array<MetaPipe<ConfigContext<IBlueprint, ClassType>, IBlueprint>> = [
  { module: SetResponseResolverMiddleware, priority: 6 }
]
