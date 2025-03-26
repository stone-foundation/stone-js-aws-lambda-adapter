[**AWS Lambda Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda Adapter Documentation](../../../modules.md) / [middleware/IncomingEventMiddleware](../README.md) / IncomingEventMiddleware

# Class: IncomingEventMiddleware

Defined in: [aws-lambda-adapter/src/middleware/IncomingEventMiddleware.ts:11](https://github.com/stonemjs/aws-lambda-adapter/blob/dd32cc4c1c231995d4ac18a5ed4fe2bb473349e7/src/middleware/IncomingEventMiddleware.ts#L11)

Middleware for handling incoming events and transforming them into Stone.js events.

This class processes incoming events, extracting relevant data and forwards them to the next middleware in the pipeline.

## Constructors

### new IncomingEventMiddleware()

> **new IncomingEventMiddleware**(): [`IncomingEventMiddleware`](IncomingEventMiddleware.md)

#### Returns

[`IncomingEventMiddleware`](IncomingEventMiddleware.md)

## Methods

### handle()

> **handle**(`context`, `next`): `Promise`\<[`AwsLambdaAdapterResponseBuilder`](../../../declarations/type-aliases/AwsLambdaAdapterResponseBuilder.md)\>

Defined in: [aws-lambda-adapter/src/middleware/IncomingEventMiddleware.ts:20](https://github.com/stonemjs/aws-lambda-adapter/blob/dd32cc4c1c231995d4ac18a5ed4fe2bb473349e7/src/middleware/IncomingEventMiddleware.ts#L20)

Handles the incoming event, processes it, and invokes the next middleware in the pipeline.

#### Parameters

##### context

[`AwsLambdaAdapterContext`](../../../declarations/interfaces/AwsLambdaAdapterContext.md)

The adapter context containing the raw event, execution context, and other data.

##### next

`NextPipe`\<[`AwsLambdaAdapterContext`](../../../declarations/interfaces/AwsLambdaAdapterContext.md), [`AwsLambdaAdapterResponseBuilder`](../../../declarations/type-aliases/AwsLambdaAdapterResponseBuilder.md)\>

The next middleware to be invoked in the pipeline.

#### Returns

`Promise`\<[`AwsLambdaAdapterResponseBuilder`](../../../declarations/type-aliases/AwsLambdaAdapterResponseBuilder.md)\>

A promise that resolves to the processed Response Builder.

#### Throws

If required components are missing in the context.
