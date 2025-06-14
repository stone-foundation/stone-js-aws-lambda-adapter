[**AWS Lambda Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda Adapter Documentation](../../modules.md) / [AwsLambdaAdapter](../README.md) / AwsLambdaAdapter

# Class: AwsLambdaAdapter

Defined in: aws-lambda-adapter/src/AwsLambdaAdapter.ts:54

AWS Lambda Adapter for Stone.js.

The `AwsLambdaAdapter` provides seamless integration between Stone.js applications
and the AWS Lambda environment. It processes incoming events from AWS Lambda,
transforms them into `IncomingEvent` instances, and returns a `RawResponse`.

This adapter ensures compatibility with AWS Lambda's execution model and
abstracts the event handling process for Stone.js developers.

## Template

The type of the raw event received from AWS Lambda.

## Template

The type of the response to send back to AWS Lambda.

## Template

The AWS Lambda execution context type.

## Template

The type of the processed incoming event.

## Template

Options used to create an incoming event.

## Template

The type of the outgoing response after processing.

## Template

Context type specific to the adapter.

## Example

```typescript
import { AwsLambdaAdapter } from '@stone-js/aws-lambda-adapter';

const adapter = AwsLambdaAdapter.create({...});

const handler = await adapter.run();

export { handler };
```

## See

 - [Stone.js Documentation](https://stone-js.com/docs)
 - [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/)

## Extends

- `Adapter`\<[`AwsLambdaEvent`](../../declarations/type-aliases/AwsLambdaEvent.md), [`RawResponse`](../../declarations/type-aliases/RawResponse.md), [`AwsLambdaContext`](../../declarations/type-aliases/AwsLambdaContext.md), `IncomingEvent`, `IncomingEventOptions`, `OutgoingResponse`, [`AwsLambdaAdapterContext`](../../declarations/interfaces/AwsLambdaAdapterContext.md)\>

## Constructors

### new AwsLambdaAdapter()

> `protected` **new AwsLambdaAdapter**(`blueprint`): [`AwsLambdaAdapter`](AwsLambdaAdapter.md)

Defined in: core/dist/index.d.ts:2853

Create an Adapter.

#### Parameters

##### blueprint

`IBlueprint`\<`any`\>

The blueprint to create the adapter.

#### Returns

[`AwsLambdaAdapter`](AwsLambdaAdapter.md)

#### Inherited from

`Adapter< AwsLambdaEvent, RawResponse, AwsLambdaContext, IncomingEvent, IncomingEventOptions, OutgoingResponse, AwsLambdaAdapterContext >.constructor`

## Properties

### blueprint

> `protected` `readonly` **blueprint**: `IBlueprint`\<`any`\>

Defined in: core/dist/index.d.ts:2844

#### Inherited from

`Adapter.blueprint`

***

### hooks

> `protected` `readonly` **hooks**: `AdapterHookType`\<[`AwsLambdaAdapterContext`](../../declarations/interfaces/AwsLambdaAdapterContext.md), [`RawResponse`](../../declarations/type-aliases/RawResponse.md)\>

Defined in: core/dist/index.d.ts:2845

#### Inherited from

`Adapter.hooks`

***

### middleware

> `protected` `readonly` **middleware**: `AdapterMixedPipeType`\<[`AwsLambdaAdapterContext`](../../declarations/interfaces/AwsLambdaAdapterContext.md), [`RawResponse`](../../declarations/type-aliases/RawResponse.md)\>[]

Defined in: core/dist/index.d.ts:2846

#### Inherited from

`Adapter.middleware`

***

### resolvedErrorHandlers

> `protected` `readonly` **resolvedErrorHandlers**: `Record`\<`string`, `IAdapterErrorHandler`\<[`AwsLambdaEvent`](../../declarations/type-aliases/AwsLambdaEvent.md), [`RawResponse`](../../declarations/type-aliases/RawResponse.md), [`AwsLambdaContext`](../../declarations/type-aliases/AwsLambdaContext.md)\>\>

Defined in: core/dist/index.d.ts:2847

#### Inherited from

`Adapter.resolvedErrorHandlers`

## Methods

### buildRawResponse()

> `protected` **buildRawResponse**(`context`, `eventHandler`?): `Promise`\<[`RawResponse`](../../declarations/type-aliases/RawResponse.md)\>

Defined in: core/dist/index.d.ts:2907

Build the raw response.

#### Parameters

##### context

[`AwsLambdaAdapterContext`](../../declarations/interfaces/AwsLambdaAdapterContext.md)

The event context.

##### eventHandler?

`AdapterEventHandlerType`\<`IncomingEvent`, `OutgoingResponse`\>

The event handler to be run.

#### Returns

`Promise`\<[`RawResponse`](../../declarations/type-aliases/RawResponse.md)\>

The raw response wrapper.

#### Inherited from

`Adapter.buildRawResponse`

***

### eventListener()

> `protected` **eventListener**(`rawEvent`, `executionContext`): `Promise`\<[`RawResponse`](../../declarations/type-aliases/RawResponse.md)\>

Defined in: aws-lambda-adapter/src/AwsLambdaAdapter.ts:128

Processes an incoming AWS Lambda event.

This method transforms the raw AWS Lambda event into a Stone.js `IncomingEvent`,
processes it through the pipeline, and generates a `RawResponse` to send back.

#### Parameters

##### rawEvent

[`AwsLambdaEvent`](../../declarations/type-aliases/AwsLambdaEvent.md)

The raw AWS Lambda event to be processed.

##### executionContext

[`AwsLambdaContext`](../../declarations/type-aliases/AwsLambdaContext.md)

The AWS Lambda execution context for the event.

#### Returns

`Promise`\<[`RawResponse`](../../declarations/type-aliases/RawResponse.md)\>

A promise resolving to the processed `RawResponse`.

***

### executeEventHandlerHooks()

> `protected` **executeEventHandlerHooks**(`hook`, `eventHandler`): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2935

Execute the event handler lifecycle hooks.

#### Parameters

##### hook

`KernelHookName`

The hook to execute.

##### eventHandler

`AdapterEventHandlerType`\<`IncomingEvent`, `OutgoingResponse`\>

The event handler to be run.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.executeEventHandlerHooks`

***

### executeHooks()

> `protected` **executeHooks**(`name`, `context`?, `error`?): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2943

Execute adapter lifecycle hooks.

#### Parameters

##### name

`AdapterHookName`

The hook's name.

##### context?

[`AwsLambdaAdapterContext`](../../declarations/interfaces/AwsLambdaAdapterContext.md)

The event context.

##### error?

`any`

The error to handle.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.executeHooks`

***

### handleError()

> `protected` **handleError**(`error`, `context`): `Promise`\<`AdapterEventBuilderType`\<[`RawResponse`](../../declarations/type-aliases/RawResponse.md)\>\>

Defined in: core/dist/index.d.ts:2899

Handle error.

#### Parameters

##### error

`Error`

The error to handle.

##### context

[`AwsLambdaAdapterContext`](../../declarations/interfaces/AwsLambdaAdapterContext.md)

The event context.

#### Returns

`Promise`\<`AdapterEventBuilderType`\<[`RawResponse`](../../declarations/type-aliases/RawResponse.md)\>\>

The raw response.

#### Inherited from

`Adapter.handleError`

***

### handleEvent()

> `protected` **handleEvent**(`context`, `eventHandler`): `Promise`\<`IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<[`RawResponse`](../../declarations/type-aliases/RawResponse.md)\>\>\>

Defined in: core/dist/index.d.ts:2891

Handle the event.

#### Parameters

##### context

[`AwsLambdaAdapterContext`](../../declarations/interfaces/AwsLambdaAdapterContext.md)

The event context.

##### eventHandler

`AdapterEventHandlerType`\<`IncomingEvent`, `OutgoingResponse`\>

The event handler to be run.

#### Returns

`Promise`\<`IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<[`RawResponse`](../../declarations/type-aliases/RawResponse.md)\>\>\>

The raw response wrapper.

#### Inherited from

`Adapter.handleEvent`

***

### makePipelineOptions()

> `protected` **makePipelineOptions**(): `PipelineOptions`\<[`AwsLambdaAdapterContext`](../../declarations/interfaces/AwsLambdaAdapterContext.md), `AdapterEventBuilderType`\<[`RawResponse`](../../declarations/type-aliases/RawResponse.md)\>\>

Defined in: core/dist/index.d.ts:2913

Create pipeline options for the Adapter.

#### Returns

`PipelineOptions`\<[`AwsLambdaAdapterContext`](../../declarations/interfaces/AwsLambdaAdapterContext.md), `AdapterEventBuilderType`\<[`RawResponse`](../../declarations/type-aliases/RawResponse.md)\>\>

The pipeline options for transforming the event.

#### Inherited from

`Adapter.makePipelineOptions`

***

### onStart()

> `protected` **onStart**(): `Promise`\<`void`\>

Defined in: aws-lambda-adapter/src/AwsLambdaAdapter.ts:108

Initializes the adapter and validates its execution context.

Ensures the adapter is running in an AWS Lambda environment. If not, it
throws an error to prevent misuse.

#### Returns

`Promise`\<`void`\>

#### Throws

If executed outside an AWS Lambda context (e.g., browser).

***

### resolveErrorHandler()

> `protected` **resolveErrorHandler**(`error`): `IAdapterErrorHandler`\<[`AwsLambdaEvent`](../../declarations/type-aliases/AwsLambdaEvent.md), [`RawResponse`](../../declarations/type-aliases/RawResponse.md), [`AwsLambdaContext`](../../declarations/type-aliases/AwsLambdaContext.md)\>

Defined in: core/dist/index.d.ts:2928

Get the error handler for the given error.

#### Parameters

##### error

`Error`

The error to get the handler for.

#### Returns

`IAdapterErrorHandler`\<[`AwsLambdaEvent`](../../declarations/type-aliases/AwsLambdaEvent.md), [`RawResponse`](../../declarations/type-aliases/RawResponse.md), [`AwsLambdaContext`](../../declarations/type-aliases/AwsLambdaContext.md)\>

The error handler.

#### Throws

IntegrationError

#### Inherited from

`Adapter.resolveErrorHandler`

***

### resolveEventHandler()

> `protected` **resolveEventHandler**(): `AdapterEventHandlerType`\<`IncomingEvent`, `OutgoingResponse`\>

Defined in: core/dist/index.d.ts:2920

Get the event handler for the adapter.

#### Returns

`AdapterEventHandlerType`\<`IncomingEvent`, `OutgoingResponse`\>

The event handler for the adapter.

#### Throws

If the event handler is missing.

#### Inherited from

`Adapter.resolveEventHandler`

***

### run()

> **run**\<`ExecutionResultType`\>(): `Promise`\<`ExecutionResultType`\>

Defined in: aws-lambda-adapter/src/AwsLambdaAdapter.ts:90

Executes the adapter and provides an AWS Lambda-compatible handler function.

The `run` method initializes the adapter and returns a handler function
that AWS Lambda can invoke. This handler processes events, manages context,
and returns the appropriate response.

#### Type Parameters

• **ExecutionResultType** = [`AwsLambdaEventHandlerFunction`](../../declarations/type-aliases/AwsLambdaEventHandlerFunction.md)

The type representing the AWS Lambda event handler function.

#### Returns

`Promise`\<`ExecutionResultType`\>

A promise resolving to the AWS Lambda handler function.

#### Throws

If used outside the AWS Lambda environment.

#### Overrides

`Adapter.run`

***

### sendEventThroughDestination()

> `protected` **sendEventThroughDestination**(`context`, `eventHandler`): `Promise`\<[`RawResponse`](../../declarations/type-aliases/RawResponse.md)\>

Defined in: core/dist/index.d.ts:2883

Send the raw event through the destination.

#### Parameters

##### context

[`AwsLambdaAdapterContext`](../../declarations/interfaces/AwsLambdaAdapterContext.md)

The event context.

##### eventHandler

`AdapterEventHandlerType`\<`IncomingEvent`, `OutgoingResponse`\>

The event handler to be run.

#### Returns

`Promise`\<[`RawResponse`](../../declarations/type-aliases/RawResponse.md)\>

Platform-specific response.

#### Throws

IntegrationError

#### Inherited from

`Adapter.sendEventThroughDestination`

***

### validateContextAndEventHandler()

> `protected` **validateContextAndEventHandler**(`context`, `eventHandler`): `void`

Defined in: core/dist/index.d.ts:2951

Validate the context and event handler.

#### Parameters

##### context

[`AwsLambdaAdapterContext`](../../declarations/interfaces/AwsLambdaAdapterContext.md)

The context to validate.

##### eventHandler

`AdapterEventHandlerType`\<`IncomingEvent`, `OutgoingResponse`\>

The event handler to validate.

#### Returns

`void`

#### Throws

IntegrationError

#### Inherited from

`Adapter.validateContextAndEventHandler`

***

### create()

> `static` **create**(`blueprint`): [`AwsLambdaAdapter`](AwsLambdaAdapter.md)

Defined in: aws-lambda-adapter/src/AwsLambdaAdapter.ts:75

Creates an instance of the `AwsLambdaAdapter`.

#### Parameters

##### blueprint

`IBlueprint`

The application blueprint.

#### Returns

[`AwsLambdaAdapter`](AwsLambdaAdapter.md)

A new instance of `AwsLambdaAdapter`.

#### Example

```typescript
const adapter = AwsLambdaAdapter.create(blueprint);
await adapter.run();
```
