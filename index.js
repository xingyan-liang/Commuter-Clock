var AWS = require('aws-sdk');
AWS.config.update({ region: "us-east-1" });

import { registerRootComponent } from 'expo';

import App from './App.';

const client = new AWS.DynamoDB();

async function listTables() {
    try {
      const data = await client.listTables().promise();
      console.log('Tables:', data.TableNames);
    } catch (err) {
      console.error('Error listing tables:', err);
    }
  }


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
listTables();
