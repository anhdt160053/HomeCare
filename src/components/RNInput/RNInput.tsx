import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Color } from '../../common'

interface IRNInputProps {
    children?: ReactNode
    wrapStyleInput?: ViewStyle
    style?: ViewStyle
    placeholder?: string
    secureTextEntry?: boolean
    value?: string;
    onChangeText?: () => void;
    error?: boolean;
    errorMessage?: string;
}

const RNInput: React.FC<IRNInputProps> = ({children,wrapStyleInput,placeholder,secureTextEntry,value,onChangeText,style,error,errorMessage,...rest}) => {
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
      {error && <Text style={styles.textError}>{errorMessage}</Text>}
    </View>
  )
}

export default RNInput

const styles = StyleSheet.create({
    textError:{
        fontSize:16,
        fontWeight:'600',
        color: Color.primary
    }
})