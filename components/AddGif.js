import React from 'react';
import {
  View,
  Text,
  WebView,
  TouchableHighlight,
} from 'react-native';
import axios from 'axios' 
import { Actions } from 'react-native-router-flux';

const serverURL = 'http://localhost:8021';
const guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
};

export default class AddGif extends React.Component {
  navToSave = () => Actions.saveGif({ gif: this.props.gif });

  render() {
    return (
      <View>
        <Text style={{
          fontSize: 50,
          fontWeight: '900',
          color: 'red',
          alignSelf: 'center',
        }}>SAVE GIF</Text>
        <View style={{ height: 200, width: '100%' }}>
          <WebView
            source={{ uri: this.props.gif.embed_url }}
            style={{ marginTop: 20 }}
          />
        </View>
        <TouchableHighlight
          style={{ backgroundColor: 'red', height: 40, width: '100%' }}
          onPress={this.navToSave}
        >
          <Text style={{ alignSelf: 'center', color: '#e6e6e6', fontSize: 24 }}>Save Gif</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
