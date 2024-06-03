import {Bar} from 'react-native-progress';
import {Dimensions, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import {resPx} from '../../utils/dimensions';

import {ProgressBarComponentProps} from './types';
import {stylesProgressBar} from './styles';

const initialProgressState = [
  {progress: 1, name: 'progress1'},
  {progress: 1, name: 'progress2'},
  {progress: 1, name: 'progress3'},
  {progress: 1, name: 'progress4'},
];

export const ProgressBarComponent = ({
  currentSlide,
  updateSliderFocused,
}: ProgressBarComponentProps) => {
  const intervalIdRef = useRef<any>(null);
  const [barProgress, setBarProgress] = useState(initialProgressState);

  const changeSlide = () => {
    updateSliderFocused();
  };

  const updateProgress = () => {
    intervalIdRef.current = setInterval(() => {
      setBarProgress(prevState =>
        prevState.map((item, index) => {
          if (currentSlide === index + 1) {
            if (item.progress === 1) {
              return {...item, progress: 0.01};
            }
            if (item.progress < 1) {
              return {...item, progress: item.progress + 0.01};
            }
            // This is a workaround to fix the warning of "Can't perform a React state update from a child component"
            setTimeout(() => {
              changeSlide();
            });
            return {
              ...item,
              progress: 1,
            };
          }
          return item;
        }),
      );
    }, 100);
  };

  useEffect(() => {
    updateProgress();
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [currentSlide]);

  return (
    <View style={stylesProgressBar.container}>
      {barProgress?.map(item => (
        <Bar
          key={item.name}
          color="white"
          unfilledColor="gray"
          borderRadius={1}
          borderWidth={0}
          progress={item.progress}
          width={resPx(80)}
        />
      ))}
    </View>
  );
};
