
import React from 'react';
import { View, Button, Text, Image, ScrollView } from 'react-native';
import { ImgPerfil, NomeUser } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Page1 = ({ navigation }) => (
  <View 
  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
  >
    <Text>Home</Text>
    <Image 
      style={{width: 350, height: 250}}
      source={{uri: 'https://images7.alphacoders.com/407/407469.jpg'}}/>
  </View>
);

Page1.navigationOptions = {
  tabBarIcon: <Icon name="home" size={30} color="#000000" />
}

export default Page1;