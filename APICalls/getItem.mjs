import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  PutCommand,
  GetCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);

const tableName = "AlarmTable";

export const handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    switch (event.routeKey) {
      case "DELETE /users/{UserID}":
        await dynamo.send(
          new DeleteCommand({
            TableName: tableName,
            Key: {
              UserID: event.pathParameters.UserID,
            },
          })
        );
        body = `Deleted item ${event.pathParameters.UserID}`;
        break;
      case "GET /users/{UserID}":
        body = await dynamo.send(
          new GetCommand({
            TableName: tableName,
            Key: {
              UserID: event.pathParameters.UserID,
            },
          })
        );
        body = body.Item;
        break;
      case "GET /users":
        body = await dynamo.send(
          new ScanCommand({ TableName: tableName })
        );
        body = body.Items;
        break;
      case "PUT /users":
        let requestJSON = JSON.parse(event.body);
        await dynamo.send(
          new PutCommand({
            TableName: tableName,
            Item: {
              UserID: requestJSON.UserID,
              price: requestJSON.price,
              name: requestJSON.name,
            },
          })
        );
        body = `Put item ${requestJSON.UserID}`;
        break;
      default:
        throw new Error(`Unsupported route: "${event.routeKey}"`);
    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers,
  };
};
