import React, { Component } from 'react';

import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, 
  Header, 
  Left, Right, Body, Title, Thumbnail } from 'native-base';
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
    tabBarIcon: <Icon name="home" size={28} color="#000000" />
  }

  render() {
    return <ScrollView><View>
      <Header androidStatusBarColor="#069" style={styles.header} hasTabs>
      <Left>
      <TouchableOpacity>

        <Icon name="camera" size={28} color="#000000" />
        
      </TouchableOpacity>
      </Left>
      <Body>

          <Title style={{color: 'black'}}>Instagram</Title>

      </Body>

      <Right>
      <TouchableOpacity>

        <Icon name="location-arrow" size={30} color="#000000" />
        
      </TouchableOpacity>
      </Right>
    </Header>

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

const styles = StyleSheet.create({
  header: { 
    backgroundColor: "rgba(0,0,0,0.2)",
  }
});

