import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
  Modal,
  Keyboard,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import colors from "../config/colors";
import DropdownComponent from "./DropdownComponent";
import { addAlarm } from "../../backend/accessAPI";
import { useState } from "react";

const transport = [
  { label: "Car", value: "car" },
  { label: "Bicycle", value: "bicycle" },
  { label: "Bus", value: "bus" },
  { label: "Train", value: "train" },
  { label: "Walk", value: "walk" },
];

const AddAlarm = ({ closeModal, modalOpen, setModalOpen }) => {
  // variables for new alarm
  const [name, onChangeName] = React.useState(null);
  const [destination, onChangeDest] = React.useState(null);
  const [arrivalTime, onChangeArrival] = React.useState(null);
  const [defaultTime, onChangeDefault] = React.useState(null);
  const [timeToGetReady, onChangeReady] = React.useState(null);
  const [monday, onChangeMon] = React.useState(false);
  const [tuesday, onChangeTue] = React.useState(false);
  const [wednesday, onChangeWed] = React.useState(false);
  const [thursday, onChangeThu] = React.useState(false);
  const [friday, onChangeFri] = React.useState(false);
  const [saturday, onChangeSat] = React.useState(false);
  const [sunday, onChangeSun] = React.useState(false);
  const [travelMethod, setTravelMethod] = React.useState("car");

  // variable for api response
  const [response, setResponse] = useState("");

  const handleCreateAlarm = async () => {
    const newAlarm = {
      Name: name,
      Destination: destination,
      ArrivalTime: arrivalTime,
      DefaultTime: defaultTime,
      TimeToGetReady: timeToGetReady,
      Repeating: {
        Monday: monday,
        Tuesday: tuesday,
        Wednesday: wednesday,
        Thursday: thursday,
        Friday: friday,
        Saturday: saturday,
        Sunday: sunday,
      },
      TravelMethod: travelMethod,
    };

    try {
      console.log("newAlarm:", newAlarm);
      console.log("Sending request with payload:", JSON.stringify(newAlarm, null, 2));
      const response = await addAlarm(newAlarm);
      console.log("response:", response);
      setResponse(JSON.stringify(response, null, 2));
      closeModal(); // Close modal only after successfully adding alarm
    } catch (error) {
      console.error("Error adding alarm:", error);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalOpen}
      onRequestClose={() => setModalOpen(!modalOpen)}
      statusBarTranslucent
    >
      <TouchableWithoutFeedback onPress={() => setModalOpen(false)}>
        <View style={styles.modalBackground}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContainer}>
    <View style={styles.popUpArea}>
      <View style={styles.groups}>
        <Text style={styles.miscText}>Name</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeName}
        ></TextInput>
      </View>

      <View style={styles.groups}>
        <Text style={styles.miscText}>Destination</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeDest}
        ></TextInput>
      </View>

      <View style={styles.groups}>
        <Text style={styles.miscText}>Arrival Time</Text>
        <TextInput 
        onChangeText={onChangeArrival}
        style={styles.textInput}></TextInput>
      </View>

      <View style={styles.groups}>
        <Text style={styles.miscText}>Default Time</Text>
        <TextInput
        onChangeText={onChangeDefault}
        style={styles.textInput}></TextInput>
      </View>

      <View style={styles.groups}>
        <Text style={styles.miscText}>Time to get ready</Text>
        <TextInput 
        onChangeText={onChangeReady}
        style={styles.textInput}
        keyboardType="numeric">Minutes</TextInput>
      </View>

      <View style={styles.groups}>
        <Text style={styles.miscText}>Repeat on</Text>

        <View style={styles.repeatBoxRow}>
          <TouchableWithoutFeedback onPress={() => onChangeSun(!sunday)}>
            <View style={sunday ? styles.repeatBoxActive : styles.repeatBox}>
              <Text
                style={sunday ? styles.repeatTextActive : styles.repeatText}
              >
                S
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => onChangeMon(!monday)}>
            <View style={monday ? styles.repeatBoxActive : styles.repeatBox}>
              <Text
                style={monday ? styles.repeatTextActive : styles.repeatText}
              >
                M
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => onChangeTue(!tuesday)}>
            <View style={tuesday ? styles.repeatBoxActive : styles.repeatBox}>
              <Text
                style={tuesday ? styles.repeatTextActive : styles.repeatText}
              >
                T
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => onChangeWed(!wednesday)}>
            <View style={wednesday ? styles.repeatBoxActive : styles.repeatBox}>
              <Text
                style={wednesday ? styles.repeatTextActive : styles.repeatText}
              >
                W
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => onChangeThu(!thursday)}>
            <View style={thursday ? styles.repeatBoxActive : styles.repeatBox}>
              <Text
                style={thursday ? styles.repeatTextActive : styles.repeatText}
              >
                T
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => onChangeFri(!friday)}>
            <View style={friday ? styles.repeatBoxActive : styles.repeatBox}>
              <Text
                style={friday ? styles.repeatTextActive : styles.repeatText}
              >
                F
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => onChangeSat(!saturday)}>
            <View style={saturday ? styles.repeatBoxActive : styles.repeatBox}>
              <Text
                style={saturday ? styles.repeatTextActive : styles.repeatText}
              >
                S
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>

      <View style={styles.groups}>
        <Text style={styles.miscText}>Types of Transport</Text>
        <View style={styles.map}>
          <DropdownComponent
            data={transport}
            setTravelMethod={setTravelMethod}
          />
        </View>
      </View>

      <TouchableHighlight
        style={styles.inputButton}
        underlayColor="white"
        onPress={() => {
          handleCreateAlarm();
          closeModal();
        }}
      >
        <Text>Create Alarm</Text>
      </TouchableHighlight>
      </View>
      </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  </Modal>
  );
};

const styles = StyleSheet.create({
  popUpArea: {
    backgroundColor: "#1B2028",
    width: 350,
    height: 800,
    borderRadius: 10,
    border: 1,
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: "left",
    justifyContent: "space-between",
    padding: 30,
    paddingTop: 20,
    paddingBottom: 50,
  },
  textInput: {
    height: 40,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    color: "#FFFFFF",
    padding: 10,
  },
  miscText: {
    color: "#FFFFFF",
    marginBlockEnd: 10,
  },
  repeatBoxRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginInline: 0,
  },
  repeatBox: {
    backgroundColor: colors.primary,
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  repeatBoxActive: {
    backgroundColor: colors.secondary,
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  repeatText: {
    color: "#FFFFFF",
  },
  repeatTextActive: {
    color: "#000",
  },
  inputButton: {
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
    width: 200,
    height: 40,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dim background
    alignItems: "center",
    justifyContent: "flex-end",
  },
  modalContainer: {
    bottom: -40,
  },
});

export default AddAlarm;
