import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import moment from 'moment';
import Toast from 'react-native-toast-message';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Color } from '../../common';

const Calendar = () => {
    const minDate: string = moment(new Date).format('DD/MM/YYYY');
    const [startDate, setStartDate] = useState(minDate);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [inputRange,setInputRange] = useState('');
    const [outputRange,setOutRange] = useState('');
    const [isStartDate,setIsStartDate] = useState(false);
    const [isEndDate,setIsEndDate] = useState(false);
    const [hideToast, setHideToast] = useState(false);
  
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirmInputRange = (date: string) => {
      setInputRange(date);
    }
  
    const handleConfirmOutputRange = (date: string) => {
      setOutRange(date);
    }
  
    const validateDate = () => { 
      
      // console.warn(moment(startDate).diff(moment(inputRange), 'day'));
      // if(moment(startDate).diff(moment(inputRange), 'day') > 0 || moment(inputRange).diff(moment(outputRange), 'day')> 0) {
      //   return false
      // }
      return false
    }
  
    const handleConfirm = (date: Date) => {
      const datePicked = moment(date).format('DD/MM/YYYY');
      hideDatePicker();
      if(!validateDate()) {
        Toast.show({
          type: 'error',
          text1: 'Vui lòng chọn lại thời gian phù hợp'
        });
        return
      }
      if(isStartDate) {
        handleConfirmInputRange(datePicked);
        setIsStartDate(false);
        return;
      }
      if(isEndDate) {
        handleConfirmOutputRange(datePicked);
        setIsEndDate(false);
      }
    };
  
  
    const handleOnStartDatePress = () => {
      setIsStartDate(true);
      setDatePickerVisibility(true);
    }
  
    const handleOnEndDatePress = () => {
      setIsEndDate(true);
      setDatePickerVisibility(true);
    }
    
  
    return (
      <View style={{ marginTop: 10, marginHorizontal: 10}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 16, lineHeight: 16, alignSelf:'center', fontWeight : '800',color: Color.gray}}>{'Ngày'}</Text>
          <View style={{marginHorizontal:10}}><Button title={inputRange ? inputRange : startDate} onPress={handleOnStartDatePress} /></View>
          <Button title={outputRange ? outputRange : startDate} onPress={handleOnEndDatePress} />
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
         <Toast
          position='top'
          topOffset={50}
        />
      </View>
    )
}

export default Calendar