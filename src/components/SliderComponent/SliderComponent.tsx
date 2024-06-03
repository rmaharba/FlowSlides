import React, {useRef} from 'react';
import {SvgUri} from 'react-native-svg';
import Video, {VideoRef} from 'react-native-video';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {stylesSlide} from './styles';
import {fileType} from '../../utils';
import {resText} from '../../utils/dimensions';

import {SliderComponentProps} from './types';

export const SliderComponent = ({
  slidersItem,
  currentIndex,
  currentSlide,
  onPressArrow,
}: SliderComponentProps) => {
  const videoRef = useRef<VideoRef>(null);
  const videoUrl = {uri: slidersItem.mobileImageOrVideo?.url};

  const isFocused = currentIndex + 1 === currentSlide;

  const textSize = currentIndex + 1 === 2 ? resText(34) : resText(40);

  const hasOpacity = slidersItem.enableDarkBackdrop;
  const contentStyles = [
    hasOpacity ? stylesSlide.opacity : null,
    stylesSlide.contentContainer,
  ];

  const EyeBrowImageRender = () => {
    const extensionType = fileType(slidersItem.eyebrowImage?.url || '');

    if (extensionType === 'png') {
      return (
        <Image
          style={stylesSlide.eyeBrownImage}
          source={{uri: slidersItem.eyebrowImage?.url}}
          resizeMode="cover"
        />
      );
    }

    if (extensionType === 'svg') {
      return (
        <SvgUri
          width="50%"
          height="18%"
          uri={slidersItem.eyebrowImage?.url || ''}
        />
      );
    }
  };

  return (
    <View key={slidersItem.eyebrowText} style={stylesSlide.container}>
      <Video
        ref={videoRef}
        key={slidersItem.eyebrowText}
        source={videoUrl}
        style={stylesSlide.backgroundVideo}
        muted={true}
        repeat={true}
        paused={!isFocused}
        resizeMode={'cover'}
        rate={1.0}
      />
      <View style={contentStyles}>
        <View style={stylesSlide.centerContainer}>
          <EyeBrowImageRender />
          <View style={stylesSlide.row}>
            <View style={stylesSlide.textContainer}>
              <Text
                style={[
                  {
                    fontSize: textSize,
                  },
                  stylesSlide.textStyle,
                ]}>
                {slidersItem.title?.toUpperCase()}
              </Text>
            </View>
            <TouchableOpacity onPress={onPressArrow} activeOpacity={0.4}>
              <Image
                style={stylesSlide.buttonIcon}
                source={require('../../assets/Right-Arrow.png')}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
