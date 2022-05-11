import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { ReactNode } from 'react'

interface IRNButtonProps {
    children?: ReactNode;
    [x:string]: any;
    activeOpacity?: number
}

const RNButton: React.FC<IRNButtonProps> = ({children,activeOpacity,...props}) => {
  return (
    <TouchableOpacity {...props} activeOpacity={activeOpacity}>
      {children}
    </TouchableOpacity>
  )
}

export default RNButton
