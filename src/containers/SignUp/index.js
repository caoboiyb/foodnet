import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from 'react-native';
import styles from './styles';
import Images from '../../themes/Images';

class SignUp extends Component {
  state = {
    isLoading: false,
    email: '',
    password: '',
    repassword: '',
  };

  onChangeEmail = (text) => {
    this.setState({
      email: text,
    });
  };

  onNextEmail = () => {
    this.passwordField.focus();
  };

  onChangePassword = (text) => {
    this.setState({
      password: text,
    });
  };

  onNextPassword = () => {
    this.rePasswordField.focus();
  };

  onChangeRePassword = (text) => {
    this.setState({
      repassword: text,
    });
  };

  onSignup = () => {
    if (
      this.state.email.length === 0 ||
      this.state.password.length === 0 ||
      this.state.repassword.length === 0
    ) {
      alert('Please fill all the form');
    } else if (
      this.state.password.length !== 0 &&
      this.state.repassword.length !== 0 &&
      this.state.password !== this.state.repassword
    ) {
      alert('Re-password is not correct');
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
      <ScrollView style={styles.container}>
        <View style={styles.cirleView}>
          <View style={styles.cirle}>
            <Image source={Images.logo} style={styles.image} />
          </View>
        </View>
        <View style={styles.signup}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              underlineColorAndroid="transparent"
              keyboardType="email-address"
              onChangeText={this.onChangeEmail}
              onSubmitEditing={this.onNextEmail}
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
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
              onSubmitEditing={this.onNextPassword}
              autoCapitalize="none"
            />
            <TextInput
              ref={(ref) => {
                this.rePasswordField = ref;
              }}
              style={styles.input}
              placeholder="Re-Password"
              underlineColorAndroid="transparent"
              secureTextEntry
              onChangeText={this.onChangeRePassword}
              onSubmitEditing={this.onSignup}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.vButton}>
            <TouchableOpacity style={styles.btnLogin} onPress={this.onSignup}>
              {!this.state.isLoading ? (
                <Text style={styles.txtBtn}>SIGN UP</Text>
              ) : (
                <ActivityIndicator size="small" color="white" />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.txtBottom}>You have account? Go to</Text>
            <TouchableOpacity
              style={styles.textSignUpContainer}
              onPress={() => this.props.navigation.goBack()}
            >
              <Text style={styles.txtSignup}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default SignUp;
