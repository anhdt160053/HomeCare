// import { Text, View } from 'react-native'
// import React, { Component } from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// interface ITabData {
//   name: string;
//   component: any;
// }

// interface ITabBottomProps {
//   data: ITabData[];
// }

// const TabBottom = createBottomTabNavigator();

// const RNBottomBar: React.FC<ITabBottomProps> = props => {
//   const {data,...restProps} = props;
//   return (
//     <TabBottom.Navigator initialRouteName={data[0].name} {...restProps}>
//       {
//         data.map((item,index) => (
//           <TabBottom.Screen key={index.toString()} name={item.name} component={item.component} />
//         ))
//       }
//     </TabBottom.Navigator>
//   )
// }

// export default RNBottomBar

import React from 'react';
import Account from '../../screens/app/Account';
import Dashboard from '../../screens/app/Dashboard';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { Color } from '../../common';

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Dashboard' 
            activeColor={Color.white}
            inactiveColor={Color.gray}
            barStyle={{ backgroundColor: Color.lightBlue, borderRadius:10 }}>
        <Tab.Screen 
          name="Dashboard" 
          component={Dashboard}
          options={{
            tabBarLabel: 'Dashboard',
            tabBarIcon: ({ color }) => (
              <AntIcon name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="Account" 
          component={Account} 
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color }) => (
              <AntIcon name="setting" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
