import React, { Component } from 'react';
import { View, Text, Image, Platform, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Import Screens */
import NDemo from './demo';
import NLogin from './login';
import NSignUp from './login/signup';
import NDash from './dash';
import NStats from './stats';
import NAdvanced from './advanced';
import NLogs from './logs';
import NProfile from './profile';

const headerStyle = {
  // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

/* StackNavigator */
export const NOutScreens = StackNavigator({
  SignUp: {
    screen: NDemo,
    navigationOptions: {
      title: "Demo",
      header: null,
    }
  },
  SignIn: {
    screen: NLogin,
    navigationOptions: {
      title: "Sign In",
      header: null,
    }
  }
});

/* TabNavigator */
export const NInScreens = TabNavigator(
  {
    Home: {
      screen: NDash,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) =>
          <Icon name="home" size={24} color="#f5511e" />,
      }
    },
    Stats: {
      screen: NStats,
      navigationOptions: {
        tabBarLabel: "Stats",
        tabBarIcon: ({ tintColor }) =>
          <Icon name="bar-chart" size={24} color="#f5511e" />,
      }
    },
    Advanced: {
      screen: NAdvanced,
      navigationOptions: {
        tabBarLabel: "Live",
        tabBarIcon: ({ tintColor }) =>
          <Icon name="tasks" size={24} color="#f5511e" />
      }
    },
    Logs: {
      screen: NLogs,
      navigationOptions: {
        tabBarLabel: "Logs",
        tabBarIcon: ({ tintColor }) =>
          <Icon name="book" size={24} color="#f5511e" />
      }
    },
    Profile: {
      screen: NProfile,
      navigationOptions: {
        tabBarLabel: "Account",
        tabBarVisible: false,
        tabBarIcon: ({ tintColor }) =>
          <Icon name="user" size={24} color="#f5511e"/>
      }
    },
  },
  {
    tabBarPosition: "bottom",
    tabBarOptions: {
      upperCaseLabel: false,
      showIcon: true,
      style: {
        backgroundColor: '#ffffff',
      },
      labelStyle: {
        color: '#333',
        fontSize: 12,
      },
      tabStyle: {
        // width: 20,

      },
      iconStyle: {
      }
    }
  }
);

/* Root Router */
export const NRouter = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: NInScreens,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: NOutScreens,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};
