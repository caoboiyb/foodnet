import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import NavBar from '../../components/NavBar';

class Home extends Component {
  state = {};

  render() {
    return (
      <View>
        <NavBar title="Home" />
        <Text>Home</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('HomeDetail')}
        >
          <Text>detail</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
