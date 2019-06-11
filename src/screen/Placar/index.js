import React, { Component } from 'react';

import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import { Container } from './styles';

export default class Placar extends Component {
    static navigationOptions = {
        tabBarIcon: <Icon name="align-justify" size={30} color="#000000" />
    }
  render() {
    return <View><Text>Placar</Text></View>;
  }
}
