import { StatusBar } from "expo-status-bar";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  Modal,
  SafeAreaView,
  Keyboard
} from "react-native";
import { useEffect, useState } from "react";
import MapView from "react-native-maps";

import {
  getUsers,
  getUser,
  putUser,
  deleteUser,
  addAlarm,
} from "./backend/accessAPI";
import Header from "./src/Components/Header";
import AddAlarm from "./src/Components/AddAlarm";
import colors from "./src/config/colors";

export default function App() {
  const [response, setResponse] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

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
      <View style={styles.headerContainer}>
        <Header title="Commuter Clock" />
      </View>

      <Text>Open up App.js to start working on your app!</Text>
      <Text>If you see this, it's running!</Text>
      {/* <MapView style={styles.map} /> */}
      {/* <AddAlarm/> */}
      {/* <Text style={styles.responseText}>{response}</Text> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalOpen}
        onRequestClose={() => setModalOpen(!modalOpen)}
      >
        <TouchableWithoutFeedback onPress={() => setModalOpen(false)}>
          <View style={styles.modalBackground}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <AddAlarm />
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => setModalOpen(!modalOpen)}
      >
        <Text style={styles.text}>Open AddAlarm</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B2028",
    alignContent: "center",
    alignItems: "center",
  },
  map: {
    width: "70%",
    height: "70%",
  },
  buttonStyle: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    padding: 5,
    margin: 10,
    width: 150,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.text,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dim background
    alignItems: "center",
    justifyContent: "flex-end",
  },

  headerContainer:{
    alignSelf: "stretch",
  }
});
