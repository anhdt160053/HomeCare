import {StyleSheet} from 'react-native';

import {Constants} from './Constants';
import Color from './Color';
import Device from './Device';

const Styles = StyleSheet.create({
  Shadow: {
    shadowColor: 'rgb(37,39,41)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    // shadowOffset: {
    //   width: 0,
    //   height: 5,
    // },
    // shadowOpacity: 0.14,
    // shadowRadius: 6.27,
    // elevation: 10,
  },


  RowOnly: {
    flexDirection: 'row',
  },

  Row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  RowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  Flex: {
    flex: 1,
  },

  FlexGrow: {
    flexGrow: 1,
  },

  ButtonIcon: {
    width: 30,
    height: 30,
  },

  ButtonRippleContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 7,
  },


  BorderButtonPrimary: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Color.primary,
  },

  BorderButtonGray: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Color.gray,
  },

  container: {
    flex: 1,
    backgroundColor: Color.background,
  },


  Inner: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },


  JustifyBetween: {
    justifyContent: 'space-between',
  },

  JustifyStart: {
    justifyContent: 'flex-start',
  },

  JustifyEnd: {
    justifyContent: 'flex-end',
  },

  JustifyCenter: {
    justifyContent: 'center',
  },

  CenterItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  AlignCenter: {
    alignItems: 'center',
  },

  AlignStart: {
    alignItems: 'flex-start',
  },

  AlignEnd: {
    alignItems: 'flex-end',
  },

  fillContainer: {
    flexGrow: 1,
    flex: 1,
  },

  Fill: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  SafeView: {
    paddingBottom: Device.BottomPadding,
  },
  ScrollSafeView: {
    paddingBottom: Device.isIphoneX ? 35 + 15 : 15,
  },
  ButtonBottomContainer: {
    width: Constants.WIDTH,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: Device.isIphoneX ? Device.BottomPadding + 15 : 15,
    backgroundColor: '#fff',
    bottom: 0,
  }
});

export default Styles;
