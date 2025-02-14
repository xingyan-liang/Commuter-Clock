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

import {
  Quicksand_300Light,
  Quicksand_500Medium,
  useFonts,
} from "@expo-google-fonts/quicksand";
import { MontserratAlternates_400Regular } from "@expo-google-fonts/montserrat-alternates";

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
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <MainScreen />

      <StatusBar style="auto" />
    </View>
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
  headerContainer: {
    alignSelf: "stretch",
  },
});
