import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

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





getUsers();
getUser("jeff");
putUser();



