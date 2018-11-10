import { StyleSheet } from 'react-native';
import * as d from '../../utilities/Tranform';
// import { Color } from '../../themes';

const styles = StyleSheet.create({
  ViewMain: {
    flex: 1,
    flexDirection: 'column',
  },

  ButtonTopMain: {
    flexDirection: 'row',
    marginHorizontal: 20 * d.ratioW,
    marginVertical: 20 * d.ratioH,
    justifyContent: 'space-between',
  },
  ButtonTop: {
    marginBottom: 3 * d.ratioH,
  },
  ButtonTopText: {
    color: 'black',
    fontSize: 12,
    // fontWeight: 'bold',
    marginTop: 3 * d.ratioH,
  },
  ViewButton: {
    backgroundColor: 'white',
    // paddingHorizontal: 15 * d.ratioW,
    paddingVertical: 19 * d.ratioH,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100 * d.ratioW,
    borderRadius: 3 * d.ratioW,
    elevation: 5,
  },
});

export default styles;
