import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import NavBar from '../../components/NavBar';
import Statistic from '../../components/Statistic';
import Icons from '../../themes/Icons';
import Images from '../../themes/Images';
import styles from './styles';

class Profile extends Component {
  state = {
    name: 'trungducng',
    detail: 'Male, Hanoi',
    username: 'trungducng',
    address: 'Hanoi',
    password: 'hanoi123',
    repass: 'hanoi123',
  };

  onSave = () => {
    this.setState(
      {
        name: this.state.username,
        detail: `Male, ${this.state.address}`,
      },
      () => {
        alert('Change info successful');
      },
    );
  };

  onLogout = () => {
    Alert.alert('Thông báo', 'Bạn có muốn đăng xuất', [
      {
        text: 'Huỷ',
        onPress: () => {},
      },
      {
        text: 'Đồng ý',
        onPress: () => {
          this.props.navigation.navigate('Auth');
        },
      },
    ]);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.topView}>
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <NavBar
              title="Account"
              leftNavBar={<Image source={Icons.back} />}
              onPressLeft={() => this.props.navigation.goBack()}
            />
            <View style={{ flex: 1, marginTop: 20, alignItems: 'center' }}>
              <Image source={Images.defaultAvatar} style={styles.avatar} />
              <Text style={styles.name}>{this.state.name}</Text>
              <Text style={styles.detail}>{this.state.detail}</Text>
            </View>
          </View>
          <View style={{ height: 20, width: 10 }} />

          <TouchableOpacity style={styles.btnFollow} onPress={this.onSave}>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 14,
                color: 'white',
                textAlign: 'center',
              }}
            >
              SAVE
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.botView}>
          <View style={styles.statisticView}>
            <Statistic number={1000} title="Follower" />
            <Statistic number={100} title="Followings" />
            <Statistic number={10} title="Share" />
          </View>
          <View style={{ marginTop: 25 }}>
            <View style={styles.inputView}>
              <Text style={styles.label}>Name: </Text>
              <TextInput
                style={styles.input}
                value={this.state.username}
                onChangeText={(text) => this.setState({ username: text })}
                autoCorrect={false}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.label}>Address: </Text>
              <TextInput
                style={styles.input}
                value={this.state.address}
                onChangeText={(text) => this.setState({ address: text })}
                autoCorrect={false}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.label}>Password: </Text>
              <TextInput
                style={styles.input}
                value={this.state.password}
                secureTextEntry
                onChangeText={(text) => this.setState({ password: text })}
                autoCorrect={false}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.label}>Re-password: </Text>
              <TextInput
                style={styles.input}
                value={this.state.repass}
                secureTextEntry
                onChangeText={(text) => this.setState({ repass: text })}
                autoCorrect={false}
              />
            </View>
          </View>
          <TouchableOpacity
            style={{
              width: '80%',
              alignSelf: 'center',
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(66,183,42,1)',
              borderRadius: 2.5,
              marginTop: 20,
            }}
            onPress={this.onLogout}
          >
            <Text
              style={{
                fontSize: 14,
                lineHeight: 14,
                color: 'white',
                textAlign: 'center',
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <KeyboardSpacer />
      </View>
    );
  }
}

export default Profile;
