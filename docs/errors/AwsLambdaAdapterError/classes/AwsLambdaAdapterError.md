[**AWS Lambda Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda Adapter Documentation](../../../modules.md) / [errors/AwsLambdaAdapterError](../README.md) / AwsLambdaAdapterError

# Class: AwsLambdaAdapterError

Defined in: [aws-lambda-adapter/src/errors/AwsLambdaAdapterError.ts:6](https://github.com/stonemjs/aws-lambda-adapter/blob/40d2096417dfa656208c25f0f4a9d23bf5291928/src/errors/AwsLambdaAdapterError.ts#L6)

Custom error for AWS Lambda adapter operations.

## Extends

- `IntegrationError`

## Constructors

### new AwsLambdaAdapterError()

> **new AwsLambdaAdapterError**(`message`, `options`?): [`AwsLambdaAdapterError`](AwsLambdaAdapterError.md)

Defined in: [aws-lambda-adapter/src/errors/AwsLambdaAdapterError.ts:7](https://github.com/stonemjs/aws-lambda-adapter/blob/40d2096417dfa656208c25f0f4a9d23bf5291928/src/errors/AwsLambdaAdapterError.ts#L7)

#### Parameters

##### message

`string`

##### options?

`ErrorOptions`

#### Returns

[`AwsLambdaAdapterError`](AwsLambdaAdapterError.md)

#### Overrides

`IntegrationError.constructor`

## Properties

### cause?

> `readonly` `optional` **cause**: `Error`

Defined in: core/dist/index.d.ts:3343

#### Inherited from

`IntegrationError.cause`

***

### code?

> `readonly` `optional` **code**: `string`

Defined in: core/dist/index.d.ts:3342

#### Inherited from

`IntegrationError.code`

***

### metadata?

> `readonly` `optional` **metadata**: `unknown`

Defined in: core/dist/index.d.ts:3344

#### Inherited from

`IntegrationError.metadata`

## Methods

### toString()

> **toString**(`multiline`?): `string`

Defined in: core/dist/index.d.ts:3365

Converts the error to a formatted string representation.

#### Parameters

##### multiline?

`boolean`

Determine if output value must be multiline or not.

#### Returns

`string`

A formatted error string.

#### Inherited from

`IntegrationError.toString`

***

### create()

> `static` **create**\<`T`\>(`message`, `options`?): `T`

Defined in: core/dist/index.d.ts:3351

Create a RuntimeError.

#### Type Parameters

• **T** *extends* `RuntimeError` = `RuntimeError`

#### Parameters

##### message

`string`

##### options?

`ErrorOptions`

The options to create a RuntimeError.

#### Returns

`T`

A new RuntimeError instance.

#### Inherited from

`IntegrationError.create`
