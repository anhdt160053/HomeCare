import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Notification = () => {
  return (
    <SafeAreaView style={{flex:1, marginHorizontal: 10}}>
        <View style={{height: 10}}/>
        <Button title='Thông báo chưa đọc' onPress={() => {}} />
        <View style={{height: 10}}/>
        <Button title='Thông báo đã đọc' onPress={() => {}}/>
    </SafeAreaView>
  )
}

export default Notification

const styles = StyleSheet.create({})