import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './src/screen/Login';

export default class App extends Component {

  render() {
    return <LoginScreen />
  }
}