[**AWS Lambda Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda Adapter Documentation](../../../modules.md) / [options/AwsLambdaAdapterBlueprint](../README.md) / AwsLambdaAdapterBlueprint

# Interface: AwsLambdaAdapterBlueprint

Defined in: [aws-lambda-adapter/src/options/AwsLambdaAdapterBlueprint.ts:32](https://github.com/stonemjs/aws-lambda-adapter/blob/dd32cc4c1c231995d4ac18a5ed4fe2bb473349e7/src/options/AwsLambdaAdapterBlueprint.ts#L32)

Blueprint interface for the AWS Lambda Adapter.

This interface extends `StoneBlueprint` and defines the structure of the
AWS Lambda adapter blueprint used in the Stone.js framework. It includes
a `stone` object with an array of `AwsLambdaAdapterConfig` items.

## Extends

- `StoneBlueprint`

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### stone

> **stone**: `Partial`\<`AppConfig`\>

Defined in: core/dist/index.d.ts:609

Application-level settings, including environment, middleware, logging, and service registration.

#### Inherited from

`StoneBlueprint.stone`
