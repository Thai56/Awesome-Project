import React from 'react';
import { WebView, Text, View, StyleSheet } from 'react-native';
import { Container, H1 } from 'native-base';

function UrlCard({ gif }) {
  const { gif_url, gif_name } = gif;
 return (
   <Container>
      <H1 style={styles.titleStyle}>{gif_name}</H1>
      <View style={styles.wrapper}>
         <WebView
           source={{ uri: gif_url }}
           style={{ marginTop: 20 }}
         />
       </View>
   </Container>
 );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
    flex: 1,
  },
  titleStyle: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

export default UrlCard;
