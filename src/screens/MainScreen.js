import React from 'react';
import {Text, View, StyleSheet, Image, SafeAreaView, TextInput, TouchableWithoutFeedback, TouchableOpacity, Modal, Keyboard, ScrollView} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { useEffect, useState } from "react";

import colors from '../config/colors.js'
import AlarmBlock from '../components/AlarmBlock';
import AddAlarm from '../components/AddAlarm';
import {
  getUsers,
  getUser,
  putUser,
  deleteUser,
  addAlarm,
} from "../../backend/accessAPI";

function MainScreen(props) {
    const [modalOpen, setModalOpen] = useState(false);
    const [user, setUser] = useState("");

     useEffect(() => {
        const fetchUser = async () => {
          try {
            const response = await getUser("liangxingyan1@gmail.com");
            console.log("GET USER:", JSON.stringify(response, null, 2));
            setUser(response);
          } catch (error) {
            setUser("Error fetching user: " + error.message);
          }
        };
    
        fetchUser();
      }, []); // Empty dependency array ensures this runs only once

      const renderItems = () => {
        if (user && Array.isArray(user.Alarms)) {
          return user.Alarms.map((alarm) => (
            <View>
              <AlarmBlock key={alarm.Name} name={alarm.Name} sunday={alarm.Sunday} monday={alarm.Monday} tuesday={alarm.Tuesday} wednesday={alarm.Wednesday} thursday={alarm.Thursday} friday={alarm.Friday} saturday={alarm.Saturday}/>
            </View>
          ));
        } else {
          // Optionally render a fallback UI if Alarms is not defined or not an array
          return console.log("No alarms available");
        }
      };

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
              <ScrollView >
                    <AlarmBlock name="exampleName" defaultHour="12" defaultMin="30" defaultTimePeriod = "AM" arrivalHour="03" arrivalMin="45" arrivalTimePeriod = "PM"/>
                    {renderItems()}
              </ScrollView>
              </View>

                
                <AddAlarm closeModal={() => setModalOpen(false)} modalOpen={modalOpen} setModalOpen={setModalOpen}/>
                           
            </SafeAreaView>
        );
    
}



const styles = StyleSheet.create({
container:{
    width: '100%',
    height: '100%',
    //alignItems: 'center',
},
topLine:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5%',
    flex: 1,
},
searchBar:{
    width: '50%',
    height: 50,
},
alarms:{
  flex: 7,
  flexDirection: 'column',
  alignItems: 'center',
  borderColor: colors.text,
  borderWidth: 1,

},
scrollViewContainer:{
  
},
white: {
    backgroundColor: 'white',
    height: 50,
},
});

export default MainScreen;
