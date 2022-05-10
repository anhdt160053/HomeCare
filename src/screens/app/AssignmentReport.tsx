
import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import moment from 'moment';
import Toast from 'react-native-toast-message';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Color } from '../../common';
import { TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const AssignmentReport = () => {
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
      
        const inputDateSelected = moment(inputRange);
        const now = moment();
        
      console.log('now',now);
      console.log('inputDateSelected',inputDateSelected);
      
      return true
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
            <Text style={{fontSize: 16, lineHeight: 16, alignSelf:'center', fontWeight : '800'}}>{'Ngày'}</Text>
            <View style={{marginHorizontal:10}}>
                <TouchableWithoutFeedback  onPress={handleOnStartDatePress}>
                    <Text style={styles.text}>{outputRange ? outputRange : startDate}</Text>
                </TouchableWithoutFeedback>
            </View>
            <TouchableWithoutFeedback  onPress={handleOnEndDatePress}>
                <Text style={styles.text}>{outputRange ? outputRange : startDate}</Text>
            </TouchableWithoutFeedback>
            <View style={{alignItems:'flex-end',flexGrow:1}}><Button title='Lọc' color={Color.strongBlue}/></View>
            
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

export default AssignmentReport

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: '400',
        color: Color.black,
        padding:5,
        borderWidth:1,
        borderRadius:2
    }
})