import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import PerfilScreen from '../Perfil';
import HomeScreen from '../Home';

const AppNatigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
   Perfil: {
    screen: PerfilScreen
  }
}, 
  
);

export default createAppContainer(AppNatigator);