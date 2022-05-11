
import React, { useEffect, useState, useCallback } from 'react';
import { Image, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { getDataUseFetch } from '../../libs/FetchApi';
import FastImage, {} from 'react-native-fast-image'
import { Color, Constants } from '../../common';
import { Flow } from 'react-native-animated-spinkit';

interface IResponse {
  id: number,
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Dashboard = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [listUser, setListUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let perPage:number = 6;
  console.log('height=',Constants.HEIGHT);
  
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    if(listUser.length ){
      perPage += 1;
      let url = `https://reqres.in/api/users?per_page=${perPage}`;
      console.log('url--',url);
      getDataUseFetch(url)
      .then(res => res.json())
      .then((resJson) => {
        setListUser(resJson.data)
        setIsLoading(false)
      })
    }
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const getUserInfo = () => {
    let url = `https://reqres.in/api/users?per_page=${perPage}`;
    getDataUseFetch(url)
    .then(res => res.json())
    .then((resJson) => setListUser(resJson.data))
  }

  const handleOnScroll = (event: any) => {
    console.log('contentOffsetY',event.nativeEvent.contentOffset.y);
    if(event.nativeEvent.contentOffset.y) {
      setIsLoading(true);  
    } 
  }

    useEffect(() => {
      getUserInfo()
    },[])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator ={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        keyboardShouldPersistTaps={'handled'}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        onScroll={handleOnScroll}
      >
        {
          listUser.map((user: IResponse) => {
            return (
              <ScrollView key={user.id} style={styles.infoContainer} contentContainerStyle={{alignItems:'center',flexDirection:'row',marginTop:20}}>
                <FastImage source={{uri: user.avatar}} style={styles.image}/>
                <View style={{marginLeft: 10}}>
                  <Text style={styles.text}>{user.first_name.toUpperCase()} {user.last_name.toLocaleUpperCase()}</Text>
                  <Text style={[styles.text]}>{user.email}</Text>
                </View>
              </ScrollView>
            )
          })
        }
      </ScrollView>
      {isLoading && <Flow size={48} color={Color.gray} style={{alignSelf:'center'}}></Flow>}
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
    height: Constants.HEIGHT /8,
    marginVertical: 10,
    backgroundColor: Color.gray,
    marginLeft:20,
    borderRadius:10
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