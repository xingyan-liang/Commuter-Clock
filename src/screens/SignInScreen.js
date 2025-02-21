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

function SignInScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>

            <View style={styles.container}>
              <Text style={styles.title}>Sign In</Text>

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
                  autoComplete="current-password"
                  secureTextEntry={true}
                  />
              </View>

              <TouchableOpacity style={styles.createAccountButton}>
                      <Text style={styles.buttonText}>Sign In</Text>
              </TouchableOpacity>

              <View style={styles.bottomLine}/>

              <TouchableOpacity style={{marginBlockStart: 15}}>
                      <Text style={styles.createAccount}>New to Wake Way? Create an Account</Text>
              </TouchableOpacity>
            </View>

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
    height: "17%",
    padding: "5%",
  },
  createAccountButton: {
    alignSelf: "center",
    alignItems: "center",
    borderColor: 'white',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 10,

    marginBlockEnd: 15,
  },
  buttonText: {
    fontFamily: "Quicksand_300Light",
    color: colors.text,
    fontSize: 15,
    paddingBlock: 10,
    paddingInline: 20,
  },
  bottomLine: {
    width: "80%",
    height: 1,
    backgroundColor: colors.text,
    alignSelf: "center",
  },
  createAccount: {
    fontFamily: "Quicksand_300Light",
    color: colors.text,
    fontSize: 15,
    alignSelf: "center",
    textDecorationLine: "underline",
  },
});

export default SignInScreen;
