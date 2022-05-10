import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Logout} from '../../redux/actions';
import { useDispatch } from 'react-redux';

const Home = () => {
    console.log('Home');

    const dispatch = useDispatch();

    setTimeout(() => {
      dispatch(Logout())
    }, 3000);
    
  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 18, fontWeight:'800', color: '#000'}}>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})