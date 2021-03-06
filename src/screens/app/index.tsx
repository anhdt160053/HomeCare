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
import Chat from './Chat';
import FastImage from 'react-native-fast-image';
// import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Color, Constants } from '../../common';
import { Logout } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import MyTabs from '../../components/RNBottomBar';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import RNFetchBlob from 'rn-fetch-blob';
// import ImgToBase64 from 'react-native-image-base64';
// import ImageResizer from 'react-native-image-resizer';
// import { Modalize } from 'react-native-modalize';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

const CustomComponent = (props: any)=> {
  const dispatch = useDispatch();
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
        label="Tho??t"
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
            <Drawer.Navigator 
              initialRouteName='Dashboard' 
              drawerContent={(props) => <CustomComponent {...props} />} 
              screenOptions={{headerStyle: {backgroundColor: '#fff'}}}
            >
              <Drawer.Screen
                  name="Dashboard"
                  options={{ drawerLabel: 'Darhboard', headerStyle:{backgroundColor: Color.lightBlue}, headerTintColor: Color.white, headerTitleStyle:{marginLeft: Constants.WIDTH/5} }}
                  component={Dashboard}
              />
              <Drawer.Screen
                  name="L???ch l??m vi???c"
                  options={{ drawerLabel: 'L???ch l??m vi???c', headerStyle:{backgroundColor: Color.lightBlue}, headerTintColor: Color.white, headerTitleStyle:{marginLeft: Constants.WIDTH/5} }}
                  component={Calendar} />
              <Drawer.Screen
                  name="Bu???i tr???i nghi???m"
                  options={{ drawerLabel: 'Bu???i tr???i nghi???m', headerStyle:{backgroundColor: Color.lightBlue}, headerTintColor: Color.white, headerTitleStyle:{marginLeft: Constants.WIDTH/5}  }}
                  component={ExperienceSession} />
              <Drawer.Screen
                  name="H???p ?????ng"
                  options={{ drawerLabel: 'H???p ?????ng', headerStyle:{backgroundColor: Color.lightBlue}, headerTintColor: Color.white, headerTitleStyle:{marginLeft: Constants.WIDTH/5}  }}
                  component={Contract} />
              <Drawer.Screen
                  name="B??o c??o ph??n c??ng ca"
                  options={{ drawerLabel: 'B??o c??o ph??n c??ng ca', headerStyle:{backgroundColor: Color.lightBlue}, headerTintColor: Color.white, headerTitleStyle:{marginLeft: Constants.WIDTH/5}  }}
                  component={AssignmentReport} />
              <Drawer.Screen
                  name="B??o c??o doang thu"
                  options={{ drawerLabel: 'B??o c??o doang thu', headerStyle:{backgroundColor: Color.lightBlue}, headerTintColor: Color.white, headerTitleStyle:{marginLeft: Constants.WIDTH/5}  }}
                  component={SaleReport} />
              <Drawer.Screen
                  name="Chat"
                  options={{ drawerLabel: 'Ch??m s??c kh??ch h??ng', headerStyle:{backgroundColor: Color.lightBlue}, headerTintColor: Color.white, headerTitleStyle:{marginLeft: Constants.WIDTH/5}  }}
                  component={Chat} />
              <Drawer.Screen
                  name="Th??ng b??o"
                  options={{ drawerLabel: 'Th??ng b??o', headerStyle:{backgroundColor: Color.lightBlue}, headerTintColor: Color.white, headerTitleStyle:{marginLeft: Constants.WIDTH/5}  }}
                  component={Notification} />
              <Drawer.Screen
                  name="?????i m???t kh???u"
                  options={{ drawerLabel: '?????i m???t kh???u', headerStyle:{backgroundColor: Color.lightBlue}, headerTintColor: Color.white, headerTitleStyle:{marginLeft: Constants.WIDTH/5}  }}
                  component={Account} />
            </Drawer.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  );
}