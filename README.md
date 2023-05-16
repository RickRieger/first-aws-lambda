# first-aws-lambda-api

- make sure you install the serverless framework, have node, typescript installed and configured...all that good stuff.

```
npm i -g serverless
npm i typescript
serverless config credentials --provider aws --key some_key --secret some_secret
npm i @aws-sdk/client-dynamodb
@aws-sdk/lib-dynamodb
```

```
import { DynamoDBClient, DeleteItemCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

export const handler = async (event: any) => {
  try {
    const client = new DynamoDBClient({ region: "us-east-1" });
    const ddbDocClient = DynamoDBDocument.from(client);

    // const input = {
    //   TableName: "MyTable",
    //   Key: { id: event.pathParameters.id },
    // };

    await ddbDocClient.delete({
      TableName: "MyTable",
      Key: { id: event.pathParameters.id },
    });


    // const command = new DeleteItemCommand(input);
    // const response = await client.send(command);

    return {
      statusCode: 200,
      body: "delete received",
    };
  } catch (error: any) {
    console.log(error);
    return {
      statusCode: 500,
      body: error.message,
    };
  }
};

```
