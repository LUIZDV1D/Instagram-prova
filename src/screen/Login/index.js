import React, { Component } from 'react';

import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import firebase from 'react-native-firebase';

// import { Container } from './styles';

export default class Login extends Component {

  static navigationOptions = {
    header: null,
    headerMode: 'none',
    headerVisible: false
  }

  state = {
    email: '',
    password: '',
    isAuthenticated: false,
    logado: ''
  }

  login = async () => {
    const { email, password } = this.state;

    try {
      const user = await firebase.auth()
      .signInWithEmailAndPassword(email, password);

      this.setState({ isAuthenticated: true, logado: 'logado' })
      await AsyncStorage.setItem('Login', 'true');

      if (this.state.isAuthenticated) {
        this.props.navigation.navigate('Menu')
      }

    } catch (err) {
      console.log(err) 
    }
  }

  async componentDidMount() {
    let log = await AsyncStorage.getItem('Login');

    if (log === 'true') {
      this.props.navigation.navigate('Menu')
    }
  }


  render() {
    return <View 
    style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      padding: 20,
      backgroundColor: '#333', }}>


      <Text style={{fontSize: 30, marginBottom: 20, color: 'white', fontWeight: 'bold'}}>Entrar na sua conta</Text>


        <TextInput 
        style={{ 
          height: 45, 
          backgroundColor: '#FFF', 
          alignSelf: 'stretch', 
          borderColor: '#EEE', 
          paddingHorizontal: 20,
          marginBottom: 10 }}
          placeholder="Digite seu email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />

        <TextInput 
        secureTextEntry={true}
          style={{ 
            height: 45, backgroundColor: '#FFF', alignSelf: 'stretch', borderColor: '#EEE', 
            paddingHorizontal: 20 }}

          placeholder="Digite sua senha"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />

        <TouchableOpacity onPress={this.login}
        style={{ 
          height: 45, 
          backgroundColor: '#069', 
          alignSelf: 'stretch', 
          paddingHorizontal: 20,
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center' }}>

          <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Entrar</Text>

        </TouchableOpacity>

          <Text>{this.state.logado}</Text>
      </View>
      ;
  }
}



