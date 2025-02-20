import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useEffect, useState } from "react";

import colors from "../config/colors.js";

function CreateAccountScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>

            <Text style={styles.title}>Create Account</Text>

            <View style={styles.textBoxContainer}>
                <TextInput
                onChangeTest={setEmail}
                placeholder="Email"
                placeholderTextColor={colors.text}
                style={styles.textInput}
                autoComplete="email"
                />
                <TextInput
                onChangeTest={setPassword}
                placeholder="Password"
                placeholderTextColor={colors.text}
                style={styles.textInput}
                autoComplete="new-password"
                secureTextEntry={true}
                />
                <TextInput
                onChangeTest={setConfirmPassword}
                placeholder="Repeat Password"
                placeholderTextColor={colors.text}
                style={styles.textInput}
                autoComplete="new-password"
                secureTextEntry={true}
                />
            </View>

            <TouchableOpacity>
                <View style={styles.createAccountButton}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </View>
            </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  topLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5%",
  },
  white: {
    backgroundColor: "white",
    height: 50,
  },
  title: {
    fontFamily: "Quicksand_500Medium",
    color: colors.text,
    fontSize: 40,
    alignSelf: "center",
  },
  textInput: {
    height: 40,
    width: "80%",
    borderColor: "#FFFFFF",
    borderWidth: 1,
    color: colors.text,
    padding: 10,
  },
  textBoxContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    padding: "5%",
  },
  createAccountButton: {
    alignSelf: "center",
    alignItems: "center",
    borderColor: 'white',
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 10,
    width: "50%",
    height: '17%',
  },
  buttonText: {
    fontFamily: "Quicksand_300Light",
    color: colors.text,
    fontSize: 15,
  },
});

export default CreateAccountScreen;
