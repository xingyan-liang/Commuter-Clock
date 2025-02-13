import React, { useState } from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';
  import colors from '../config/colors';

  const DropdownComponent = ({data, setTravelMethod}) => {
    const [value, setValue] = useState('car');
    const [isFocus, setIsFocus] = useState(false);



    return (
      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'white' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          containerStyle={styles.con}
          activeColor='#94AAD6'
          dropdownPosition='top'
          itemContainerStyle={styles.itemContainerStyle}
          itemTextStyle={styles.itemTextStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Car' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setTravelMethod(item.value);
            setIsFocus(false);
          }}
        />
      </View>
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
    },
    dropdown: {
      height: 40,
      borderColor: 'white',
      borderWidth: 1,
      paddingHorizontal: 8,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
      color: 'white',

    },
    selectedTextStyle: {
      fontSize: 16,
      color: 'white',
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
      color: 'white',
      borderColor: 'white',
    
    },
    con: {
      backgroundColor: colors.background,
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 8,
    },
    itemContainerStyle: {
        borderColor: 'white',
        borderWidth: 0.5,
    },
    itemTextStyle: {
        color: 'white',
    },
  });