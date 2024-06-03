import {useRef, useState} from 'react';
import {ScrollView} from 'react-native';

export const useSliderMovementAction = () => {
  const scrollRef = useRef<ScrollView>(null);

  const onScrollAction = (x: number) => {
    scrollRef?.current?.scrollTo({
      x,
      animated: true,
    });
  };

  return {
    scrollRef,
    onScrollAction,
  };
};
