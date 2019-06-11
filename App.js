import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screen/Home';
import PlacarScreen from './src/screen/Placar';
const AppNatigator = createBottomTabNavigator({
     Home: {
       screen: HomeScreen
      },
     Placar: {
      screen: PlacarScreen
    }
  });

  export default createAppContainer(AppNatigator);