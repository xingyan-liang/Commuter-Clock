import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import {Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from "react-native-popup-menu"
import Feather from "@expo/vector-icons/Feather";
import colors from "../config/colors";

const Header = ({navigation, route, options, back}) => {
  return (
    <SafeAreaView style={[styles.safeArea]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.imageIcon}>
            <Feather name="image" size={35} color="white" />
        </TouchableOpacity>
        <MenuProvider>
          <Menu>
            <MenuTrigger>
              <Feather name="user" size={35} color="white" />
            </MenuTrigger>
            <MenuOptions>
              <MenuOption onSelect={ ()=> navigation.navigate("Main")} text="Alarms" />
              <MenuOption onSelect={ ()=> navigation.navigate("Sign In")} text="Sign In" />
              <MenuOption onSelect={ ()=> navigation.navigate("Create Account")} text="Create Account" />
            </MenuOptions>
          </Menu>
        </MenuProvider>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeArea: {
      backgroundColor: "#1B2028",
    },
  headerContainer: {
    height: 75,
    backgroundColor: "#1B2028",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 1,
  },
  userIcon: {
    padding: 10,
  },
  imageIcon: {
    padding: 10,
  },
  backButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  menuContainer: {

  }
});

export default Header;
