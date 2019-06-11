import React, { Component } from 'react';

import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import { Container } from './styles';

export default class Home extends Component {
    static navigationOptions = {
        tabBarIcon: <Icon name="home" size={30} color="#000000" />
    }
  render() {
    return <View><Text>Home</Text></View>;
  }
}

