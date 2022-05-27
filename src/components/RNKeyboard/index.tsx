import React, { ReactNode } from 'react'
import { Platform, StyleProp, ViewStyle } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface IKeyBoardScrollView {
    children : ReactNode;
    contentContainerStyle?: StyleProp<ViewStyle>;
    extraScrollHeight?: any;
    style?: StyleProp<ViewStyle>;
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
