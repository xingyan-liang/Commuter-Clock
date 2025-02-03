import React from 'react';
import {Text, View, StyleSheet, Image, SafeAreaView, TextInput} from 'react-native';
import Feather from '@expo/vector-icons/Feather';

import colors from '../config/colors.js'
import AlarmBlock from '../components/AlarmBlock';

function MainScreen(props) {
    

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.topLine}>
                    <Feather style = {styles.star} name="more-horizontal" size={25} color="white"/>
                    <TextInput style={styles.searchBar} placeholder="Search" clearButtonMode='always'/>
                    <Feather style = {styles.star} name="plus" size={25} color="white"/>
                </View>
                <View style={styles.alarms}>
                    <AlarmBlock name="exampleName" defaultHour="12" defaultMin="30" defaultTimePeriod = "AM" arrivalHour="03" arrivalMin="45" arrivalTimePeriod = "PM"/>
                </View>
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
});

export default MainScreen;