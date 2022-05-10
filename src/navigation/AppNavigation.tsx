
import React, { useState, useEffect } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Init} from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import AuthNavigation from './AuthNavigation';


export enum RootScreen {
    Auth= 'Auth',
    AppDrawer= 'AppDrawer'
}

const RootStack = createNativeStackNavigator();

const AppNavigation = () => {
    const dispatch = useDispatch();

    const token = useSelector(state => state.Reducers.authToken);
    

    console.log('AppNavigation','token==',token);

    // const [login, setLogin] = useState(false);

    const init = () => {
         dispatch(Init())
    }

    useEffect(() => {
      init()
    }, [])
    

    const AuthStack = () => {
        return (
          <RootStack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
            {/* <RootStack.Screen name={RootScreen.Auth} getComponent={() => require('./AuthNavigation/index').default}/> */}
            <RootStack.Screen name={RootScreen.Auth} component={AuthNavigation}/>
          </RootStack.Navigator>
        )
      }

    const AppStack = () => {
        return (
            <RootStack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
              <RootStack.Screen name={RootScreen.AppDrawer} getComponent={() => require('../screens/app/index').default}/>
            </RootStack.Navigator>
          )
    }
    
  return (   
    <NavigationContainer independent={true}>
        {
            token === null ? <AuthStack /> : <AppStack />
        }
        {/* <RootStack.Navigator
            initialRouteName={token === null ? RootScreen.Auth : RootScreen.Home}
            screenOptions={{headerShown: false, gestureEnabled: false}}
        >
            <RootStack.Screen 
                name={RootScreen.Auth}
                getComponent={() => require('./AuthNavigation/index').default}
            />
            <RootStack.Screen 
                name={RootScreen.Home}
                getComponent={() => require('../screens/app/Home').default}
            />
        </RootStack.Navigator> */}
    </NavigationContainer>
  )
}

export default AppNavigation