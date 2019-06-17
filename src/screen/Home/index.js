import React, { Component } from 'react';

import {RefreshControl , 
  Modal, View, Text, Image, 
  ScrollView, StyleSheet, TouchableOpacity, AsyncStorage, FlatList, Platform, window} from 'react-native';

import { Container, 
  Header, 
  Left, Right, Body, Title, Thumbnail } from 'native-base';
  import Icon from 'react-native-vector-icons/FontAwesome';


export default class Home extends Component {
  
  
  state = {
    data: [],
    modalVisible: false,
  }

  async componentDidMount() {
    try {
      await fetch(
        'https://api.instagram.com/v1/users/self/?access_token=4583068599.3d8733d.fc26a832197c4fe592f8f8db9e50a86e',
      )
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({ data: data })
      })
    }catch(error) {
      console.log(error)
    }
  }


  setModalVisible = () => {
    this.setState({modalVisible: true});
  }

  setModalInvisible = () => {
    this.setState({modalVisible: false});
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
  
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View>
            <Image 
            style={{width: 300, height: 250, borderRadius: 50, borderColor: 'red'}} 
            source={{ uri: this.state.imageUri }}/>
              <TouchableOpacity
              style={{ 
                height: 45, 
                backgroundColor: '#069', 
                paddingHorizontal: 20,
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center' }}
                onPress={this.setModalInvisible}>
                <Text style={{color: 'white'}}>Sair</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

      <View
      style={{display: 'flex', flexDirection: 'row'}}>

        <Text>{JSON.stringify(this.state.data.data.username)}</Text>

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

