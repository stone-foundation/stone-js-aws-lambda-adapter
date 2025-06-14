[**AWS Lambda Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda Adapter Documentation](../../../modules.md) / [options/AwsLambdaAdapterBlueprint](../README.md) / awsLambdaAdapterBlueprint

# Variable: awsLambdaAdapterBlueprint

> `const` **awsLambdaAdapterBlueprint**: [`AwsLambdaAdapterBlueprint`](../interfaces/AwsLambdaAdapterBlueprint.md)

Defined in: [aws-lambda-adapter/src/options/AwsLambdaAdapterBlueprint.ts:44](https://github.com/stonemjs/aws-lambda-adapter/blob/40d2096417dfa656208c25f0f4a9d23bf5291928/src/options/AwsLambdaAdapterBlueprint.ts#L44)

Default blueprint configuration for the AWS Lambda Adapter.

This blueprint defines the initial configuration for the AWS Lambda adapter
within the Stone.js framework. It includes:
- An alias for the AWS Lambda platform (`AWS_LAMBDA_PLATFORM`).
- A default resolver function (currently a placeholder).
- Middleware, hooks, and state flags (`current`, `default`, `preferred`).
