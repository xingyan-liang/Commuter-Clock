import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import * as Crypto from 'expo-crypto';

// import dotenv from 'dotenv';
// dotenv.config();

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  export const getUsers = async () => { //function to get all users(delete later test only)
    
    try {
      const response = await axios.get(`${apiUrl}/users`);
      console.log("User data:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error.message);
    }
  };


  export const getUser = async () => { //gets user of app
    
    try {
      const response = await axios.get(`${apiUrl}/users/${await SecureStore.getItemAsync('userId')}`);
      console.log("User data:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error.message);
    }
  };

  export const putUser = async (email, password) => { //adds new user or updates info
    const UUID = Crypto.randomUUID();

    const user = {UserID: UUID, Email: email, Password: password, Alarms: []};

    SecureStore.setItemAsync('userId', UUID);
    
    try {
      const response = await axios.put(`${apiUrl}/users`, user, {
        headers: {
          "Content-Type": "application/json"
        },
    });
      console.log("User data:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error putting user:", error.message);
    }
  };

  export const addAlarm = async (alarmTime) => { //adds alarm to user

    try {
      const response = await axios.post(`${apiUrl}/users/${await SecureStore.getItemAsync('userId')}/alarms`, {newAlarm: alarmTime}, {
        headers: {
          "Content-Type": "application/json"
        },
    });
      console.log("Alarm data:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error adding alarm:", error.message);
    }
  }

  export const deleteUser = async () => { //deletes user(may not need)
    
    try {
      const response = await axios.delete(`${apiUrl}/users/${await SecureStore.getItemAsync('userId')}`);
      console.log("User data:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error deleting user:", error.message);
    }
  };



// test for API functions
// getUsers();
// getUser("jeff");
// putUser("jimmy", "password");
//addAlarm("jeff", "10:00");



