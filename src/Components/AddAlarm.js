import React from "react";

import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, TouchableHighlight } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import colors from "../config/colors";

const AddAlarm = () => {
    const[name, onChangeName] = React.useState("name");
    const[destination, onChangeDest] = React.useState("Dest");

  return (
    <View style={styles.popUpArea}>
        <View style={styles.groups}>
            <Text style={styles.miscText}>Name</Text>
            <TextInput style={styles.textInput} onChangeName={onChangeName} ></TextInput>
        </View>

        <View style={styles.groups}>
            <Text style={styles.miscText}>Destination</Text>
            <TextInput style={styles.textInput} onChangeDest={onChangeDest}></TextInput>
        </View>

        <View style={styles.groups}>
            <Text style={styles.miscText}>Arrival Time</Text>
            <TextInput style={styles.textInput}></TextInput>
        </View>

        <View style={styles.groups}>
            <Text style={styles.miscText}>Default Time</Text>
            <TextInput style={styles.textInput}></TextInput>
        </View>

        <View style={styles.groups}>
            <Text style={styles.miscText}>Time to get ready</Text>
            <TextInput style={styles.textInput}></TextInput>
        </View>

        <View style={styles.groups}>
            <Text style={styles.miscText}>Repeat</Text>
            <TextInput style={styles.textInput}></TextInput>
        </View>

        <View style={styles.groups}>
            <Text style={styles.miscText}>Days</Text>

            <View style={styles.repeatBoxRow}>
                <TouchableHighlight>
                    <View style={styles.repeatBox}>
                        <Text style={styles.repeatText}>S</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight>
                    <View style={styles.repeatBox}>
                        <Text style={styles.repeatText}>T</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight>
                    <View style={styles.repeatBox}>
                        <Text style={styles.repeatText}>W</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight>
                    <View style={styles.repeatBox}>
                        <Text style={styles.repeatText}>T</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight>
                    <View style={styles.repeatBox}>
                        <Text style={styles.repeatText}>F</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight>
                    <View style={styles.repeatBox}>
                        <Text style={styles.repeatText}>S</Text>
                    </View>
                </TouchableHighlight>

            </View>

        </View>

        <View style={styles.groups}>
            <Text style={styles.miscText}>Types of Transport</Text>
            <TextInput style={styles.textInput}></TextInput>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
    popUpArea: {
      backgroundColor: '#1B2028',
      width: 350,
      height: 800,
      borderRadius: 10,
      border: 1,
      borderWidth: 1,
      borderColor: '#FFFFFF',
      alignItems: 'left',
      justifyContent: 'space-between',
    },
    textInput: {
        width: 210,
        height: 40,
        borderColor: '#FFFFFF',
        borderWidth: 1,
        color: '#FFFFFF',
    },
    miscText: {
      color: '#FFFFFF',
      marginBlockEnd: 10,
    },
    repeatBoxRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginInlineEnd: 20,
    },
    repeatBox: {
        backgroundColor: colors.secondary,
        width: 32,
        height: 32,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    groups: {
        marginInlineStart: 20,
    }
   
});

export default AddAlarm;

