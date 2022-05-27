import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RNFlatList, RNText } from '../../components'
import { Color, Constants } from '../../common'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { v4 as uuid } from 'uuid'
import FastImage from 'react-native-fast-image'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Styles from '../../common/Styles'

interface IResponseListMessage {
  id: string;
  imageUrl: string;
  name: string;
  description?: string;
  time: string;
}

const Chat = () => {

  const [listMessage, setListMessage] = useState<IResponseListMessage[]|IResponseListMessage|undefined>();

  const _renderItem = ({item,index}: any) => (
    <TouchableOpacity activeOpacity={0.8}  key={index.toString()} style={styles.wrapItem}>
        <View style={[styles.item]}>
          <FastImage  
            source={{
              uri: item.imageUrl,
              priority: FastImage.priority.normal
            }}
            style={{width: 50, height: 50, borderRadius: 25}}
          />
          <RNText style={styles.message}>
            {'3'}
          </RNText>
          <View style={{flexDirection:'column',paddingStart:10}}>
            <RNText>
              {item.name}
            </RNText>
            <RNText>
              {item.description}
            </RNText>
          </View>
          <RNText style={{fontSize: 12, color: Color.gray, position:'absolute', right: 10}}>{'5 minutes ago'}</RNText>
        </View>
    </TouchableOpacity>
  )

  const _onLoadMore = () => {

  }

  const _ItemSeprator = () => (
    <View style={{
        height: 2,
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
      }} 
    />
  )

  useEffect(() => {
    initData();
  }, [])
  
  const initData = () => {
    setListMessage([
      {
        id:'1',
        imageUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
        name: 'Test1',
        description: 'Test1Test1Test1Test1',
        time: '4 minutes ago'
      },
      {
        id:'2',
        imageUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
        name: 'Test2',
        description: 'Test1Test1Test1Test1',
        time: '4 minutes ago'
      },
      {
        id:'3',
        imageUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
        name: 'Test3',
        description: 'Test1Test1Test1Test1',
        time: '4 minutes ago'
      },
      {
        id:'4',
        imageUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
        name: 'Test4',
        description: 'Test1Test1Test1Test1',
        time: '4 minutes ago'
      },
      {
        id: '5',
        imageUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
        name: 'Test5',
        description: 'Test1Test1Test1Test1',
        time: '4 minutes ago'
      },
      {
        id: '6',
        imageUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
        name: 'Test5',
        description: 'Test1Test1Test1Test1',
        time: '4 minutes ago'
      },
      {
        id: '7',
        imageUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
        name: 'Test5',
        description: 'Test1Test1Test1Test1',
        time: '4 minutes ago'
      },
      {
        id: '8',
        imageUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
        name: 'Test5',
        description: 'Test1Test1Test1Test1',
        time: '4 minutes ago'
      },
      {
        id: '9',
        imageUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
        name: 'Test5',
        description: 'Test1Test1Test1Test1',
        time: '4 minutes ago'
      },
      {
        id: '10',
        imageUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
        name: 'Test5',
        description: 'Test1Test1Test1Test1',
        time: '4 minutes ago'
      },
    ])
  }

  return (
    <SafeAreaView style={styles.container} >
      <View 
        style={styles.wrapList}
      >
        <RNText
          fontSize={16}
          color={Color.lightBlue} 
        >
          {'6 Unread Messages'}
        </RNText>
        <AntIcon 
          name='search1'
          size={20}
          color={Color.gray}
          style={{fontWeight:'bold'}}
        />
      </View>
      <RNFlatList 
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={listMessage}
        renderItem={_renderItem}
        // ItemSeparatorComponent={_ItemSeprator}
        // style={{backgroundColor:'blue'}}
      />
    </SafeAreaView>
  )
}

export default Chat

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: Color.white
  },
  wrapList: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingBottom: 20,
  },
  wrapItem: {
    height: Constants.HEIGHT/10,
    flex:1,
    backgroundColor: Color.lightBlue, 
    borderRadius:10
  },
  item: {
    ...Styles.Shadow,
    flexDirection: 'row',
    alignItems:'center',
    height:'100%',
    paddingStart:10,
    backgroundColor: Color.background,
    borderBottomWidth:1,
    borderColor: Color.gray
  },
  message: {
    color: Color.white, 
    fontWeight:'800',
    position: 'absolute', 
    left: 40, 
    bottom: 55, 
    backgroundColor: Color.primary, 
    borderRadius: 7.5,
    width: 15,
    height: 15, 
    textAlign:'center', 
    fontSize: 10
  }
})