import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import Images from '../../themes/Images';

class Login extends Component {
  state = {
    isLoading: false,
    email: '',
    password: '',
  };

  onChangeEmail = (text) => {
    this.setState({
      email: text,
    });
  };

  onNext = () => {
    this.passwordField.focus();
  };

  onChangePassword = (text) => {
    this.setState({
      password: text,
    });
  };

  onLogin = () => {
    if (this.state.email.length === 0 || this.state.password.length === 0) {
      alert('Please fill the form');
    } else {
      this.setState({
        isLoading: true,
      });
      setTimeout(() => {
        this.props.navigation.navigate('Home');
      }, 800);
    }
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <ScrollView style={styles.container}>
          <StatusBar
            backgroundColor="rgb(76, 196, 57)"
            barStyle="light-content"
          />
          <View style={styles.cirleView}>
            <View style={styles.cirle}>
              <Image source={Images.logo} style={styles.image} />
            </View>
          </View>
          <View style={styles.loginForm}>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={this.onChangeEmail}
                onSubmitEditing={this.onNext}
              />
              <TextInput
                ref={(ref) => {
                  this.passwordField = ref;
                }}
                style={styles.input}
                placeholder="Password"
                underlineColorAndroid="transparent"
                secureTextEntry
                onChangeText={this.onChangePassword}
                onSubmitEditing={this.onLogin}
                autoCapitalize="none"
              />
            </View>
            <View style={styles.vButton}>
              <TouchableOpacity style={styles.btnLogin} onPress={this.onLogin}>
                {!this.state.isLoading ? (
                  <Text style={styles.txtBtn}> LOG IN </Text>
                ) : (
                  <ActivityIndicator size="small" color="white" />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.txtBottom}>Not account? Go to</Text>
              <TouchableOpacity
                style={styles.textSignUpContainer}
                onPress={() => this.props.navigation.navigate('Signup')}
              >
                <Text style={styles.txtSignup}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Login;
