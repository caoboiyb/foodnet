import { StyleSheet } from 'react-native';
import * as d from '../../utilities/Tranform';

const card = StyleSheet.create({
  container: {
    width: '90%',
    height: 110 * d.ratioH,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 2.5,
    alignSelf: 'center',
    marginBottom: 20,
  },
  image: {
    width: 110 * d.ratioH,
    height: 110 * d.ratioH,
  },
  imageView: {
    width: 135 * d.ratioH,
    height: 110 * d.ratioH,
    overflow: 'hidden',
  },
  circle: {
    width: 35 * d.ratioH,
    height: 35 * d.ratioH,
    borderRadius: 17.5 * d.ratioH,
    position: 'absolute',
    top: 37.5 * d.ratioH,
    right: 7.5 * d.ratioH,
    backgroundColor: 'rgb(66, 183, 42)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  txtCircle: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  cardInfo: {
    paddingTop: 21.5 * d.ratioH,
    marginRight: 25.5 * d.ratioW,
    flex: 1,
  },
  name: {
    fontSize: 16,
    height: 27 * d.ratioH,
    lineHeight: 16,
    width: '100%',
    fontWeight: '600',
    color: 'rgb(82, 82, 82)',
  },
  typeView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
  },
  type: {
    fontSize: 12,
    lineHeight: 12,
    flex: 1,
    fontWeight: '600',
    color: 'rgb(153, 153, 153)',
  },
  review: {
    fontSize: 9,
    lineHeight: 9,
    fontWeight: '600',
  },
  open: {
    color: 'rgb(66, 183, 42)',
    fontSize: 10,
    lineHeight: 10,
    width: 50,
  },
  closed: {
    color: 'red',
    fontSize: 10,
    lineHeight: 10,
    width: 50,
  },
  dot: {
    textAlign: 'center',
    lineHeight: 9,
    fontWeight: 'bold',
    alignItems: 'center',
    marginHorizontal: 7 * d.ratioW,
  },
  distance: {
    fontSize: 9,
    lineHeight: 9,
  },
  statusView: {
    flexDirection: 'row',
    marginTop: 24 * d.ratioH,
  },
});

export default card;
