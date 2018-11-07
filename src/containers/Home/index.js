import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NavBar from '../../components/NavBar';

class Home extends Component {
  state = {};

  render() {
    return (
      <View>
        <NavBar title="Home" />
        <Text>Home</Text>
      </View>
    );
  }
}

export default Home;
