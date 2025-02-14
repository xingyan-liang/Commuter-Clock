import { integer } from 'aws-sdk/clients/cloudfront';
import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Feather from '@expo/vector-icons/Feather';

import colors from '../config/colors.js'

const AlarmBlock = (props) => {

  return (
    <View style={[styles.alarmBlock, styles.alarmBlockOn]}>
      <View style={styles.topLine}>
        <Text style = {[styles.text, styles.alarmName]}>{props.name}</Text>
        <View style = {styles.topRight}>
          <View style = {styles.days}>
            <Text style={[styles.text, styles.nonRepeatingDay]}>S</Text>
            <Text style={[styles.text, styles.nonRepeatingDay]}>M</Text>
            <Text style={[styles.text, styles.repeatingDay]}>T</Text>
            <Text style={[styles.text, styles.nonRepeatingDay]}>W</Text>
            <Text style={[styles.text, styles.nonRepeatingDay]}>T</Text>
            <Text style={[styles.text, styles.repeatingDay]}>F</Text>
            <Text style={[styles.text, styles.nonRepeatingDay]}>S</Text>
          </View>
          <Feather style = {styles.star} name="star" size={15} color="white"/>
        </View>
      </View>
      <View style={styles.bottomLine}>
        <View style={styles.timeGrouping}>
          <View style = {styles.timeContainer}>
            <Text style={[styles.text, styles.time]}>{props.defaultHour}:{props.defaultMin}</Text>
            <Text style={[styles.text, styles.timePeriod]}>{props.defaultTimePeriod}</Text>
          </View>
          <Text style={[styles.text, styles.timeLabel]}>Default</Text>
        </View>
        <View style={styles.timeGrouping}>
          <View style = {styles.timeContainer}>
            <Text style={[styles.text, styles.time]}>{props.arrivalHour}:{props.arrivalMin}</Text>
            <Text style={[styles.text, styles.timePeriod]}>{props.arrivalTimePeriod}</Text>
          </View>
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
    fontSize: 14,
  },
  alarmBlock: {
    backgroundColor: colors.background,
    width: "95%",
    height: 130,
    borderColor: colors.text,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: "3%",
  },
  topLine: {
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  alarmName: {
    color: colors.text,
  },
  topRight:{
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  star: {
  },
  days:{
    width: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  repeatingDay:{
  },
  nonRepeatingDay:{
    color: colors.primary,
  },
  bottomLine:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  timeGrouping:{
    flexDirection: 'column',
  },
  timeContainer:{
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  time:{
    fontSize: 50,
  },
  timeLabel:{
    color: colors.primary,
  },
  timePeriod:{
    paddingLeft: 7,
  }

});


export default AlarmBlock;