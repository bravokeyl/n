import React, { Component } from 'react';
import { View, Text, Image, Input } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

import NStyles from './styles';
class NLogin extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.onPressLogin = this.onPressLogin.bind(this);
  }
  onPressLogin(){
    let NuevoNavProps = this.props.navigation;
    console.log("Login button pressed", this.state.email,this.state.password, NuevoNavProps);
    NuevoNavProps.navigate('Home');
  }

  render(){
    return(
      <View style={ [NStyles.container, NStyles.loginBg] }>
        <View style={{position:'absolute',top:0,bottom:0,}}>
          <Image source={require('../assets/m.jpg')} />
        </View>
        <View style={{backgroundColor: 'rgba(233, 111, 66, 0.8)'}}>
          <View style={[NStyles.logo]}>
            <Image source={require('../assets/logo-white-s.png')} />
            <View style={{ marginHorizontal: 32}}>
              <FormLabel labelStyle={NStyles.label}>Username</FormLabel>
              <FormInput onChangeText={(email) => this.setState({email})} selectionColor="#fff" inputStyle={NStyles.input} autoCorrect={false}/>
            </View>
            <View style={{ marginHorizontal: 32}}>
              <FormLabel labelStyle={NStyles.label}>Password</FormLabel>
              <FormInput onChangeText={(password) => this.setState({password})} selectionColor="#fff" inputStyle={NStyles.input} secureTextEntry/>
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
      </View>
    )
  }

}
export default NLogin;
