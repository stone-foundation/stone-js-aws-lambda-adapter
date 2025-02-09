[**AWS Lambda Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda Adapter Documentation](../../modules.md) / [resolvers](../README.md) / awsLambdaAdapterResolver

# Function: awsLambdaAdapterResolver()

> **awsLambdaAdapterResolver**(`blueprint`): `IAdapter`

Defined in: [aws-lambda-adapter/src/resolvers.ts:12](https://github.com/stonemjs/aws-lambda-adapter/blob/b2e29f567ac56717023f9597000ee3f0d0278093/src/resolvers.ts#L12)

Adapter resolver for generic AWS Lambda adapter.

Creates and configures an `AWSLambdaAdapter` for handling generic events in AWS Lambda.

## Parameters

### blueprint

`IBlueprint`\<`any`\>

The `IBlueprint` providing configuration and dependencies.

## Returns

`IAdapter`

An `AWSLambdaAdapter` instance.
