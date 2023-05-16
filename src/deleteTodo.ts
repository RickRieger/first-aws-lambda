import { DynamoDBClient, DeleteItemCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

export const handler = async (event: any) => {
  try {
    const client = new DynamoDBClient({ region: "us-east-1" });
    const ddbDocClient = DynamoDBDocument.from(client);
    await ddbDocClient.delete({
      TableName: "MyTable",
      Key: { id: event.pathParameters.id },
    });
    return {
      statusCode: 200,
      body: "ok",
    };
  } catch (error: any) {
    console.log(error);
    return {
      statusCode: 500,
      body: error.message,
    };
  }
};

// import { DynamoDBClient, DeleteItemCommand } from "@aws-sdk/client-dynamodb";

// export const handler = async (event: any) => {
//   try {
//     const client = new DynamoDBClient({ region: "us-east-1" });
//     const input = {
//       TableName: "MyTable",
//       Key: { id: event.pathParameters.id },
//     };
//     const command = new DeleteItemCommand(input);
//     const response = await client.send(command);
//     return {
//       statusCode: 200,
//       body: response,
//     };
//   } catch (error: any) {
//     console.log(error);
//     return {
//       statusCode: 500,
//       body: error.message,
//     };
//   }
// };
