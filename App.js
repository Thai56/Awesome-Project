import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Todos from './components/Todos';
import GifContainer from './components/GifContainer';
import AddGif from './components/AddGif';
import SaveGif from './components/SaveGif';
import SavedGifs from './components/SavedGifs';

export default class App extends React.Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="todos"
            component={Todos}
            title="Todos"
            initial
          />
          <Scene
            key="gif"
            component={GifContainer}
            title="Gifs Heyah"
          />
          <Scene
            key="single"
            component={AddGif}
            title="Your chosen gif"
          />
          <Scene
            key="saveGif"
            component={SaveGif}
            title="Save Gif"
          />

          <Scene
            key="showGifs"
            component={SavedGifs}
            title="Your Gifs"
          />
      </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
});
