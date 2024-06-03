import {Dimensions, StyleSheet} from 'react-native';
import {resPx} from '../../utils/dimensions';

const {width} = Dimensions.get('window');

export const stylesSlide = StyleSheet.create({
  container: {width, height: '100%'},
  backgroundVideo: {
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },
  contentContainer: {
    width,
    height: '100%',
    justifyContent: 'center',
  },
  opacity: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  centerContainer: {
    top: -resPx(30),
    marginHorizontal: resPx(15),
    height: '40%',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {width: '80%', height: '100%', justifyContent: 'center'},
  textStyle: {
    fontFamily: 'sans-serif',
    color: 'white',
    fontWeight: '800',
  },
  buttonIcon: {width: resPx(40), height: resPx(40)},
  eyeBrownImage: {width: '50%', height: resPx(30), marginBottom: resPx(8)},
});
