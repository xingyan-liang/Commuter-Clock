import { registerRootComponent } from 'expo';
import fetch from 'node-fetch';
const apiUrl = process.env.EXPO_PUBLIC_API_URL;





import App from './App';

const fetchItems = async () => {
  try {
    const response = await fetch(`${apiUrl}/items/123`);  // Use the API URL
    const data = await response.json();
    console.log('Items:', data);
  } catch (error) {
    console.error('Error fetching items:', error);
  }
};




// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

fetchItems();

