import {StyleSheet} from 'react-native';

import {resPx} from '../../utils/dimensions';

export const stylesAnnouncements = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: resPx(375),
    height: '10%',
  },
  messageContainer: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    width: '85%',
  },
  textLink: {
    color: 'white',
    textAlign: 'center',
    marginTop: resPx(2),
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
