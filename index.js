import { registerRootComponent } from 'expo';
import axios from 'axios';
const apiUrl = process.env.EXPO_PUBLIC_API_URL;





import App from './App';

const getUsers = async () => {
    
  try {
    const response = await axios.get(`${apiUrl}/users`);
    console.log("User data:", response.data);
  } catch (error) {
    console.error("Error fetching users:", error.message);
  }
};


const getUser = async (userID) => {
  
  try {
    const response = await axios.get(`${apiUrl}/users/${userID}`);
    console.log("User data:", response.data);
  } catch (error) {
    console.error("Error fetching user:", error.message);
  }
};

const putUser = async () => {
  
  try {
    const response = await axios.put(`${apiUrl}/users`, {UserID: "jimmy", Password: "password"}, {
      headers: {
        "Content-Type": "application/json"
      },
  });
    console.log("User data:", response.data);
  } catch (error) {
    console.error("Error putting user:", error.message);
  }
};



// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

getUsers();
getUser("jeff");
putUser();

