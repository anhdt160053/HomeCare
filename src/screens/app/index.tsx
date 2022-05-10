import * as React from 'react';
import 'react-native-gesture-handler';
import {  Text,  View, NativeModules, StatusBar } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList, } from '@react-navigation/drawer';
import {  createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import Dashboard from './Dashboard';
import Calendar from './Calendar';
import ExperienceSession from './ExperienceSession';
import Contract from './Contract';
import AssignmentReport from './AssignmentReport';
import SaleReport from './SaleReport';
import Notification  from './Notification';
import  Account  from './Account';
import FastImage from 'react-native-fast-image';
// import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Color } from '../../common';
import { Logout } from '../../redux/actions';
import { useDispatch } from 'react-redux';
// import RNFetchBlob from 'rn-fetch-blob';
// import ImgToBase64 from 'react-native-image-base64';
// import ImageResizer from 'react-native-image-resizer';
// import { Modalize } from 'react-native-modalize';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const dispatch = useDispatch();

const CustomComponent = (props: any)=> {
//   const modalizeRef = useRef<Modalize>(null);

  // useEffect(() => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 400,
  //     cropping: true
  //   }).then(image => {
  //     console.warn(image);
  //   });
  // }, [])

  const handleOnChangeAvatar = () => {
    console.log('handleOnChangeAvatar');
    // modalizeRef.current?.open();
    
    // ImagePicker.openPicker({
    //   cropping: true,
    //   mediaType: 'photo',
    //   // multiple: true
    // }).then((_image: any) => {  
    //     console.log('_image---',_image);
    //     ImageResizer.createResizedImage(_image.path, 800, 800, 'JPEG', 100, 0, undefined)
    //     .then((image: any) => {
    //       if(!image || !image.uri) {
    //         return;
    //       }
    //       console.log('image___',image);
    //       ImgToBase64.getBase64String(image.uri)
    //       .then(base64String => console.log('base64String',base64String))
    //       .catch(error => console.error(error));
    //     })
    // }).catch(error => {
    //   return error
    // });
  }

  const handleOnLogoutPress = () => {
      console.log('handleOnLogoutPress');
      
    dispatch(Logout())
  }
  
  return (
    <DrawerContentScrollView {...props}>
      <View style={{
        // flexDirection: 'row',
        justifyContent: 'flex-end',
        // alignItems: 'flex-end',
        paddingVertical:20,
        position:'relative',
        paddingLeft: 20,
        paddingBottom: 20,
        backgroundColor: Color.lightBlue,
        height:150,
      }}>
        <FastImage
          style={{
            width: 50,
            height: 50,
            borderRadius: 100 / 2,
          }}
          source={{
              uri: 'https://unsplash.it/400/400?image=1',
              priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.center}
        />
        <Text style={{fontSize:14, fontWeight: '600', marginLeft: 10, color: Color.white}}>{'Test 1'}</Text>
        <Icon name={'camera'} style={{position:'absolute',left: 40, bottom: 55}} size={16} color={Color.gray} onPress={handleOnChangeAvatar}/>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem 
        label="Thoát"
        onPress={handleOnLogoutPress}
      />
   </DrawerContentScrollView>
  );
}

export default function AppDrawer() {
  return (
    <SafeAreaProvider>
        <StatusBar backgroundColor={Color.strongBlue}/>
        <NavigationContainer independent={true} >
            <Drawer.Navigator initialRouteName='Dashboard' drawerContent={(props) => <CustomComponent {...props} />} screenOptions={{headerStyle: {
          backgroundColor: '#fff',
        },}}>
                <Drawer.Screen
                    name="Dashboard"
                    options={{ drawerLabel: 'Darhboard', headerStyle:{backgroundColor: Color.lightBlue}, headerTintColor: Color.white}}
                    component={Dashboard}
                    
                />
                <Drawer.Screen
                    name="Lịch làm việc"
                    options={{ drawerLabel: 'Lịch làm việc', headerStyle:{backgroundColor: Color.lightBlue}, headerTintColor: Color.white }}
                    component={Calendar} />
                <Drawer.Screen
                    name="Buổi trải nghiệm"
                    options={{ drawerLabel: 'Buổi trải nghiệm', headerStyle:{backgroundColor: Color.lightBlue}, headerTintColor: Color.white }}
                    component={ExperienceSession} />
                <Drawer.Screen
                    name="Hợp đồng"
                    options={{ drawerLabel: 'Hợp đồng', headerStyle:{backgroundColor: Color.lightBlue}, headerTintColor: Color.white }}
                    component={Contract} />
                <Drawer.Screen
                    name="Báo cáo phân công ca"
                    options={{ drawerLabel: 'Báo cáo phân công ca', headerStyle:{backgroundColor: Color.lightBlue}, headerTintColor: Color.white }}
                    component={AssignmentReport} />
                <Drawer.Screen
                    name="Báo cáo doang thu"
                    options={{ drawerLabel: 'Báo cáo doang thu', headerStyle:{backgroundColor: Color.lightBlue}, headerTintColor: Color.white }}
                    component={SaleReport} />
                <Drawer.Screen
                    name="Thông báo"
                    options={{ drawerLabel: 'Thông báo', headerStyle:{backgroundColor: Color.lightBlue}, headerTintColor: Color.white }}
                    component={Notification} />
                <Drawer.Screen
                    name="Đổi mật khẩu"
                    options={{ drawerLabel: 'Đổi mật khẩu', headerStyle:{backgroundColor: Color.lightBlue}, headerTintColor: Color.white }}
                    component={Account} />
            </Drawer.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  );
}