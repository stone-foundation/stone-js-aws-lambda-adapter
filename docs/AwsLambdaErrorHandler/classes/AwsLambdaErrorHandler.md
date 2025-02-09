[**AWS Lambda Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda Adapter Documentation](../../modules.md) / [AwsLambdaErrorHandler](../README.md) / AwsLambdaErrorHandler

# Class: AwsLambdaErrorHandler

Defined in: [aws-lambda-adapter/src/AwsLambdaErrorHandler.ts:14](https://github.com/stonemjs/aws-lambda-adapter/blob/b2e29f567ac56717023f9597000ee3f0d0278093/src/AwsLambdaErrorHandler.ts#L14)

Class representing an AwsLambdaErrorHandler.

## Implements

- `IAdapterErrorHandler`\<[`AwsLambdaEvent`](../../declarations/type-aliases/AwsLambdaEvent.md), [`RawResponse`](../../declarations/type-aliases/RawResponse.md), [`AwsLambdaContext`](../../declarations/type-aliases/AwsLambdaContext.md)\>

## Constructors

### new AwsLambdaErrorHandler()

> **new AwsLambdaErrorHandler**(`options`): [`AwsLambdaErrorHandler`](AwsLambdaErrorHandler.md)

Defined in: [aws-lambda-adapter/src/AwsLambdaErrorHandler.ts:22](https://github.com/stonemjs/aws-lambda-adapter/blob/b2e29f567ac56717023f9597000ee3f0d0278093/src/AwsLambdaErrorHandler.ts#L22)

Create an AwsLambdaErrorHandler.

#### Parameters

##### options

[`AwsLambdaErrorHandlerOptions`](../interfaces/AwsLambdaErrorHandlerOptions.md)

AwsLambdaErrorHandler options.

#### Returns

[`AwsLambdaErrorHandler`](AwsLambdaErrorHandler.md)

## Methods

### handle()

> **handle**(`error`, `context`): `Promise`\<[`RawResponse`](../../declarations/type-aliases/RawResponse.md)\>

Defined in: [aws-lambda-adapter/src/AwsLambdaErrorHandler.ts:37](https://github.com/stonemjs/aws-lambda-adapter/blob/b2e29f567ac56717023f9597000ee3f0d0278093/src/AwsLambdaErrorHandler.ts#L37)

Handle an error.

#### Parameters

##### error

`Error`

The error to handle.

##### context

`AdapterErrorContext`\<[`AwsLambdaEvent`](../../declarations/type-aliases/AwsLambdaEvent.md), [`RawResponse`](../../declarations/type-aliases/RawResponse.md), [`AwsLambdaContext`](../../declarations/type-aliases/AwsLambdaContext.md)\>

The context of the adapter.

#### Returns

`Promise`\<[`RawResponse`](../../declarations/type-aliases/RawResponse.md)\>

The raw response.

#### Implementation of

`IAdapterErrorHandler.handle`
