[**AWS Lambda Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda Adapter Documentation](../../../modules.md) / [decorators/AwsLambda](../README.md) / AwsLambdaOptions

# Interface: AwsLambdaOptions

Defined in: [aws-lambda-adapter/src/decorators/AwsLambda.ts:9](https://github.com/stonemjs/aws-lambda-adapter/blob/40d2096417dfa656208c25f0f4a9d23bf5291928/src/decorators/AwsLambda.ts#L9)

Configuration options for the `AwsLambda` decorator.
These options extend the default AWS Lambda adapter configuration.

## Extends

- `Partial`\<[`AwsLambdaAdapterAdapterConfig`](../../../options/AwsLambdaAdapterBlueprint/interfaces/AwsLambdaAdapterAdapterConfig.md)\>

## Properties

### alias?

> `optional` **alias**: `string`

Defined in: core/dist/index.d.ts:455

The alias name for the adapter.
This is a unique identifier used to reference the adapter.
Optional property.

#### Inherited from

`Partial.alias`

***

### current?

> `optional` **current**: `boolean`

Defined in: core/dist/index.d.ts:461

The current status identifier for the adapter.
Used to indicate if this adapter instance is active or currently in use.
Optional property.

#### Inherited from

`Partial.current`

***

### default?

> `optional` **default**: `boolean`

Defined in: core/dist/index.d.ts:466

Defines whether this adapter is the default adapter used by the application.
Optional property.

#### Inherited from

`Partial.default`

***

### errorHandlers?

> `optional` **errorHandlers**: `Record`\<`string`, `MetaAdapterErrorHandler`\<[`AwsLambdaEvent`](../../../declarations/type-aliases/AwsLambdaEvent.md), [`RawResponse`](../../../declarations/type-aliases/RawResponse.md), [`AwsLambdaContext`](../../../declarations/type-aliases/AwsLambdaContext.md)\>\>

Defined in: core/dist/index.d.ts:449

Error handlers used to manage and report errors that occur within the adapter.
These handlers can be used to customize error handling behavior and logging.

#### Inherited from

`Partial.errorHandlers`

***

### eventHandlerResolver?

> `optional` **eventHandlerResolver**: `AdapterEventHandlerResolver`\<`IncomingEvent`, `OutgoingResponse`\>

Defined in: core/dist/index.d.ts:444

The event handler resolver used to create instances of the event handler.

#### Inherited from

`Partial.eventHandlerResolver`

***

### middleware?

> `optional` **middleware**: `AdapterMixedPipeType`\<`AdapterContext`\<[`AwsLambdaEvent`](../../../declarations/type-aliases/AwsLambdaEvent.md), [`RawResponse`](../../../declarations/type-aliases/RawResponse.md), [`AwsLambdaContext`](../../../declarations/type-aliases/AwsLambdaContext.md)\>, [`RawResponse`](../../../declarations/type-aliases/RawResponse.md)\>[]

Defined in: core/dist/index.d.ts:440

The middleware used for processing incoming or outgoing data in the adapter.
Middleware can modify or handle events at different stages of the adapter's lifecycle.

#### Inherited from

`Partial.middleware`

***

### platform?

> `optional` **platform**: `string`

Defined in: core/dist/index.d.ts:431

The platform identifier for the adapter.
This is used to categorize the adapter based on the environment or technology it supports.

#### Inherited from

`Partial.platform`

***

### resolver?

> `optional` **resolver**: `AdapterResolver`

Defined in: core/dist/index.d.ts:435

The class type resolver used to create instances of the adapter.

#### Inherited from

`Partial.resolver`
