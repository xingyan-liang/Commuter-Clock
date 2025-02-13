import axios from 'axios';

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


  export const getUser = async (userID) => { //gets user of app
    
    try {
      const response = await axios.get(`${apiUrl}/users/${userID}`);
      console.log("User data:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error.message);
    }
  };

  export const putUser = async (userID, password) => { //adds new user or updates info
    
    try {
      const response = await axios.put(`${apiUrl}/users`, {UserID: userID, Password: password}, {
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

  export const addAlarm = async (userID, alarmTime) => { //adds alarm to user

    try {
      const response = await axios.post(`${apiUrl}/users/${userID}/alarms`, {alarmTime}, {
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

  export const deleteUser = async (userID) => { //deletes user(may not need)
    
    try {
      const response = await axios.delete(`${apiUrl}/users/${userID}`);
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



