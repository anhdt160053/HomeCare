
import { Dimensions, Platform } from 'react-native';
// import { getStatusBarHeight } from 'react-native-status-bar-height';

const { width, height } = Dimensions.get('window');
// const deviceH = Dimensions.get('screen').height;

const isIphoneX = Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && (height >= 812 || width >= 812);
const HEADER_CONTENT_HEIGHT = 45;
// const HEADER_HEIGHT =  Platform.OS === 'ios' ? isIphoneX ?  HEADER_CONTENT_HEIGHT + getStatusBarHeight() : HEADER_CONTENT_HEIGHT + getStatusBarHeight() : HEADER_CONTENT_HEIGHT;
export default {
    isIphoneX,
    ToolbarHeight: isIphoneX ? 35 : 0,
    HeaderHeight: HEADER_CONTENT_HEIGHT,
    BottomPadding: isIphoneX ? 35 : 0,
    // BarHeight: getStatusBarHeight()
};
