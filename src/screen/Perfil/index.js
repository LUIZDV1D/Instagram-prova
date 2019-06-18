import React, { Component } from 'react';

import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, AsyncStorage } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import { Container, 
  Header, 
  Left, Right, Body, Title, Thumbnail } from 'native-base';

// import { Container } from './styles';

export default class Perfil extends Component {

  state = {
    retorno: [],
    counts: [],
    publicacoes: [],
    resolucao: false
  }

  async componentDidMount() {
    await fetch('https://api.instagram.com/v1/users/self/?access_token=4583068599.3d8733d.fc26a832197c4fe592f8f8db9e50a86e')
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState({
        retorno: data.data,
        counts: data.data.counts
      })
    })

    await fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=4583068599.3d8733d.fc26a832197c4fe592f8f8db9e50a86e')
    .then(respo => {
      return respo.json();
    })
    .then(publicacoes => {
        publicacoes.data.map(value => {
          this.setState({
            publicacoes: [
              ... this.state.publicacoes,
              value.images.low_resolution.url
            ]
        })
        })
    })
  }

  mostraPublicacoesList = async () => {
    await fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=4583068599.3d8733d.fc26a832197c4fe592f8f8db9e50a86e')
    .then(respo => {
      return respo.json();
    })
    .then(publicacoes => {
        publicacoes.data.map(value => {
          this.setState({
            publicacoes: [
              ... this.state.publicacoes,
              value.images.low_resolution.url
            ]
        })
        })
    })
  }

  trocaResolucao = () => {
    this.setState({ resolucao: true })
  }

  trocaResolucaoMini = () => {
    this.setState({ resolucao: false })
  }

  logOut = async () =>{
    await AsyncStorage.removeItem('Login');
    this.props.navigation.navigate('Login');
  }

    static navigationOptions = {
        tabBarIcon: <Icon name="user" size={28} color="#000000" />
    }
  render() {
    return <ScrollView><View>
      <Header androidStatusBarColor="#069" style={styles.header} hasTabs>
      <Body>
       <Title style={{color: 'black'}}>
          {this.state.retorno.username}
          <Icon name="angle-down" size={18} color="#000000" />
        </Title>
      </Body>

      <Right style={{paddingHorizontal: 5}}>
      <TouchableOpacity onPressIn={this.logOut} style={{marginRight: 8}}>
        <Icon name="sign-out" size={30} color="#000000" />
      </TouchableOpacity>

      <TouchableOpacity style={{marginRight: 8}}>
        <Icon name="history" size={30} color="#000000" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Icon name="bars" size={30} color="#000000" />
      </TouchableOpacity>
      </Right>
    </Header>

        <View
          style={{display: 'flex', flexDirection: 'row'}}>
          <Image 
            style={{
              width: 95, 
              height: 95, 
              borderRadius:500, 
              borderWidth: 2,
              marginTop: 30,
              marginLeft: 20
            }} 
            source={{uri: this.state.retorno.profile_picture}}/>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginLeft: 10,
                marginTop: 50
              }}
            >
              
              <View>
              <Text
                style={{
                  color: 'black',
                  marginLeft: 22
                }}
              >
              {this.state.counts.media}
              </Text>
              <Text>Publicaç...</Text>
              </View>
              
              

              <View style={{marginLeft: 15}}>
              <Text
                style={{
                  color: 'black',
                  marginLeft: 23
                }}
              >
               {this.state.counts.followed_by}
              </Text>
              <Text>Seguidores</Text>
              </View>



              <View style={{marginLeft: 15}}>
              <Text
                style={{
                  color: 'black',
                  marginLeft: 18
                }}
              >
                {this.state.counts.follows}
              </Text>
              <Text>Seguindo</Text>
              </View>
              
            </View>
      </View>

      <View style={{display: 'flex', flexDirection: 'column', marginTop: 20}}>
        <Text style={{ color: 'black', marginLeft: 23 }}>
        {this.state.retorno.full_name}
        </Text>
        <Text style={{ color: 'black', marginLeft: 23 }}>
          {this.state.retorno.bio}
        </Text>
      </View>

      <View 
        style={{
          display:'flex', flexDirection: 'row',
          marginTop: 50, borderWidth: 0.5, borderColor: 'gray', padding: 5
          }}>
      <TouchableOpacity style={{marginLeft: 40}}
        onPressIn={this.trocaResolucaoMini}
      >
        <Icon name="table" size={35} color="#000000" />
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft: 90}}
        onPressIn={this.trocaResolucao}>
        <Icon name="list" size={35} color="#000000" />
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft: 80}}>
        <Icon name="tags" size={35} color="#000000" />
      </TouchableOpacity>
      </View>

      <View style={{ alignSelf: 'stretch', width: '100%', flexDirection: 'row', flexWrap: 'wrap'}}>
          {this.state.publicacoes.map((publi, k) => {
            return <Image key={k}
                    style={{
                      height: this.state.resolucao ? 400 : 120, 
                      width: this.state.resolucao ? '100%' : 120}} 

                    source={ {uri: publi }} />
          })}
      </View>

      </View>

      </ScrollView>;
  }
}

const styles = StyleSheet.create({
  header: { 
    backgroundColor: "rgba(0,0,0,0.2)",
  }
});
