import React from 'react';
import axios from 'axios';
import { View, Text, ScrollView } from 'react-native';
import {
  Container,
  Content,
  Spinner,
  Header } from 'native-base';
import UrlCard from './UrlCard';

import { SERVER_URL } from './constants';

class SavedGifs extends React.Component {
  state = {
    savedGifs: [],
  }
  componentDidMount() {
    axios.get(`${SERVER_URL}/gifs`)
      .then((d) =>  {
        this.setState(() => ({
          savedGifs: d.data,
        }))
      });
  }

  render() {
    if (!this.state.savedGifs.length) {
      return (
        <Content> 
          <Spinner color="green" />
        </Content>
);
    }
    return (
      <ScrollView>
        {
          this.state.savedGifs.map(gif => {
            return ( 
              <UrlCard gif={gif} key={gif.id} />
            );
          })
        }
      </ScrollView>
    );
  }
}

export default SavedGifs;
