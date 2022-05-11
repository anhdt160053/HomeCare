import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dispatch } from 'redux';


export const Init = () => {
  return async (dispatch: Dispatch) => {
    let token = await AsyncStorage.getItem('token');
    if (token !== null) {
      console.log('token fetched');
      dispatch({
        type: 'LOGIN',
        payload: token,
      })
    }
  }
}

export const Login = (username: string, password: string) => {
  return async (dispatch: Dispatch)  => {
    let token = null;
    if (username === 'tuananhdz' && password == '1234') {
      token = username + password;
      console.log('token==',token);
      
      await AsyncStorage.setItem('token', token);
      console.log('token stored');
    }
    dispatch({
      type: 'LOGIN',
      payload: token,
    })
  }
}

export const ConfirmPassWord = (password: string) => {
  return async (dispatch: Dispatch) => {
    let token = null;
    token = 'tuananhdz'+ password;
    await AsyncStorage.setItem('token',token)
    Logout()
  }
}



export const Logout = () => {
  return async (dispatch: Dispatch) => {
    await AsyncStorage.clear();
    dispatch({
      type: 'LOGOUT'
    })
  }
}