import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo, ReactNode } from 'react'

interface IRNButtonProps {
  children?: ReactNode;
  [x:string]: any;
  activeOpacity?: number;
  disabled?: boolean;
}

const RNButton: React.FC<IRNButtonProps> = ({children,activeOpacity,disabled,...props}) => {
  return (
    <TouchableOpacity {...props} activeOpacity={activeOpacity} disabled={disabled}>
      {children}
    </TouchableOpacity>
  )
}

export default memo(RNButton)
