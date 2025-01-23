import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import MapView from 'react-native-maps';

import{getUsers, getUser, putUser, deleteUser, addAlarm} from './backend/accessAPI';
 import Header from './src/Components/Header';
 import AddAlarm from './src/Components/AddAlarm';


export default function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    // Fetch users and update state
    const fetchUsers = async () => {
      try {
        const users = await getUsers();
        console.log("User data:", users);
        setResponse(JSON.stringify(users, null, 2)); // Format the response for readability
      } catch (error) {
        setResponse("Error fetching users: " + error.message);
      }
    };
  
    fetchUsers();
  }, []); // Empty dependency array ensures this runs only once


  return (
    <View style={styles.container}>
      <View>
        <Header title="Commuter Clock"/>
      </View>

      <Text>Open up App.js to start working on your app!</Text>
      <Text>If you see this, it's running!</Text>
      <MapView style={styles.map} /> 
        {/* <AddAlarm/> */}
      <Text style={styles.responseText}>{response}</Text>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B2028',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '70%',
    height: '70%',
  },
});
