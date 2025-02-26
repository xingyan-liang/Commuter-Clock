import { StatusBar } from "expo-status-bar";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import MapView from "react-native-maps";
import * as SplashScreen from "expo-splash-screen";
import * as SecureStore from 'expo-secure-store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

import {
  getUsers,
  getUser,
  putUser,
  deleteUser,
  addAlarm,
} from "./backend/accessAPI";

import Header from "./src/components/Header";
import MainScreen from "./src/screens/MainScreen";
import colors from "./src/config/colors";
import SignInScreen from "./src/screens/SignInScreen";
import CreateAccountScreen from "./src/screens/CreatAccountScreen";

import {
  Quicksand_300Light,
  Quicksand_500Medium,
  useFonts,
} from "@expo-google-fonts/quicksand";
import { MontserratAlternates_400Regular } from "@expo-google-fonts/montserrat-alternates";

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator()

export default function App() {
  const [loaded, error] = useFonts({
    Quicksand_300Light,
  });

  const [userId, setUserId] = useState(null);
  const [response, setResponse] = useState("");

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);


  useEffect(() => { //loads userID
    async function loadUserId() {
      SecureStore.setItemAsync('userId', 'jonmaingot@gmail.com'); //TODO: change later
      const storedUserId = await SecureStore.getItemAsync('userId');
      if (storedUserId) {
        setUserId(storedUserId);
      }
    }
    loadUserId();
  }, []);

  useEffect(() => {
    // Fetch users and update state
    const fetchUsers = async () => {
      try {
        const users = await getUsers();
        console.log("User data:", JSON.stringify(users, null, 2));
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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen 
          name="Main" 
          component={MainScreen}
          options={{
            header: (props) => <Header {...props} />,
            title: 'Custom Header', // Title for the header
        }}
        />
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Create Account" component={CreateAccountScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#1B2028",
    alignContent: "center",
    alignItems: "center",
  },
  map: {
    width: "70%",
    height: "70%",
  },
  text: {
    color: colors.text,
  },
});
