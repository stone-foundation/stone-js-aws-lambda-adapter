[**AWS Lambda Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda Adapter Documentation](../../modules.md) / [declarations](../README.md) / AwsLambdaAdapterContext

# Interface: AwsLambdaAdapterContext

Defined in: [aws-lambda-adapter/src/declarations.ts:43](https://github.com/stonemjs/aws-lambda-adapter/blob/6762f5f926b4cb9643992a757595270c92f0d9ac/src/declarations.ts#L43)

Represents the context for the AWS Lambda Adapter.

This interface extends `AdapterContext` and includes additional properties
specific to generic AWS Lambda events.

## Extends

- `AdapterContext`\<[`AwsLambdaEvent`](../type-aliases/AwsLambdaEvent.md), [`RawResponse`](../type-aliases/RawResponse.md), [`AwsLambdaContext`](../type-aliases/AwsLambdaContext.md), `IncomingEvent`, `IncomingEventOptions`, `OutgoingResponse`\>

## Properties

### executionContext

> `readonly` **executionContext**: [`AwsLambdaContext`](../type-aliases/AwsLambdaContext.md)

Defined in: core/dist/index.d.ts:1636

The executionContext of type ExecutionContextType.

#### Inherited from

`AdapterContext.executionContext`

***

### incomingEvent?

> `optional` **incomingEvent**: `IncomingEvent`

Defined in: core/dist/index.d.ts:1640

The incomingEvent associated with the executionContext.

#### Inherited from

`AdapterContext.incomingEvent`

***

### incomingEventBuilder

> `readonly` **incomingEventBuilder**: `IAdapterEventBuilder`\<`IncomingEventOptions`, `IncomingEvent`\>

Defined in: core/dist/index.d.ts:1648

The incomingEventBuilder.

#### Inherited from

`AdapterContext.incomingEventBuilder`

***

### outgoingResponse?

> `optional` **outgoingResponse**: `OutgoingResponse`

Defined in: core/dist/index.d.ts:1644

The outgoingResponse associated with the executionContext.

#### Inherited from

`AdapterContext.outgoingResponse`

***

### rawEvent

> `readonly` **rawEvent**: [`AwsLambdaEvent`](../type-aliases/AwsLambdaEvent.md)

Defined in: core/dist/index.d.ts:1628

The rawEvent of type RawEventType.

#### Inherited from

`AdapterContext.rawEvent`

***

### rawResponse

> **rawResponse**: [`RawResponse`](../type-aliases/RawResponse.md)

Defined in: [aws-lambda-adapter/src/declarations.ts:54](https://github.com/stonemjs/aws-lambda-adapter/blob/6762f5f926b4cb9643992a757595270c92f0d9ac/src/declarations.ts#L54)

The raw response associated with the current context.

#### Overrides

`AdapterContext.rawResponse`

***

### rawResponseBuilder

> `readonly` **rawResponseBuilder**: `IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<[`RawResponse`](../type-aliases/RawResponse.md)\>\>

Defined in: core/dist/index.d.ts:1652

The rawResponseBuilder.

#### Inherited from

`AdapterContext.rawResponseBuilder`
