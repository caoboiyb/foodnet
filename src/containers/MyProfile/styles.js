import { StyleSheet, Platform } from 'react-native';
import * as d from '../../utilities/Tranform';
import { isIphoneX } from '../../utilities/device';

const account = StyleSheet.create({
  container: {
    flex: 1,
  },
  topView: {
    height: 302.5 * d.ratioH,
    alignItems: 'center',
  },
  back: {
    height: 19 * d.ratioH,
    width: 28 * d.ratioW,
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
  },
  info: {
    marginTop: 12.5 * d.ratioH,
    alignItems: 'center',
  },
  avatar: {
    width: 110 * d.ratioW,
    height: 100 * d.ratioH,
    marginBottom: 24.5 * d.ratioH,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 16,
    marginBottom: 7,
  },
  detail: {
    fontSize: 12,
    lineHeight: 12,
    color: 'rgb(153,153,153)',
  },
  btnFollow: {
    position: 'absolute',
    borderRadius: 2.5,
    left: 112.5 * d.ratioW,
    bottom: 0,
    height: 40 * d.ratioH,
    width: 150 * d.ratioW,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(66,183,42,1)',
    flexDirection: 'row',
    zIndex: 2,
  },
  imageFollow: {
    height: 26 * d.ratioH,
    width: 30 * d.ratioW,
    marginRight: 9 * d.ratioW,
  },
  botView: {
    marginTop: 30 * d.ratioH,
    height: 334.5 * d.ratioH,
  },
  statisticView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 15 * d.ratioW,
    height: 60 * d.ratioH,
  },
  botRestaurant: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 30 * d.ratioW,
    marginTop: 50 * d.ratioH,
    marginBottom: 25 * d.ratioH,
  },
  viewButton: {
    flexDirection: 'row',
  },
  input: {
    backgroundColor: '#FFFFFF',
    height: Platform.OS === 'ios' ? 30 : 50 * d.ratioH,
    flex: 2,
    paddingHorizontal: 10,
    borderRadius: 2.5,
  },
  label: {
    fontWeight: '600',
    lineHeight: 30,
    flex: 1,
  },
  inputView: {
    flexDirection: 'row',
    width: '86%',
    alignSelf: 'center',
    marginVertical: 4,
  },
});

export default account;
