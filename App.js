import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import MapView from 'react-native-maps';

import{getUsers, getUser, putUser, deleteUser, addAlarm} from './backend/accessAPI';

import Header from './src/components/Header';
import AddAlarm from './src/components/AddAlarm';
import AlarmBlock from './src/components/AlarmBlock';

import { Quicksand_300Light, Quicksand_500Medium, useFonts } from '@expo-google-fonts/quicksand';
import { MontserratAlternates_400Regular} from '@expo-google-fonts/montserrat-alternates';

import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();


export default function App() {

  const [loaded, error] = useFonts({
    Quicksand_300Light,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

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

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View>
        <Header title="Commuter Clock"/>
      </View>

      <Text>Open up App.js to start working on your app!</Text>
      <Text>If you see this, it's running!</Text>
        {/* <AddAlarm/> */}
      <AlarmBlock name = "exampleName" defaultTime = "12:30" defaultTimePeriod = "AM" arrivalTime = "03:45" arrivalTimePeriod = "PM"/>
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
