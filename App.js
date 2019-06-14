import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer, getActiveChildNavigationOptions } from 'react-navigation';
import MenuScreen from './src/screen/Menu';
import LoginScreen from './src/screen/Login';

const AppNatigator = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
   Menu: {
    screen: MenuScreen,
    navigationOptions: () => ({
        header: null
    })
  }
},);

export default createAppContainer(AppNatigator);