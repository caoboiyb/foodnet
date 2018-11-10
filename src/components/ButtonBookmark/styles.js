import { StyleSheet } from 'react-native';

import * as d from '../../utilities/Tranform';

const styles = StyleSheet.create({
  ViewMain: {
    height: 60 * d.ratioH,
    width: 67.5 * d.ratioW,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  iconStyle: {
    height: 18 * d.ratioH,
    width: 18 * d.ratioW,
    marginBottom: 7.5 * d.ratioH,
  },
});

export default styles;
