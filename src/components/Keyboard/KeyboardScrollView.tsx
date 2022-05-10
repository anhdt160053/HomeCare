import React, { ReactNode } from 'react'
import { Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface IKeyBoardScrollView {
    children : ReactNode,
    contentContainerStyle?: Object,
    extraScrollHeight?: any,
    style?: Object
}

const KeyboardScrollView: React.FC<IKeyBoardScrollView> = ({children, contentContainerStyle, extraScrollHeight, style}) => {
  return (
    <KeyboardAwareScrollView 
        contentContainerStyle={contentContainerStyle ? contentContainerStyle : {}}
        style={style ? style : {}}
        showsVerticalScrollIndicator={false}
        extraScrollHeight={extraScrollHeight ? extraScrollHeight : Platform.OS === 'android' ? 60 : 80}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"    
    >
        {children}
    </KeyboardAwareScrollView>
  )
}

export default KeyboardScrollView
