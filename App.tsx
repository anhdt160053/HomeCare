

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
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
          {/* <MyTabs /> */}
        </Provider>
      </SafeAreaView>
  );
};

export default App;
