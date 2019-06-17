import React, { Component } from 'react';

import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import { Container, 
  Header, 
  Left, Right, Body, Title, Thumbnail } from 'native-base';

// import { Container } from './styles';

export default class Perfil extends Component {

  state = {
    data: [],
    publicacoes: []
  }

  async componentDidMount() {
    await fetch('https://api.instagram.com/v1/users/self/?access_token=4583068599.3d8733d.fc26a832197c4fe592f8f8db9e50a86e')
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({
        data
      })
    })
  }

  mostraPublicacoes = () => {
     fetch('https://api.github.com/users/LUIZDV1D/repos')
    .then(response => {
      return response.json()
    })
    .then(publicacoes => {
      this.setState({
        publicacoes
      })
    })
  }

    static navigationOptions = {
        tabBarIcon: <Icon name="user" size={28} color="#000000" />
    }
  render() {
    return <ScrollView><View>
      <Header androidStatusBarColor="#069" style={styles.header} hasTabs>
      <Left>
      <TouchableOpacity>

        <Icon name="instagram" size={28} color="#000000" />
        
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
          style={{width: 400, height: 45, borderWidth: 1, borderColor: 'gray'}}
        >
        <Text 
            style={{marginTop: 12, marginLeft: 20, color: 'black'}}>
            {this.state.data.data.username}
          </Text>
        </View>

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
            source={{uri: this.state.data.avatar_url}}/>
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
                  marginLeft: 20
                }}
              >
                {this.state.data.public_repos}
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
                {this.state.data.followers}
              </Text>
              <Text>Seguidores</Text>
              </View>



              <View style={{marginLeft: 15}}>
              <Text
                style={{
                  color: 'black',
                  marginLeft: 23
                }}
              >
                {this.state.data.following}
              </Text>
              <Text>Seguindo</Text>
              </View>
              
            </View>
            
      </View>

      <View style={{display: 'flex', flexDirection: 'column', marginTop: 20}}>
        <Text style={{ color: 'black', marginLeft: 23 }}>
          {this.state.data.name}
        </Text>
        <Text style={{ color: 'black', marginLeft: 23 }}>
          {this.state.data.bio}
        </Text>
      </View>

      <View 
        style={{
          display:'flex', justifyContent: 'center', alignItems:'center',
          marginTop: 50, borderWidth: 1, borderColor: 'gray'
          }}>
      <TouchableOpacity onPressIn={this.mostraPublicacoes}>
        <Icon name="image" size={30} color="#000000" />
      </TouchableOpacity>
      </View>
      <View>
      {
          this.state.publicacoes.map((u, i) => {
            return (
              <View key={i} 
              style={{borderWidth: 1, borderColor: 'gray', marginTop: 15}}>
              <Card>
                <Image 
            style={{
              width: 300, 
              height: 250
            }} 
            source={{uri: this.state.data.avatar_url}}/>
                <View>
                  <Text>{u.name}</Text>
                </View>
              </Card>
              </View>
            );
          })
        }
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
