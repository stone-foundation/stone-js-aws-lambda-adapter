[**AWS Lambda Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda Adapter Documentation](../../modules.md) / [AwsLambdaErrorHandler](../README.md) / AwsLambdaErrorHandler

# Class: AwsLambdaErrorHandler

Defined in: [aws-lambda-adapter/src/AwsLambdaErrorHandler.ts:22](https://github.com/stonemjs/aws-lambda-adapter/blob/6762f5f926b4cb9643992a757595270c92f0d9ac/src/AwsLambdaErrorHandler.ts#L22)

Class representing an AwsLambdaErrorHandler.

## Implements

- `IAdapterErrorHandler`\<[`AwsLambdaEvent`](../../declarations/type-aliases/AwsLambdaEvent.md), [`RawResponse`](../../declarations/type-aliases/RawResponse.md), [`AwsLambdaContext`](../../declarations/type-aliases/AwsLambdaContext.md)\>

## Constructors

### new AwsLambdaErrorHandler()

> **new AwsLambdaErrorHandler**(`options`): [`AwsLambdaErrorHandler`](AwsLambdaErrorHandler.md)

Defined in: [aws-lambda-adapter/src/AwsLambdaErrorHandler.ts:30](https://github.com/stonemjs/aws-lambda-adapter/blob/6762f5f926b4cb9643992a757595270c92f0d9ac/src/AwsLambdaErrorHandler.ts#L30)

Create an AwsLambdaErrorHandler.

#### Parameters

##### options

[`AwsLambdaErrorHandlerOptions`](../interfaces/AwsLambdaErrorHandlerOptions.md)

AwsLambdaErrorHandler options.

#### Returns

[`AwsLambdaErrorHandler`](AwsLambdaErrorHandler.md)

## Methods

### handle()

> **handle**(`error`, `context`): `AdapterEventBuilderType`\<[`RawResponse`](../../declarations/type-aliases/RawResponse.md)\>

Defined in: [aws-lambda-adapter/src/AwsLambdaErrorHandler.ts:41](https://github.com/stonemjs/aws-lambda-adapter/blob/6762f5f926b4cb9643992a757595270c92f0d9ac/src/AwsLambdaErrorHandler.ts#L41)

Handle an error.

#### Parameters

##### error

`Error`

The error to handle.

##### context

`AdapterErrorContext`\<[`AwsLambdaEvent`](../../declarations/type-aliases/AwsLambdaEvent.md), [`RawResponse`](../../declarations/type-aliases/RawResponse.md), [`AwsLambdaContext`](../../declarations/type-aliases/AwsLambdaContext.md)\>

The context of the adapter.

#### Returns

`AdapterEventBuilderType`\<[`RawResponse`](../../declarations/type-aliases/RawResponse.md)\>

The raw response builder.

#### Implementation of

`IAdapterErrorHandler.handle`
