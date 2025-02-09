[**AWS Lambda Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda Adapter Documentation](../../modules.md) / [AwsLambdaAdapter](../README.md) / AwsLambdaAdapter

# Class: AwsLambdaAdapter

Defined in: aws-lambda-adapter/src/AwsLambdaAdapter.ts:55

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

> `protected` **new AwsLambdaAdapter**(`options`): [`AwsLambdaAdapter`](AwsLambdaAdapter.md)

Defined in: core/dist/index.d.ts:2631

Create an Adapter.

#### Parameters

##### options

`AdapterOptions`\<`IncomingEvent`, `OutgoingResponse`\>

Adapter options.

#### Returns

[`AwsLambdaAdapter`](AwsLambdaAdapter.md)

#### Inherited from

`Adapter< AwsLambdaEvent, RawResponse, AwsLambdaContext, IncomingEvent, IncomingEventOptions, OutgoingResponse, AwsLambdaAdapterContext >.constructor`

## Properties

### blueprint

> `protected` `readonly` **blueprint**: `IBlueprint`\<`any`\>

Defined in: core/dist/index.d.ts:2623

#### Inherited from

`Adapter.blueprint`

***

### handlerResolver

> `protected` `readonly` **handlerResolver**: `AdapterEventHandlerResolver`\<`IncomingEvent`, `OutgoingResponse`\>

Defined in: core/dist/index.d.ts:2624

#### Inherited from

`Adapter.handlerResolver`

***

### hooks

> `protected` `readonly` **hooks**: `AdapterHooks`

Defined in: core/dist/index.d.ts:2622

#### Inherited from

`Adapter.hooks`

***

### logger

> `protected` `readonly` **logger**: `ILogger`

Defined in: core/dist/index.d.ts:2621

#### Inherited from

`Adapter.logger`

## Methods

### afterHandle()

> `protected` **afterHandle**(`eventHandler`, `context`): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2681

Hook that runs after handling each event.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingEvent`, `OutgoingResponse`\>

Action handler to be run.

##### context

[`AwsLambdaAdapterContext`](../../declarations/interfaces/AwsLambdaAdapterContext.md)

The event context.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.afterHandle`

***

### beforeHandle()

> `protected` **beforeHandle**(`eventHandler`): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2674

Hook that runs before handling each event.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingEvent`, `OutgoingResponse`\>

Action handler to be run.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.beforeHandle`

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

### executeHooks()

> `protected` **executeHooks**(`hook`, `context`?): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2695

Execute lifecycle hooks.

#### Parameters

##### hook

keyof `AdapterHooks`

The hook to execute.

##### context?

[`AwsLambdaAdapterContext`](../../declarations/interfaces/AwsLambdaAdapterContext.md)

The event context.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.executeHooks`

***

### makePipelineOptions()

> `protected` **makePipelineOptions**(): `PipelineOptions`\<[`AwsLambdaAdapterContext`](../../declarations/interfaces/AwsLambdaAdapterContext.md), `IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<[`RawResponse`](../../declarations/type-aliases/RawResponse.md)\>\>\>

Defined in: core/dist/index.d.ts:2701

Create pipeline options for the Adapter.

#### Returns

`PipelineOptions`\<[`AwsLambdaAdapterContext`](../../declarations/interfaces/AwsLambdaAdapterContext.md), `IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<[`RawResponse`](../../declarations/type-aliases/RawResponse.md)\>\>\>

The pipeline options for transforming the event.

#### Inherited from

`Adapter.makePipelineOptions`

***

### onInit()

> `protected` **onInit**(): `Promise`\<`void`\>

Defined in: aws-lambda-adapter/src/AwsLambdaAdapter.ts:108

Initializes the adapter and validates its execution context.

Ensures the adapter is running in an AWS Lambda environment. If not, it
throws an error to prevent misuse.

#### Returns

`Promise`\<`void`\>

#### Throws

If executed outside an AWS Lambda context (e.g., browser).

#### Overrides

`Adapter.onInit`

***

### onPrepare()

> `protected` **onPrepare**(`eventHandler`): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2668

Hook that runs before preparing the event context.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingEvent`, `OutgoingResponse`\>

Action handler to be run.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.onPrepare`

***

### onTerminate()

> `protected` **onTerminate**(`eventHandler`, `context`): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2688

Hook that runs after running the action handler.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingEvent`, `OutgoingResponse`\>

Action handler to be run.

##### context

[`AwsLambdaAdapterContext`](../../declarations/interfaces/AwsLambdaAdapterContext.md)

The event context.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.onTerminate`

***

### prepareResponse()

> `protected` **prepareResponse**(`eventHandler`, `context`): `Promise`\<`IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<[`RawResponse`](../../declarations/type-aliases/RawResponse.md)\>\>\>

Defined in: core/dist/index.d.ts:2716

Prepare the response for the event handler.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingEvent`, `OutgoingResponse`\>

The event handler to prepare the response for.

##### context

[`AwsLambdaAdapterContext`](../../declarations/interfaces/AwsLambdaAdapterContext.md)

The event context.

#### Returns

`Promise`\<`IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<[`RawResponse`](../../declarations/type-aliases/RawResponse.md)\>\>\>

The raw response wrapper.

#### Inherited from

`Adapter.prepareResponse`

***

### resolveErrorHandler()

> `protected` **resolveErrorHandler**(`error`): `IAdapterErrorHandler`\<[`AwsLambdaEvent`](../../declarations/type-aliases/AwsLambdaEvent.md), [`RawResponse`](../../declarations/type-aliases/RawResponse.md), [`AwsLambdaContext`](../../declarations/type-aliases/AwsLambdaContext.md)\>

Defined in: core/dist/index.d.ts:2708

Get the error handler for the given error.

#### Parameters

##### error

`Error`

The error to get the handler for.

#### Returns

`IAdapterErrorHandler`\<[`AwsLambdaEvent`](../../declarations/type-aliases/AwsLambdaEvent.md), [`RawResponse`](../../declarations/type-aliases/RawResponse.md), [`AwsLambdaContext`](../../declarations/type-aliases/AwsLambdaContext.md)\>

The error handler.

#### Inherited from

`Adapter.resolveErrorHandler`

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

> `protected` **sendEventThroughDestination**(`eventHandler`, `context`): `Promise`\<[`RawResponse`](../../declarations/type-aliases/RawResponse.md)\>

Defined in: core/dist/index.d.ts:2658

Incoming message listener.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingEvent`, `OutgoingResponse`\>

##### context

[`AwsLambdaAdapterContext`](../../declarations/interfaces/AwsLambdaAdapterContext.md)

The event context.

#### Returns

`Promise`\<[`RawResponse`](../../declarations/type-aliases/RawResponse.md)\>

Platform-specific output.

#### Inherited from

`Adapter.sendEventThroughDestination`

***

### create()

> `static` **create**(`options`): [`AwsLambdaAdapter`](AwsLambdaAdapter.md)

Defined in: aws-lambda-adapter/src/AwsLambdaAdapter.ts:75

Creates an instance of the `AwsLambdaAdapter`.

This factory method allows developers to instantiate the adapter with
the necessary configuration options, ensuring it is correctly set up for
AWS Lambda usage.

#### Parameters

##### options

`AdapterOptions`\<`IncomingEvent`, `OutgoingResponse`\>

The configuration options for the adapter, including
                 handler resolver, error handling, and other settings.

#### Returns

[`AwsLambdaAdapter`](AwsLambdaAdapter.md)

A fully initialized `AwsLambdaAdapter` instance.
