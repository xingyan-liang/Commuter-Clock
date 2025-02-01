import { integer } from 'aws-sdk/clients/cloudfront';
import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Feather from '@expo/vector-icons/Feather';

import colors from '../config/colors.js'
import { Quicksand_300Light } from '@expo-google-fonts/quicksand';

//type AlarmProps = {
  //name: string;
//};

const AlarmBlock = (props) => {
  return (
    <View style={styles.alarmBlock}>
      <View style={styles.topLine}>
        <Text style = {[styles.text, styles.alarmName]}>{props.name}</Text>
        <View style = {styles.topRight}>
          <View style = {styles.days}>
            <Text style={[styles.text, styles.repeatingDay]}>S</Text>
            <Text style={[styles.text, styles.repeatingDay]}>M</Text>
            <Text style={[styles.text, styles.repeatingDay]}>T</Text>
            <Text style={[styles.text, styles.repeatingDay]}>W</Text>
            <Text style={[styles.text, styles.repeatingDay]}>T</Text>
            <Text style={[styles.text, styles.repeatingDay]}>F</Text>
            <Text style={[styles.text, styles.repeatingDay]}>S</Text>
          </View>
          <Feather style = {styles.star} name="star" size={15} color="white"/>
        </View>
      </View>
      <View style={styles.bottomLine}>
        <View style = {styles.timeContainer}>
          <Text style={[styles.text, styles.time]}>{props.defaultTime}
            <Text style={[styles.text, styles.timePeriod]}>{props.defaultTimePeriod}</Text></Text>
          <Text style={[styles.text, styles.timeLabel]}>Default</Text>
        </View>
        <View style = {styles.timeContainerontainer}>
        <Text style={[styles.text, styles.time]}>{props.arrivalTime}
          <Text style={[styles.text, styles.timePeriod]}>{props.arrivalTimePeriod}</Text></Text>
        <Text style={[styles.text, styles.timeLabel]}>Arrival</Text>
        </View>
      </View>
   </View>
  );
};

const styles = StyleSheet.create({
  text:{
    fontFamily: 'Quicksand_300Light',
    color: colors.text,
    fontSize: 16,
  },
  alarmBlock: {
    backgroundColor: colors.background,
    width: 400,
    height: 120,
    borderColor: colors.text,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
  },
  topLine: {
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  alarmName: {
    color: colors.text,
  },
  topRight:{
    flexDirection: 'row',
  },
  star: {
  },
  days:{
    flexDirection: 'row',
  },
  repeatingDay:{
  },
  nonRepeatingDay:{

  },
  bottomLine:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  timeContainer:{
    flexDirection: 'column',
  },
  time:{
    fontSize: 50,
  },
  timeLabel:{
  },
  timePeriod:{
  }

});


export default AlarmBlock;