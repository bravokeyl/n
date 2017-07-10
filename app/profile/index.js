import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import NStyles from './styles';

class NProfile extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.props.navigation.navigate('Logs');
  }
  render() {
    const list = [
      {
        title: 'About',
        icon: 'apps',
        style: {
          borderBottomWidth: 1,
        }
      },
      {
        title: 'Support',
        icon: 'chat',
        style: {
          borderBottomWidth: 1,
        }
      },
      {
        title: 'App Version',
        icon: 'assessment',
        style: {
          borderBottomWidth: 1,
        }
      },
      {
        title: 'Terms of service',
        icon: 'info',
        style: {
          borderBottomWidth: 1,
        }
      },
      {
        title: 'Privacy policy',
        icon: 'lock',
        style: {
          borderBottomWidth: 0,
        }
      },
    ];
    return(
      <ScrollView>
        <View style={NStyles.container}>
        <View style={NStyles.topHeader}>
          <Icon name="arrow-left" size={16} color="#fff" onPress={this.handleClick} />
          <Text style={NStyles.topHeaderText}>Account</Text>
        </View>
        <View style={NStyles.card}>
          <View style={NStyles.info}>
            <View style={NStyles.avatarWrap}>
              <Image style={NStyles.avatar} source={require("../assets/avatar.jpg")} />
            </View>
            <View style={NStyles.accountInfo}>
              <Text style={NStyles.name}>Veera Bhadra Reddy</Text>
              <Text style={NStyles.email}>veerabhadra.reddy@nuevo-sol.com</Text>
              <Text style={NStyles.role}>Product Engineer</Text>
            </View>
          </View>
        </View>
        <Text style={NStyles.subHeader}>ABOUT</Text>
        <View style={NStyles.card}>
          <Text>
            Convenient way to plug this in into other components that rely on bitmap images rather than scalable vector icons.
          </Text>
        </View>
        <Text style={NStyles.subHeader}>INFO</Text>
        <View style={[NStyles.card,{paddingTop: 0}]}>
          <List containerStyle={NStyles.listContainer}>
            {
              list.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{name: item.icon}}
                  style={[NStyles.listItem, item.style]}
                />
              ))
            }
          </List>
        </View>
        <View style={[NStyles.card,{marginBottom: 16,}]}>
          <Text style={NStyles.signout}>Sign out</Text>
        </View>

      </View>
      </ScrollView>
    )
  }

}
export default NProfile;
