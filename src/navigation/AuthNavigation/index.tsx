import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { LoginScreen } from '../../screens/auth';

export enum AuthScreen {
    LoginScreen = 'LoginScreen'
}

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
    console.log('AuthNavigation');
    return(
        <AuthStack.Navigator
            initialRouteName={AuthScreen.LoginScreen}
            screenOptions={{headerShown: false, gestureEnabled: false}}
        >
            <AuthStack.Screen 
                name={AuthScreen.LoginScreen}
                component={LoginScreen}
            />
        </AuthStack.Navigator>
    )
}

export default AuthNavigation;