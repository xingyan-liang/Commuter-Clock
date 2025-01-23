import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import{getUsers, getUser, putUser, deleteUser, addAlarm} from './accessAPI';
import Header from './Header';
import AddAlarm from './AddAlarm';





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
    <View style={{flex: 1}}>
      <View>
        <Header title="Commuter Clock"/>
      </View>
      <View style={styles.container}>
        
        <Text>Open up App.js to start working on your app!</Text>
        <Text>If you see this, it's running!</Text>
        {/* <AddAlarm/> */}
        <StatusBar style="auto" />
      </View>
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
});
