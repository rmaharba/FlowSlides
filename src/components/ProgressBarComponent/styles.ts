import {Dimensions, StyleSheet} from 'react-native';
import {resPx} from '../../utils/dimensions';

export const stylesProgressBar = StyleSheet.create({
  container: {
    top: -resPx(70),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: resPx(20),
  },
});
