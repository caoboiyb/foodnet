import { StyleSheet } from 'react-native';

import * as d from '../../utilities/Tranform';

const styles = StyleSheet.create({
  ViewMain: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  ViewHeader: {
    height: 55 * d.ratioH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  IconBack: {
    // marginTop: 30,
    marginLeft: 30 * d.ratioW,
    height: 13 * d.ratioH,
    width: 20 * d.ratioW,
  },
  Title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  IconSearch: {
    marginRight: 30 * d.ratioW,
    height: 17.5 * d.ratioH,
    width: 17.5 * d.ratioW,
  },
  ViewBtnAdd: {
    // marginLeft: 295 * d.ratioW,
    height: 35 * d.ratioH,
    width: 35 * d.ratioW,
    borderRadius: 35 * d.ratioH,
    backgroundColor: 'rgb(66,183,42)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  BtnAdd: {
    fontSize: 17,
    color: 'white',
    // fontWeight: 'bold',
  },

  ViewContent: {
    flex: 1,
  },

  // Comment
  ViewTextYourComment: {
    marginLeft: 30 * d.ratioW,
  },

  ModalMain: {
    backgroundColor: 'rgba(117,117,117 ,0.5)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Modalbox: {
    backgroundColor: 'white',
    // height: 100,
    padding: 20 * d.ratioH,
    width: d.windowSize.width - 50,
  },
  TextInput: {
    height: 60 * d.ratioH,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 10,
  },
  SendBtnView: {
    flexDirection: 'row',
    marginTop: 15 * d.ratioH,
    justifyContent: 'space-between',
  },
  SendBtn: {
    height: 30 * d.ratioH,
    backgroundColor: 'rgb(66,183,42)',
    elevation: 3,
    width: 80 * d.ratioW,
    borderRadius: 10 * d.ratioH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SendBtnText: {
    color: 'white',
    fontSize: 15,
  },
});

export default styles;
