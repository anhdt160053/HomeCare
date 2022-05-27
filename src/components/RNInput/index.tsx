import { StyleSheet, Text, View, ViewStyle, TextInput } from 'react-native'
import React, { ReactNode, useEffect, useState, useImperativeHandle, forwardRef } from 'react'
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
    autoFocus?: boolean ;
    emptyMessage?: string;
    ref?: any;
    name?: string;
}

const RNInput: React.FC<IRNInputProps> =forwardRef((props,ref) => {
  console.log('RNInput');
  const {children,wrapStyleInput,placeholder,secureTextEntry,onChangeText,style,errorMessage,emptyMessage,error,validate,autoFocus,value,name,...rest} = props;
  // const [value, setValue] = useState('');

  // const handleOnChangeText = (text: string) => {
  //   setValue(text);
  // }

  // useImperativeHandle(ref, () => ({
  //   getValue: () => value,
  //   clear : () => setValue('')
  // }))

  return (
    <View 
        style={wrapStyleInput}
    >
      {children}
      <TextInput 
        {...rest}
        name={name}
        autoFocus={autoFocus ? true : false}
        ref={ref}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry ? secureTextEntry: false}
        value={value}
        onChangeText={onChangeText}
        style={style}
      />
      {error && <Text style={styles.textError}>{errorMessage ? errorMessage : emptyMessage}</Text>}
    </View>
  )
})

export default RNInput

const styles = StyleSheet.create({
    textError:{
        fontSize:16,
        fontWeight:'600',
        color: Color.primary,
        marginTop: 5
    }
})