
import React, { useEffect, useState, useCallback } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { getDataUseFetch } from '../../libs/FetchApi';
import FastImage, {} from 'react-native-fast-image'
import { Color, Constants } from '../../common';
import { Flow } from 'react-native-animated-spinkit';
import {RNFlatList} from '../../components';


interface IUserInfo {
  id: number,
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

// const wait = (timeout: number) => {
//   return new Promise(resolve => setTimeout(resolve, timeout));
// }


const Dashboard = () => {
  const [listUser, setListUser] = useState([]);
  const [limit, setLitmit] = useState(4);
  let url = `https://reqres.in/api/users?per_page=${limit}`;
 
  // const onRefresh = useCallback(() => {
  //   setRefreshing(true);
    
  //   wait(2000).then(() => setRefreshing(false));
  // }, []);

  const getUserInfo = () => {
    getDataUseFetch(url)
    .then(response => response.json())
    .then(responseJson => {
      if(!responseJson) return;
      // setLitmit(limit+2);
      setListUser(listUser.concat(responseJson.data));
    })
  }

  const handleOnScroll = (event: any) => {
    console.log('contentOffsetY',event.nativeEvent.contentOffset.y);
  }

  const _renderItem = ({ item, index }: any) => {
    return (
      <View key={index.toString()} style={styles.infoContainer} >
        <FastImage source={{uri: item.avatar}} style={styles.image}/>
        <View style={{marginLeft: 10}}>
          <Text style={styles.text}>{item.first_name.toUpperCase()} {item.last_name.toLocaleUpperCase()}</Text>
          <Text style={[styles.text]}>{item.email}</Text>
        </View>
      </View>
    );
  };

    useEffect(() => {
      getUserInfo()
    },[])

  return (
    <SafeAreaView style={styles.container}>
      <RNFlatList data={listUser} renderItem={_renderItem} showsVerticalScrollIndicator ={false} showsHorizontalScrollIndicator={false} onLoadMore={getUserInfo}/>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white
  },
  infoContainer:{
    width: Constants.WIDTH - 40,
    height: Constants.HEIGHT /4,
    marginVertical: 10,
    backgroundColor: Color.gray,
    marginLeft:20,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft:40
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: Color.white
  }
});

export default Dashboard;