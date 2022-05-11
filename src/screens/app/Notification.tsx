import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'



const Notification = () => {
  const Data = [
    {
      id:1,
      name: 'Test Notification 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptate tenetur nobis aliquid optio, beatae nostrum. Rem quaerat autem eos dolorum laboriosam reiciendis perspiciatis nesciunt dignissimos libero fugit? Reprehenderit, deserunt?'
    },
    {
      id:2,
      name: 'Test Notification 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptate tenetur nobis aliquid optio, beatae nostrum. Rem quaerat autem eos dolorum laboriosam reiciendis perspiciatis nesciunt dignissimos libero fugit? Reprehenderit, deserunt?'
    },
    {
      id:3,
      name: 'Test Notification 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptate tenetur nobis aliquid optio, beatae nostrum. Rem quaerat autem eos dolorum laboriosam reiciendis perspiciatis nesciunt dignissimos libero fugit? Reprehenderit, deserunt?'
    },
    {
      id:4,
      name: 'Test Notification 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptate tenetur nobis aliquid optio, beatae nostrum. Rem quaerat autem eos dolorum laboriosam reiciendis perspiciatis nesciunt dignissimos libero fugit? Reprehenderit, deserunt?'
    },
    {
      id:5,
      name: 'Test Notification 5',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptate tenetur nobis aliquid optio, beatae nostrum. Rem quaerat autem eos dolorum laboriosam reiciendis perspiciatis nesciunt dignissimos libero fugit? Reprehenderit, deserunt?'
    },
    {
      id:6,
      name: 'Test Notification 6',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptate tenetur nobis aliquid optio, beatae nostrum. Rem quaerat autem eos dolorum laboriosam reiciendis perspiciatis nesciunt dignissimos libero fugit? Reprehenderit, deserunt?'
    },
    {
      id:7,
      name: 'Test Notification 7',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptate tenetur nobis aliquid optio, beatae nostrum. Rem quaerat autem eos dolorum laboriosam reiciendis perspiciatis nesciunt dignissimos libero fugit? Reprehenderit, deserunt?'
    },
    {
      id:8,
      name: 'Test Notification 8',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptate tenetur nobis aliquid optio, beatae nostrum. Rem quaerat autem eos dolorum laboriosam reiciendis perspiciatis nesciunt dignissimos libero fugit? Reprehenderit, deserunt?'
    },
    {
      id:9,
      name: 'Test Notification 9',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptate tenetur nobis aliquid optio, beatae nostrum. Rem quaerat autem eos dolorum laboriosam reiciendis perspiciatis nesciunt dignissimos libero fugit? Reprehenderit, deserunt?'
    },
    {
      id:10,
      name: 'Test Notification 10',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptate tenetur nobis aliquid optio, beatae nostrum. Rem quaerat autem eos dolorum laboriosam reiciendis perspiciatis nesciunt dignissimos libero fugit? Reprehenderit, deserunt?'
    }
  ];
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