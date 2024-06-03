import {Dimensions, Platform, PixelRatio} from 'react-native';

const windowDimensions = Dimensions.get('window');

const {height: windowScreenHeight, width: windowScreenWidth} = windowDimensions;

// For text:

const scaleWithWidth = windowDimensions.width / 320; // 320 based on phone scale

export function textReponsive(pixels: number): number {
  const size = pixels * scaleWithWidth;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(size) - 3);
  }

  return Math.round(PixelRatio.roundToNearestPixel(size)) - 3;
}

// For pixels:

const referenceWidth = 375;
const referenceHeight = 667;

const useWidth =
  windowScreenWidth / referenceWidth < windowScreenHeight / referenceHeight;

const ratio = useWidth
  ? windowScreenWidth / referenceWidth
  : windowScreenHeight / referenceHeight;

export function responsivePixels(value: number): number {
  return Math.round(value * ratio);
}

export function rpSizeForPlatform(
  iosSize: number,
  androidSize: number,
): number {
  return Platform.OS === 'ios'
    ? responsivePixels(iosSize)
    : responsivePixels(androidSize);
}

export const resPx = responsivePixels;
export const resText = textReponsive;
