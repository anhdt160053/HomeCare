import { Text, TextProps } from 'react-native'
import React from 'react'
import { fontScale } from 'react-native-utils-scale';
import { Color } from '../../common';

interface IRNTextProps extends TextProps {
    fontSize?: number | undefined;
    bold?: boolean;
    color?: string | undefined;
}

const defaultProps = {
    style: {},
    fontSize: undefined,
    bold: false,
    color: undefined,
}

const RNText:React.FC<IRNTextProps> = props => {
    const { fontSize, bold, color, style, children } = props;
    let FONTSIZE: number = 14;
    if (fontSize) {
      FONTSIZE = fontSize;
    }
    return (
      <Text
        {...props}
        style={[
          {
            fontSize: fontScale(FONTSIZE),
            color: !color ? Color.black : color,
          },
          bold && { fontWeight: 'bold' },
          style,
        ]}>
        {children}
      </Text>
    );
}

RNText.defaultProps = defaultProps

export default RNText