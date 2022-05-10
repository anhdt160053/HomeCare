
import React, { useEffect, useState, useCallback } from 'react';
import { Image, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { getDataUseFetch } from '../../libs/FetchApi';
import FastImage, {} from 'react-native-fast-image'
import { Color, Constants } from '../../common';

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
  const [listUser,setListUser] = useState([]);


  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const getUserInfo = () => {
    let perPage:number = 6;
    if(refreshing){
      perPage = 12;
    }
    console.log('perPage==',perPage);
    
    let url = `https://reqres.in/api/users?per_page=${perPage}`;
    getDataUseFetch(url)
    .then(res => res.json())
    .then((resJson) => console.log(resJson.data))
  }

    useEffect(() => {
      getUserInfo()
    },[])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        {
          listUser.map((user: IResponse) => {
            console.log('user==',user);
            return(
              <ScrollView key={user.id} style={styles.infoContainer} contentContainerStyle={{alignItems:'center',flexDirection:'row'}} showsVerticalScrollIndicator={false}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer:{
    width: Constants.WIDTH - 40,
    height: Constants.HEIGHT /8,
    marginVertical: 10,
    backgroundColor: Color.lightBlue,
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