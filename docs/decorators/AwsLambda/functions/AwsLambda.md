[**AWS Lambda Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda Adapter Documentation](../../../modules.md) / [decorators/AwsLambda](../README.md) / AwsLambda

# Function: AwsLambda()

> **AwsLambda**\<`T`\>(`options`): `ClassDecorator`

Defined in: [aws-lambda-adapter/src/decorators/AwsLambda.ts:35](https://github.com/stonemjs/aws-lambda-adapter/blob/6762f5f926b4cb9643992a757595270c92f0d9ac/src/decorators/AwsLambda.ts#L35)

A Stone.js decorator that integrates the AWS Lambda Adapter with a class.

This decorator modifies the class to seamlessly enable AWS Lambda as the
execution environment for a Stone.js application. By applying this decorator,
the class is automatically configured with the necessary blueprint for AWS Lambda.

## Type Parameters

• **T** *extends* `ClassType` = `ClassType`

The type of the class being decorated. Defaults to `ClassType`.

## Parameters

### options

[`AwsLambdaOptions`](../interfaces/AwsLambdaOptions.md) = `{}`

Optional configuration to customize the AWS Lambda Adapter.

## Returns

`ClassDecorator`

A class decorator that applies the AWS Lambda adapter configuration.

## Example

```typescript
import { AwsLambda } from '@stone-js/aws-lambda-adapter';

@AwsLambda({
  alias: 'MyAWSLambda',
})
class App {
  // Your application logic here
}
```
