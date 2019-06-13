import React, { Component } from 'react';

import { View, Text, Image, ScrollView } from 'react-native';
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
        header: null,
        headerVisible: false,
        headerMode: 'none'
    }
  render() {
    return <ScrollView><View>
      <View
      style={{display: 'flex', flexDirection: 'row'}}>
        <Image 
          style={{
            width: 50, 
            height: 50, 
            borderRadius:500, 
            borderWidth: 2,
            borderColor: 'red',
            marginTop: 15
          }} 
          source={{uri: this.state.data.avatar_url}}/>

        <Text style={{marginTop: 34, marginLeft: 20, color: 'black'}}>{this.state.data.login}</Text>
      </View>
      <View style={{marginTop: 10}}>
      <Image 
          style={{
            width: 360, 
            height: 250
          }} 
          source={{uri: this.state.data.avatar_url}}/>
      </View>
      <View
      style={{display: 'flex', flexDirection: 'row'}}>
        <Image 
          style={{
            width: 50, 
            height: 50, 
            borderRadius:500, 
            borderWidth: 2,
            borderColor: 'red',
            marginTop: 15
          }} 
          source={{uri: this.state.data.avatar_url}}/>

        <Text style={{marginTop: 34, marginLeft: 20, color: 'black'}}>{this.state.data.login}</Text>
      </View>
      <View style={{marginTop: 10}}>
      <Image 
          style={{
            width: 360, 
            height: 250
          }} 
          source={{uri: this.state.data.avatar_url}}/>
      </View>
      <View
      style={{display: 'flex', flexDirection: 'row'}}>
        <Image 
          style={{
            width: 50, 
            height: 50, 
            borderRadius:500, 
            borderWidth: 2,
            borderColor: 'red',
            marginTop: 15
          }} 
          source={{uri: this.state.data.avatar_url}}/>

        <Text style={{marginTop: 34, marginLeft: 20, color: 'black'}}>{this.state.data.login}</Text>
      </View>
      <View style={{marginTop: 10}}>
      <Image 
          style={{
            width: 360, 
            height: 250
          }} 
          source={{uri: this.state.data.avatar_url}}/>
      </View>
      </View>
      </ScrollView>
      ;
  }
}

