[**AWS Lambda Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda Adapter Documentation](../../../modules.md) / [middleware/BlueprintMiddleware](../README.md) / SetAwsLambdaResponseResolverMiddleware

# Function: SetAwsLambdaResponseResolverMiddleware()

> **SetAwsLambdaResponseResolverMiddleware**(`context`, `next`): `Promise`\<`IBlueprint`\>

Defined in: [aws-lambda-adapter/src/middleware/BlueprintMiddleware.ts:17](https://github.com/stonemjs/aws-lambda-adapter/blob/40d2096417dfa656208c25f0f4a9d23bf5291928/src/middleware/BlueprintMiddleware.ts#L17)

Middleware to dynamically set response resolver for adapter.

## Parameters

### context

`BlueprintContext`\<`IBlueprint`, `ClassType`\>

The configuration context containing modules and blueprint.

### next

`NextPipe`\<`BlueprintContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>

The next pipeline function to continue processing.

## Returns

`Promise`\<`IBlueprint`\>

The updated blueprint or a promise resolving to it.

## Example

```typescript
SetAwsLambdaResponseResolverMiddleware(context, next)
```
