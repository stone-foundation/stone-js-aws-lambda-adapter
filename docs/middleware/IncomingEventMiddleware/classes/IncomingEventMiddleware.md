[**AWS Lambda Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda Adapter Documentation](../../../modules.md) / [middleware/IncomingEventMiddleware](../README.md) / IncomingEventMiddleware

# Class: IncomingEventMiddleware

Defined in: [aws-lambda-adapter/src/middleware/IncomingEventMiddleware.ts:12](https://github.com/stonemjs/aws-lambda-adapter/blob/b2e29f567ac56717023f9597000ee3f0d0278093/src/middleware/IncomingEventMiddleware.ts#L12)

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

Defined in: [aws-lambda-adapter/src/middleware/IncomingEventMiddleware.ts:21](https://github.com/stonemjs/aws-lambda-adapter/blob/b2e29f567ac56717023f9597000ee3f0d0278093/src/middleware/IncomingEventMiddleware.ts#L21)

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
