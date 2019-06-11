import React from 'react';
import { View, Button, Text, Image, ScrollView } from 'react-native';
import { ImgPerfil, NomeUser } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';


const Page1 = ({ navigation }) => (
    <ScrollView>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
        <ImgPerfil
          source={{uri: 'https://images7.alphacoders.com/321/thumb-1920-321911.jpg'}}
        />
        <Text>Home</Text>
        <Image
          style={{width: 340, height: 340}}
          source={{uri: 'https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-Wallpapers-Full-HD-Download.jpg'}}
        />
        <Text>Home</Text>
        <Image
          style={{width: 340, height: 340}}
          source={{uri: 'https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-Wallpapers-Full-HD-Download.jpg'}}
        />
        <Text>Home</Text>
        <Image
          style={{width: 340, height: 340}}
          source={{uri: 'https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-Wallpapers-Full-HD-Download.jpg'}}
        />
        <Text>Home</Text>
        <Image
          style={{width: 340, height: 340}}
          source={{uri: 'https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-Wallpapers-Full-HD-Download.jpg'}}
        />
        <Text>Home</Text>
        <Image
          style={{width: 340, height: 340}}
          source={{uri: 'https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-Wallpapers-Full-HD-Download.jpg'}}
        />
        <Text>Home</Text>
        <Image
          style={{width: 340, height: 340}}
          source={{uri: 'https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-Wallpapers-Full-HD-Download.jpg'}}
        />
        <Text>Home</Text>
        <Image
          style={{width: 340, height: 340}}
          source={{uri: 'https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-Wallpapers-Full-HD-Download.jpg'}}
        />
        <Text>Home</Text>
        <Image
          style={{width: 340, height: 340}}
          source={{uri: 'https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-Wallpapers-Full-HD-Download.jpg'}}
        />
        <Text>Home</Text>
        <Image
          style={{width: 340, height: 340}}
          source={{uri: 'https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-Wallpapers-Full-HD-Download.jpg'}}
        />
        <Text>Home</Text>
    <Image
          style={{width: 340, height: 340}}
          source={{uri: 'https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-Wallpapers-Full-HD-Download.jpg'}}
        />
        
  </View>
  </ScrollView>
);

Page1.navigationOptions = {
  tabBarIcon: <Icon name="home" size={30} color="#000000" />
}

export default Page1;