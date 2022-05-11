import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native'
import React from 'react'
import { Color, Constants } from '../../common'
import { RNInput } from '../../components/RNInput'
import { KeyboardScrollView } from '../../components/Keyboard'
import { RNButton } from '../../components/RNButton'
import { useDispatch } from 'react-redux'

const Account = () => {
  
  const dispatch = useDispatch();

  const validate = () => {

  }

  const handleOnConfirmPress = () => {

  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardScrollView >
        <RNInput
          placeholder='Mật khẩu cũ'
          style={styles.input}
          wrapStyleInput={{marginTop: 20}}
          secureTextEntry
        >
          <Text style={styles.title}>{'Mật khẩu cũ'}</Text>
        </RNInput>
        <RNInput
          placeholder='Mật khẩu mới'
          style={styles.input}
          wrapStyleInput={{marginVertical: 10}}
          secureTextEntry
        >
          <Text style={styles.title}>{'Mật khẩu mới'}</Text>
        </RNInput>
        <RNInput
          placeholder='Nhập lại mật khẩu'
          style={styles.input}
          secureTextEntry
        >
          <Text style={styles.title}>{'Nhập lại mật khẩu'}</Text>
        </RNInput>
        <RNButton activeOpacity={0.8}>
          <Text style={styles.textButton} onPress={handleOnConfirmPress}>{'Xác nhận'}</Text>
        </RNButton>
        </KeyboardScrollView>
      </SafeAreaView>
  )
}

export default Account

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    justifyContent:'center',
    alignItems:'center'
  },
  input: {
    borderWidth: 1,
    width: Constants.WIDTH - 40,
    borderColor: Color.lightBlue,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: Color.black,
    marginBottom: 10
  },
  textButton: {
    backgroundColor:Color.lightBlue,
    width: Constants.WIDTH - 40,
    textAlign: 'center',
    color: Color.white,
    fontSize:18,
    fontWeight:'600',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 30,
    borderRadius:10
  }
})