import { StyleSheet, Platform } from 'react-native';
import { isIphoneX } from '../../utilities/device';
import * as d from '../../utilities/Tranform';

const styles = StyleSheet.create({
  container: {
    width: d.windowSize.width,
    height: d.navBarHeight,
    backgroundColor: '#FFFFFF',
  },
  navBarComponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop:
      Platform.OS === 'ios'
        ? isIphoneX() === true
          ? 1.3 * d.statusBarHeight
          : 1.7 * d.statusBarHeight
        : d.statusBarHeight,
    paddingHorizontal: 30 * d.ratioW,
  },
  leftNavBarStyle: {
    marginTop: 2 * d.ratioH,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
  },
});

export default styles;
