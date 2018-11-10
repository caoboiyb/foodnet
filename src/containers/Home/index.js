import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import NavBar from '../../components/NavBar';
import Icons from '../../themes/Icons';
import styles from './styles';

class Home extends Component {
  state = {};

  renderButton = (title, icon) => {
    return (
      <View style={styles.ViewButton}>
        <Image source={icon} style={styles.ButtonTop} />
        <Text style={styles.ButtonTopText}>{title}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.ViewMain}>
        <NavBar title="Home" rightNavBar={<Image source={Icons.profile} />} />
        <View style={styles.ButtonTopMain}>
          {this.renderButton('Restaurant', Icons.resIcon)}
          {this.renderButton('Coffee & Tea', Icons.tea)}
          {this.renderButton('Club & Bar', Icons.clubbar)}
        </View>
      </View>
    );
  }
}

export default Home;
