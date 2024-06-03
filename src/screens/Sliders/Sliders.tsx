import React, {useState} from 'react';
import {ScrollView, Dimensions, View} from 'react-native';

import {ProgressBarComponent, SliderComponent} from '../../components';
import {useGetSliderData, useSliderMovementAction} from '../../hooks';

import {sliderStyles} from './styles';

const {width} = Dimensions.get('window');

export const Sliders = () => {
  const {sliderData} = useGetSliderData();

  const {scrollRef, onScrollAction} = useSliderMovementAction();
  const [currentSliderOnFocus, setCurrentSliderOnFocus] = useState(1);

  const updateSliderFocused = () => {
    if (currentSliderOnFocus < 4) {
      onScrollAction(currentSliderOnFocus * width);
      setCurrentSliderOnFocus(currentSliderOnFocus + 1);
    } else {
      onScrollAction(0);
      setCurrentSliderOnFocus(1);
    }
  };

  return (
    <>
      <ScrollView
        ref={scrollRef}
        scrollEnabled={false}
        horizontal
        style={sliderStyles.scrollStyle}>
        {sliderData.map((item, index) => {
          if (!item.mobileImageOrVideo?.url) return null;
          return (
            <View key={item?.title}>
              <SliderComponent
                slidersItem={item}
                currentIndex={index}
                currentSlide={currentSliderOnFocus}
                onPressArrow={updateSliderFocused}
              />
            </View>
          );
        })}
      </ScrollView>
      <ProgressBarComponent
        currentSlide={currentSliderOnFocus}
        updateSliderFocused={updateSliderFocused}
      />
    </>
  );
};
