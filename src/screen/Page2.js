import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Page2 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>About</Text>
  </View>
);

Page2.navigationOptions = {
    tabBarIcon: <Icon name="align-justify" size={30} color="#000000" />
}


export default Page2;