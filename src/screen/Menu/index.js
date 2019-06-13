import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screen/Home';
import PerfilScreen from './src/screen/Perfil';


    const AppNatigator = createBottomTabNavigator({
      Home: {
        screen: HomeScreen
      },
       Perfil: {
        screen: PerfilScreen
      },
    });
  
    export default createAppContainer(AppNatigator);
  