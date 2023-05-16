import {
  DynamoDBClient,
  PutItemCommand,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";

type HttpResponse = {
  statusCode: number;
  body: string;
};

//discrimenated union
type TodoPriority = "low" | "medium" | "high";

type ToDo = {
  id: string;
  todo: string;
  createdAt: Date;
  completed: boolean;
};

export const handler = async (event: any): Promise<HttpResponse> => {
  try {
    const client = new DynamoDBClient({ region: "us-east-1" });

    // let result = await client
    //   .scan({
    //     TableName: "TodoTableFun",
    //   })
    //   .promise();

    const command = new ScanCommand({
      TableName: "MyTable",
    });

    const result = await client.send(command);

    let todos = result.Items;

    return {
      statusCode: 200,
      body: JSON.stringify(todos),
    };
  } catch (error: any) {
    console.log(error);
    return {
      statusCode: 500,
      body: error.message,
    };
  }
};

// module.exports = {
//   handler: fetchTodo,
// };
