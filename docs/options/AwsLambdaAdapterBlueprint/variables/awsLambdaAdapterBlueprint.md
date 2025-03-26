[**AWS Lambda Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda Adapter Documentation](../../../modules.md) / [options/AwsLambdaAdapterBlueprint](../README.md) / awsLambdaAdapterBlueprint

# Variable: awsLambdaAdapterBlueprint

> `const` **awsLambdaAdapterBlueprint**: [`AwsLambdaAdapterBlueprint`](../interfaces/AwsLambdaAdapterBlueprint.md)

Defined in: [aws-lambda-adapter/src/options/AwsLambdaAdapterBlueprint.ts:43](https://github.com/stonemjs/aws-lambda-adapter/blob/dd32cc4c1c231995d4ac18a5ed4fe2bb473349e7/src/options/AwsLambdaAdapterBlueprint.ts#L43)

Default blueprint configuration for the AWS Lambda Adapter.

This blueprint defines the initial configuration for the AWS Lambda adapter
within the Stone.js framework. It includes:
- An alias for the AWS Lambda platform (`AWS_LAMBDA_PLATFORM`).
- A default resolver function (currently a placeholder).
- Middleware, hooks, and state flags (`current`, `default`, `preferred`).
