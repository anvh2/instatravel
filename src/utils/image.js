import { Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

export const GetImageSize = url => {
  Image.getSize(url, (srcWidth, srcHeight) => {
    const ratio = Math.min(width / srcWidth, height / srcHeight);
    return {
      width: srcWidth * ratio,
      height: srcHeight * ratio,
    };
  });
};
