import React, { Component } from 'react';
import { View, Text, Image, Linking, TouchableHighlight, StatusBar } from 'react-native';
import { Button } from 'react-native-elements'
StatusBar.setBackgroundColor('#f5511e');

import NStyles from './styles';
export default class NDemo extends Component {
  constructor(props){
    super(props);
    this.onPressLogin = this.onPressLogin.bind(this);
    // this.props.screenProps.auth.signOut();
  }
  onPressLogin(){
    console.log("Login button pressed");
    this.props.navigation.navigate('SignIn');
  }
  _onTermsPress(){
    let url = "https://blufieldsenergy.com/terms-of-use.html";
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log('Don\'t know how to open URI: ' + url);
      }
    });
  }
  _onPrivacyPress() {
    let url = "https://blufieldsenergy.com/privacy-policy.html";
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log('Don\'t know how to open URI: ' + url);
      }
    });
  }
  // componentWillMount() {
  //   console.log("Demo Component will mount");
  //   let self = this;
  //   // console.log("Current User",this.props.screenProps.currentUser);
  //   // this.props.screenProps.auth.onAuthStateChanged(function(user) {
  //   //   if(user != null) {
  //   //     // self.props.navigation.navigate('Dash');
  //   //   }
  //   // });
  // }
  componentDidMount() {
    console.log("Demo Component did mount");
  }
  render(){
    return(
      <View style={ [NStyles.container, NStyles.loginBg] }>
        {
          <View style={{position:'absolute',top:0,bottom:0}}>
            <Image source={require('../assets/lbg.png')} />
          </View>
        }
        <View>
          <View style={[NStyles.logo]}>
            <Image source={require('../assets/logo-white-s.png')} />
          </View>
          <View style={{flex: 1,}}>
            <View>
              <Button
                title="VIEW DEMO"
                color="#FF5722"
                onPress={this.onPressLogin}
                accessibilityLabel="Login"
                buttonStyle={[NStyles.btn,NStyles.demobtn]}
              />
            </View>
            <View>
              <Text style={NStyles.text}>Already have an account?</Text>
            </View>
            <View>
              <Button
                title="LOG IN"
                color="#fff"
                onPress={this.onPressLogin}
                accessibilityLabel="Login"
                buttonStyle={NStyles.btn}
              />
            </View>
          </View>
        </View>
        <View style={NStyles.footer}>
          <Text style={NStyles.footerText}>By signing in you agree to our</Text>
          <TouchableHighlight onPress={this._onTermsPress}>
            <Text style={[NStyles.footerText,{textDecorationLine: 'underline'}]}>Terms of Use</Text>
          </TouchableHighlight>
          <Text style={[NStyles.footerText]}> and </Text>
          <TouchableHighlight onPress={this._onPrivacyPress}>
            <Text style={[NStyles.footerText,{textDecorationLine: 'underline'}]}>Privacy Policy</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
