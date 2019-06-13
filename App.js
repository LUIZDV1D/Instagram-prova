import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screen/Home';
import LoginScreen from './src/screen/Login';

const AppNatigator = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
   Home: {
    screen: HomeScreen
  }
}, 
  
);

export default createAppContainer(AppNatigator);