import { Image, StyleProp, StyleSheet, Text, TextStyle, TouchableWithoutFeedback, View, ViewStyle } from 'react-native'
import React, { useEffect, useState } from 'react';
import { scale, fontScale } from 'react-native-utils-scale';

interface IRNCheckboxProps {
    style?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    fontFamily?: string;
    type?: 'checkbox' | 'radio';
    label?: string;
    check?: boolean;
    size?: number;
    color?: string;
    onPress?: (check: boolean) => void;
}

const checkbox_check = require('./icon/checkbox-check.png');
const checkbox_uncheck = require('./icon/checkbox-uncheck.png');
const radio_check = require('./icon/radio-check.png');
const radio_uncheck = require('./icon/radio-uncheck.png');

const defaultProps = {
    check: false,
    style: undefined,
    labelStyle: {},
    color: 'black',
    label: undefined,
    onPress: () => {},
}

const RNCheckbox: React.FC<IRNCheckboxProps> = props => {
    const {
        style,
        size = 25,
        type = 'checkbox',
        color,
        check= false,
        label,
        labelStyle,
        fontFamily,
        onPress
    } = props;
    const [value, setValue] = useState<boolean>(check);

  useEffect(() => {
    if (check) {
      setValue(true);
    } else {
      setValue(false);
    }
  }, [check]);

  const font = () => {
    if (fontFamily) {
      return {
        fontFamily: fontFamily,
      };
    } else {
      return {};
    }
  };

  const onClick = () => {
    setValue(!value);
    if (onPress) {
      onPress(!value);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={[style ? style : styles.container]}>
        <Image
          style={{
            width: scale(size),
            height: scale(size),
            tintColor: color,
          }}
          source={
            type === 'checkbox'
              ? value
                ? checkbox_check
                : checkbox_uncheck
              : value
              ? radio_check
              : radio_uncheck
          }
        />
        {label && (
          <Text
            style={[
              styles.text,
              { fontSize: fontScale(size - scale(5)), color: color },
              labelStyle,
              font(),
            ]}>
            {label}
          </Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

RNCheckbox.defaultProps = defaultProps;

export default RNCheckbox

const styles = StyleSheet.create({
    container: {
        padding: scale(5),
        flexDirection: 'row',
        alignItems: 'center',
      },
      text: {
        marginLeft: scale(10),
      },
})