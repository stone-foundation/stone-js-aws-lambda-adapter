[**AWS Lambda Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda Adapter Documentation](../../modules.md) / [resolvers](../README.md) / awsLambdaAdapterResolver

# Function: awsLambdaAdapterResolver()

> **awsLambdaAdapterResolver**(`blueprint`): `IAdapter`

Defined in: [aws-lambda-adapter/src/resolvers.ts:12](https://github.com/stonemjs/aws-lambda-adapter/blob/40d2096417dfa656208c25f0f4a9d23bf5291928/src/resolvers.ts#L12)

Adapter resolver for generic AWS Lambda adapter.

Creates and configures an `AWSLambdaAdapter` for handling generic events in AWS Lambda.

## Parameters

### blueprint

`IBlueprint`\<`any`\>

The `IBlueprint` providing configuration and dependencies.

## Returns

`IAdapter`

An `AWSLambdaAdapter` instance.
