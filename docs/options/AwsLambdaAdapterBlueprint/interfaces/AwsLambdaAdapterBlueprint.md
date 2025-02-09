[**AWS Lambda Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda Adapter Documentation](../../../modules.md) / [options/AwsLambdaAdapterBlueprint](../README.md) / AwsLambdaAdapterBlueprint

# Interface: AwsLambdaAdapterBlueprint

Defined in: [aws-lambda-adapter/src/options/AwsLambdaAdapterBlueprint.ts:24](https://github.com/stonemjs/aws-lambda-adapter/blob/b2e29f567ac56717023f9597000ee3f0d0278093/src/options/AwsLambdaAdapterBlueprint.ts#L24)

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

Defined in: core/dist/index.d.ts:571

Application-level settings, including environment, middleware, logging, and service registration.

#### Inherited from

`StoneBlueprint.stone`
