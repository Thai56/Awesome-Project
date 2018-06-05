import React from 'react';
import { WebView, Text, View } from 'react-native';
import { Container, Card, CardItem, H1 } from 'native-base';

function UrlCard({ gif }) {
  const { gif_url, gif_name } = gif;
 return (
   <Container>
      <H1 style={{ alignSelf: 'center', fontWeight: 'bold'  }}>{gif_name}</H1>
      <View style={{ height: 200, flex: 1 }}>
         <WebView
           source={{ uri: gif_url }}
           style={{ marginTop: 20 }}
         />
       </View>
   </Container>
 );
}

export default UrlCard;
