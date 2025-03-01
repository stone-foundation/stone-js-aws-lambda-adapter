[**AWS Lambda Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda Adapter Documentation](../../../modules.md) / [options/AwsLambdaAdapterBlueprint](../README.md) / AwsLambdaAdapterAdapterConfig

# Interface: AwsLambdaAdapterAdapterConfig

Defined in: [aws-lambda-adapter/src/options/AwsLambdaAdapterBlueprint.ts:16](https://github.com/stonemjs/aws-lambda-adapter/blob/6762f5f926b4cb9643992a757595270c92f0d9ac/src/options/AwsLambdaAdapterBlueprint.ts#L16)

Configuration interface for the AWS Lambda Adapter.

Extends the `AdapterConfig` interface from the Stone.js framework and provides
customizable options specific to the AWS Lambda platform. This includes
alias, resolver, middleware, hooks, and various adapter state flags.

## Extends

- `AdapterConfig`\<[`AwsLambdaEvent`](../../../declarations/type-aliases/AwsLambdaEvent.md), [`RawResponse`](../../../declarations/type-aliases/RawResponse.md), [`AwsLambdaContext`](../../../declarations/type-aliases/AwsLambdaContext.md), `IncomingEvent`, `IncomingEventOptions`, `OutgoingResponse`\>

## Properties

### alias?

> `optional` **alias**: `string`

Defined in: core/dist/index.d.ts:426

The alias name for the adapter.
This is a unique identifier used to reference the adapter.
Optional property.

#### Inherited from

`AdapterConfig.alias`

***

### current?

> `optional` **current**: `boolean`

Defined in: core/dist/index.d.ts:432

The current status identifier for the adapter.
Used to indicate if this adapter instance is active or currently in use.
Optional property.

#### Inherited from

`AdapterConfig.current`

***

### default?

> `optional` **default**: `boolean`

Defined in: core/dist/index.d.ts:437

Defines whether this adapter is the default adapter used by the application.
Optional property.

#### Inherited from

`AdapterConfig.default`

***

### errorHandlers

> **errorHandlers**: `Record`\<`string`, `MetaAdapterErrorHandler`\<[`AwsLambdaEvent`](../../../declarations/type-aliases/AwsLambdaEvent.md), [`RawResponse`](../../../declarations/type-aliases/RawResponse.md), [`AwsLambdaContext`](../../../declarations/type-aliases/AwsLambdaContext.md)\>\>

Defined in: core/dist/index.d.ts:420

Error handlers used to manage and report errors that occur within the adapter.
These handlers can be used to customize error handling behavior and logging.

#### Inherited from

`AdapterConfig.errorHandlers`

***

### eventHandlerResolver

> **eventHandlerResolver**: `AdapterEventHandlerResolver`\<`IncomingEvent`, `OutgoingResponse`\>

Defined in: core/dist/index.d.ts:415

The event handler resolver used to create instances of the event handler.

#### Inherited from

`AdapterConfig.eventHandlerResolver`

***

### middleware

> **middleware**: `AdapterMixedPipeType`\<`AdapterContext`\<[`AwsLambdaEvent`](../../../declarations/type-aliases/AwsLambdaEvent.md), [`RawResponse`](../../../declarations/type-aliases/RawResponse.md), [`AwsLambdaContext`](../../../declarations/type-aliases/AwsLambdaContext.md)\>, [`RawResponse`](../../../declarations/type-aliases/RawResponse.md)\>[]

Defined in: core/dist/index.d.ts:411

The middleware used for processing incoming or outgoing data in the adapter.
Middleware can modify or handle events at different stages of the adapter's lifecycle.

#### Inherited from

`AdapterConfig.middleware`

***

### platform

> **platform**: `string`

Defined in: core/dist/index.d.ts:402

The platform identifier for the adapter.
This is used to categorize the adapter based on the environment or technology it supports.

#### Inherited from

`AdapterConfig.platform`

***

### resolver

> **resolver**: `AdapterResolver`

Defined in: core/dist/index.d.ts:406

The class type resolver used to create instances of the adapter.

#### Inherited from

`AdapterConfig.resolver`
