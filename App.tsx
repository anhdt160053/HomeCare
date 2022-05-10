/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {AppNavigation} from './src/navigation';

import RNBootSplash from "react-native-bootsplash";

import {store} from './src/redux';

import {Provider} from 'react-redux';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, [])
  


  return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Provider store={store}>
          <AppNavigation />
        </Provider>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
