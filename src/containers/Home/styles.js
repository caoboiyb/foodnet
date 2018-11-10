import { StyleSheet } from 'react-native';
import * as d from '../../utilities/Tranform';
// import { Color } from '../../themes';

const styles = StyleSheet.create({
  ViewMain: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(245,245,245)',
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
    // marginBottom: 20 * d.ratioH,
  },

  CardMain: {
    marginHorizontal: 20 * d.ratioW,
    marginBottom: 25 * d.ratioH,
    backgroundColor: 'white',
    borderRadius: 3 * d.ratioW,
    elevation: 5,
    overflow: 'hidden',
  },
  CardImage: {
    width: d.windowSize.width - 40 * d.ratioW,
    height: 150 * d.ratioH,
  },

  CardViewScore: {
    position: 'absolute',
    height: 50 * d.ratioH,
    width: 50 * d.ratioH,
    borderRadius: 25 * d.ratioH,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb( 66 ,183 ,42)',
    top: 125 * d.ratioH,
    right: 25 * d.ratioH,
  },
  CardViewScoreText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  CardViewBottom: {
    padding: 25 * d.ratioH,
  },
  CardResName: {
    color: 'rgb(82,82,82)',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12 * d.ratioH,
  },
  CardResType: {
    color: 'rgb( 153 ,153 ,153)',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 20 * d.ratioH,
  },
  CardResDis: {
    fontSize: 12,
  },
  CardOpenView: {
    flexDirection: 'row',
  },
});

export default styles;
