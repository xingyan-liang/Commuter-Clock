import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  PutCommand,
  GetCommand,
  DeleteCommand,
  UpdateCommand,
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
      case "DELETE /users/{UserID}": //deletes user based on ID
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

      case "GET /users/{UserID}": //gets single user
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

      case "GET /users": //gets all users(probably delete this)
        body = await dynamo.send(
          new ScanCommand({ TableName: tableName })
        );
        body = body.Items;
        break;

      case "POST /users/{UserID}/alarms": //add a new alarm
        let alarmJSON = JSON.parse(event.body);
      
        // Validate the request body
        if (!alarmJSON.newAlarm) {
          throw new Error("Missing required field: newAlarm");
        }
      
        await dynamo.send(
          new UpdateCommand({
            TableName: tableName,
            Key: {
              UserID: event.pathParameters.UserID,
            },
            UpdateExpression: "SET #Alarms = list_append(if_not_exists(#Alarms, :emptyList), :newAlarm)",
            ExpressionAttributeNames: {
              "#Alarms": "Alarms", //remaps alarms as it is a reserved word
            },
            ExpressionAttributeValues: {
              ":newAlarm": [alarmJSON.newAlarm], // Wrap the new alarm in an array
              ":emptyList": [], // Fallback if Alarms attribute doesn't exist
            },
            ReturnValues: "UPDATED_NEW", // Return the updated Alarms array
          })
        );
      
        body = `Added alarm "${alarmJSON.newAlarm}" to user ${event.pathParameters.UserID}`;
        break;

      case "PUT /users": //add a new user or update
        let requestJSON = JSON.parse(event.body);
        await dynamo.send(
          new PutCommand({
            TableName: tableName,
            Item: {
              ...requestJSON, // Spread the request body object into the Item
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
