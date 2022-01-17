import { Dimensions } from 'react-native';
import DeviceUiInfo from './fontScale';

export * from './fontScale';

export const HEIGHT = Dimensions.get('screen');
export const HEIGHT_LOGO = HEIGHT.height * 0.6 * 0.3;

export const MAIN_BACKGROUND_COLOR = '#fff'; // '#cce8f9' //'#E1EBFF'
export const APP_NAME = 'travel';

export const SCALE = DeviceUiInfo.scale.bind(DeviceUiInfo);

export const ScreenName = {
  Navigation: 'Navigation',
  ViewPost: 'ViewPost',
};
