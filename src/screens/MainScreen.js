import React from 'react';
import {Text, View, StyleSheet, Image, SafeAreaView, TextInput, TouchableWithoutFeedback, TouchableOpacity, Modal, Keyboard} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { useEffect, useState } from "react";

import colors from '../config/colors.js'
import AlarmBlock from '../components/AlarmBlock';
import AddAlarm from '../components/AddAlarm';

function MainScreen(props) {
    const [modalOpen, setModalOpen] = useState(false);


        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.topLine}>
                       <Feather style = {styles.star} name="more-horizontal" size={25} color="white"/>
                    <TextInput style={styles.searchBar} placeholder="Search" clearButtonMode='always'/>
                    <TouchableOpacity onPress={() => setModalOpen(true)}>
                        <Feather style = {styles.star} name="plus" size={25} color="white"/>
                    </TouchableOpacity>

                </View>
                <View style={styles.alarms}>
                    <AlarmBlock name="exampleName" defaultHour="12" defaultMin="30" defaultTimePeriod = "AM" arrivalHour="03" arrivalMin="45" arrivalTimePeriod = "PM"/>
                </View>

                <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalOpen}
                        onRequestClose={() => setModalOpen(!modalOpen)}
                      >
                        <TouchableWithoutFeedback onPress={() => setModalOpen(false)}>
                          <View style={styles.modalBackground}>
                            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                              <View style={styles.modalContainer}>
                                <AddAlarm closeModal={() => setModalOpen(false)} />
                              </View>
                            </TouchableWithoutFeedback>
                          </View>
                        </TouchableWithoutFeedback>
                      </Modal>
            </SafeAreaView>
        );
    
}



const styles = StyleSheet.create({
container:{
    width: '100%',
    height: '100%',
},
topLine:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5%',
},
searchBar:{
    width: '50%',
    height: 50,
},
alarms:{
},
white: {
    backgroundColor: 'white',
    height: 50,
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

export default MainScreen;
