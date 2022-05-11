import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View, StatusBar, Platform, UIManager, LayoutAnimation, EventEmitter, DeviceEventEmitter } from 'react-native'
import React, { createRef, useCallback, useEffect, useState } from 'react'
import { RNButton } from '../../components/RNButton'
import { Color, Constants } from '../../common';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';
import {LogBox} from "react-native";
import {KeyboardScrollView} from '../../../src/components/Keyboard';
import { useDispatch } from 'react-redux';
import {Login} from '../../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';




LogBox.ignoreLogs([
  "exported from 'deprecated-react-native-prop-types'.",
])


if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// const dispatch = useDispatch();

const LoginScreen: React.FC = () => {
  const dispatch = useDispatch();

  console.log('LoginScreen------------------------');

  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const [errorUsername,setErrorUsername] = useState(false);
  const [errorPassword,setErrorPassword] = useState(false);

  const showToast = async () => {
    console.log('showToast');
    
    const token = await AsyncStorage.getItem('token');
    if(token) {
      return;
    }
    Toast.show({
      type: 'error',
      text1: 'Taì khoản hoặc mật khẩu không đúng.',
      text2: 'Vui lòng nhập lại.'
    });
  }

  const validate = () => {
    if(!name) {
      setErrorUsername(true)
      if(!password) {
        setErrorPassword(true)
      }
      return false;
    }
    if(!password) {
      setErrorPassword(true)
      if(!name) {
        setErrorUsername(true)
      }
      return false;
    }
    return true;
  }

  const handleOnLogin =  () => {
    console.log('handleOnLogin');
    if(!validate()){
      return;
    }
    setTimeout(() => {
      showToast()
    }, 0);
    dispatch(Login(name, password))
  }

  const handleOnChangeName = (name: string) => {
    setName(name);
    if(!name) {
      setErrorUsername(true);
      return;
    }
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setErrorUsername(false);
  }

  const handleOnChangePassWord = (password: string) => {
    setPassword(password);
    if(!password) {
      setErrorPassword(true);
      return;
    }
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setErrorPassword(false);
  }
  

  return (
    <SafeAreaView style={styles.loginContainer}>
      <KeyboardScrollView style={{flex: 1}}>
        <StatusBar hidden={true}></StatusBar>
        <View style={{alignItems: 'center'}}>
          <Image source={require('../../../assets/image/logo.png')} style={styles.image}/>
        </View>
        <Text style={styles.textCenter}>{'Đăng nhập'}</Text>
        <View style={styles.inputContainer}>
          <Fumi
            value={name}
            label={'Tên đăng nhập'}
            iconClass={FontAwesomeIcon}
            iconName={'user'}
            iconColor={'#49658c'}
            iconSize={20}
            inputPadding={16}
            onChangeText={(name) => handleOnChangeName(name)}
            style={{borderWidth: 1, borderColor: '#49658c', borderRadius: 5}}
          />
          {errorUsername && <Text style={styles.textError}>{'Vui lòng nhập tài khoản'}</Text>}
          <Fumi
            value={password}
            label={'Mật khẩu'}
            iconClass={FontAwesomeIcon}
            iconName={'lock'}
            iconColor={'#49658c'}
            iconSize={20}
            inputPadding={16}
            onChangeText={(password) => handleOnChangePassWord(password)}
            secureTextEntry={true}
            style={{borderWidth: 1, borderColor: '#49658c', borderRadius: 5, marginTop: 5}}
          />
          {errorPassword && <Text style={styles.textError}>{'Vui lòng nhập mật khẩu'}</Text>}
        </View>
        <RNButton style={styles.button} activeOpacity={0.8} onPress={handleOnLogin}>
          <Text style={styles.textButton}>{'Đăng nhập'}</Text>
        </RNButton>
        <Toast
          position='top'
          topOffset={50}
        />
      </KeyboardScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  image: {
    marginTop: 50,
  },
  loginContainer: {
      flex: 1,
      backgroundColor:'#fff'
  },
  textCenter: {
      fontSize: 22,
      fontWeight: '800',
      color : '#49658c',
      textTransform:'uppercase',
      marginTop: 50,
      textAlign: 'center'
  },
  inputContainer: {
    marginHorizontal: 20
  },
  button: {
    backgroundColor: '#49658c',
    borderRadius: 10,
    width: Constants.WIDTH - 40,
    alignItems:'center',
    justifyContent: 'center',
    paddingVertical:5,
    marginTop: 50,
    marginLeft: 20,
    flexDirection:'row'
  },
  textButton: {
    fontSize: 22,
    fontWeight: '400',
    color : '#fff',
    textTransform:'uppercase',
  },
  textError: {
    color: 'red',
    fontSize: 14,
    fontWeight:'600',
    marginVertical: 5,
    textAlign:'left'
  }
})