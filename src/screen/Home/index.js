import React, { Component } from 'react';

import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import { Container } from './styles';

export default class Home extends Component {


  state = {
    data: []
  }

  async componentDidMount() {
    await fetch('https://api.github.com/users/LUIZDV1D')
    .then(response => {
      return response.json() 
    })
    .then(data => {
      this.setState({
        data
      })
    })
  }

    static navigationOptions = {
        tabBarIcon: <Icon name="home" size={30} color="#000000" />
    }
  render() {
    return <View><Text>{JSON.stringify(this.state.data)}</Text></View>;
  }
}

