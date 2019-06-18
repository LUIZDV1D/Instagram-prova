import React, { Component } from 'react';

import {RefreshControl , 
  Modal, View, Text, Image, 
  ScrollView, StyleSheet, TouchableOpacity, AsyncStorage, FlatList, Platform, window} from 'react-native';

import { Container, 
  Header, 
  Left, Right, Body, Title, Thumbnail, Content, Card, CardItem } from 'native-base';
  import Icon from 'react-native-vector-icons/FontAwesome';


export default class Home extends Component {
  
  
  state = {
    publicacoes: [],
    likes: [],
    comments: [],
    description: [],
    retorno: [],
    counts: []
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
        publicacoes.data.map((value) => {
          this.setState({
            publicacoes: [
              ... this.state.publicacoes,
              value.images.low_resolution.url
            ],
            likes: [
              ... this.state.likes,
              value.likes.count
            ],
            comments: [
              ... this.state.comments,
              value.comments.count
            ],
            description: [
              ... this.state.description,
              value.caption.text
            ]
          })
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

        <Icon name="instagram" size={30} color="#000000" />
        
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

      {this.state.publicacoes.map((publi, k) => {
            return  <View key={k}>
            <Container>
              <Content>
                <Card>
                  <CardItem header>
                    <Left>
                    <Image 
                  style={{
                    width: 50, 
                    height: 50, 
                    borderRadius:500, 
                    borderWidth: 2,
                  }} 
                  source={{uri: this.state.retorno.profile_picture}}/>
                    </Left>
                      <Text style={{
                        fontSize: 20, marginRight: 140, 
                        marginTop: 4, color: 'black'}}>
                      {this.state.retorno.username}
                      </Text>
                      <Right>
                    <Icon name="ellipsis-v" size={20} color="#000000" />
                    </Right>
                  </CardItem>
                  <CardItem>
                  <Image key={k}
                    style={{
                      height: 400, 
                      width: '100%'}} 

                    source={ {uri: publi }} />
                  </CardItem>
                  <CardItem footer>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    <Icon name="heart" size={15} color="#000000" />
                    <Text 
                    style={{color: 'black', fontSize: 12, marginLeft: 5}}>
                    {this.state.likes[k]} curtidas</Text>
                    

                    <Icon style={{marginLeft: 10}} name="comment" size={15} color="#000000" />
                    <Text 
                    style={{color: 'black', fontSize: 12, marginLeft: 5}}>
                    {this.state.comments[k]} comentários</Text>

                    </View>
                  </CardItem>

                  <Text 
                      style={{color: 'black', marginLeft: 22, marginBottom: 5}}>

                        <Text style={{fontWeight: 'bold'}}>
                        {this.state.retorno.username}
                        </Text>

                         {this.state.description[k]}
                      </Text>

               </Card>
              </Content>
            </Container>
            </View>
          })}

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

