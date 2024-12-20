import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import AWS from "aws-sdk";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
import { AWS_REGION, COGNITO_IDENTITY_POOL_ID } from "@env";


import { registerRootComponent } from 'expo';
import { DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb";


import App from './App';

// Initialize DynamoDB client
const client = new DynamoDBClient({
  region: process.env.AWS_REGION, // Region from .env file
  credentials: fromCognitoIdentityPool({
    identityPoolId: process.env.COGNITO_IDENTITY_POOL_ID, // Identity pool ID from .env file
    clientConfig: {
      region: process.env.AWS_REGION, // Ensure the region matches
    },
  }),
});

async function listTables() {
  try { 
    const command = new ListTablesCommand({});
    const data = await client.send(command);
    console.log("Tables:", data.TableNames);
  } catch (err) {
    console.error("Error listing tables:", err);
  }
}


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
listTables();
