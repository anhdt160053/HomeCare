import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { ReactNode, useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Color } from '../../common'

interface IRNInputProps {
    children?: ReactNode
    wrapStyleInput?: ViewStyle
    style?: ViewStyle
    placeholder?: string
    secureTextEntry?: boolean
    value?: string;
    onChangeText?: (text: string) => void;
    errorMessage?: string;
    validate?: boolean ;
    error?: boolean ;
    emptyMessage?: string;
}

const RNInput: React.FC<IRNInputProps> = ({children,wrapStyleInput,placeholder,secureTextEntry,value,onChangeText,style,errorMessage,emptyMessage,error,validate,...rest}) => {
  console.log('RNInput');
  return (
    <View 
        style={wrapStyleInput}
    >
      {children}
      <TextInput 
        {...rest}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry ? secureTextEntry: false}
        value={value}
        onChangeText={onChangeText}
        style={style}
      />
      {error && <Text style={styles.textError}>{errorMessage ? errorMessage : emptyMessage}</Text>}
    </View>
  )
}

export default RNInput

const styles = StyleSheet.create({
    textError:{
        fontSize:16,
        fontWeight:'600',
        color: Color.primary,
        marginTop: 5
    }
})