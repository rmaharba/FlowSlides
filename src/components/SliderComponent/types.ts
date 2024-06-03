import {SlideItem} from '../../utils/types';

export type SliderComponentProps = {
  currentIndex: number;
  slidersItem: SlideItem;
  currentSlide: number;
  onPressArrow: () => void;
};
