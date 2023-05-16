// const { v4 } = require("uuid");
// const AWS = require("aws-sdk");
import { v4 } from "uuid";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

export const handler = async (event: any) => {
  try {
    const client = new DynamoDBClient({ region: "us-east-1" });
    const ddbDocClient = DynamoDBDocument.from(client);

    const { todo } = JSON.parse(event.body);
    const createdAt = new Date().toISOString();
    const id = v4();

    const newTodo = {
      id,
      todo,
      createdAt,
      completed: false,
    };

    // const command = new PutItemCommand({
    //   TableName: "MyTable",
    //   Item: { id: id },
    // });

    // const response = await client.send(command);
    // console.log("response:", response);

    await ddbDocClient.put({
      TableName: "MyTable",
      Item: newTodo,
    });

    return {
      statusCode: 200,
      body: JSON.stringify(newTodo),
    };
  } catch (error) {
    console.log(error);
  }
};

// module.exports = {
//   handler: addTodo,
// };
