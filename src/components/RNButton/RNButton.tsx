import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { ReactNode } from 'react'

interface IRNButtonProps {
    children?: ReactNode;
    [x:string]: any;
}

const RNButton: React.FC<IRNButtonProps> = ({children,...props}) => {
  return (
    <TouchableOpacity {...props}>
      {children}
    </TouchableOpacity>
  )
}

export default RNButton
