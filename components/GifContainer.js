import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  WebView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { Button, Spinner } from 'native-base';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { GIF_CONSTANTS }from './constants';

const {
  API_KEY,
  TEST_URL,
  NO_SEARCH_RESULT,
  DEFAULT_SEARCH,
} = GIF_CONSTANTS;

class GifContainer extends React.Component {
  state = {
    gifs: '',
    text: '',
    isFetching: false,
  }
  componentDidMount() {
    this.setState(() => ({ isFetching: true }));
    this.fetchGifs(DEFAULT_SEARCH);
  }

  fetchGifs = (text) => {
    return axios.get(TEST_URL + text)
    .then(data => {
      this.setState(() => ({
        gifs: data.data.data,
      }));
    }).then(() => {
      setTimeout(() => {
        const that = this;
        this.setState.call(that, { isFetching: false });
      }, 1500)
    })
    .catch(err => console.error(err));
  }

  onChangeText = (text) => {
    this.setState(() => ({
      text,
    }));
  }

  onSubmit = () => {
    this.fetchQueryRequest();
  }

  fetchQueryRequest = () => {
    const { text } = this.state;
    const queryText = text.split(' ').join('+');
    this.fetchGifs(queryText);
  }

  render() {
    if(this.state.isFetching) {
      return (
        <View>
          <Spinner color="green" />
        </View>
      );
    }
    return (
      <ScrollView style={{
        backgroundColor: 'black',
      }}>
        <Text
          style={{
            fontSize: 60,
            color: 'red',
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          GIFS HERE
        </Text>
        <SearchInputWrapper
          onSubmit={this.onSubmit}
          onChangeText={this.onChangeText}
        />
        
        <View>
          <Button style={{ flex: 1 }} success onPress={() => Actions.showGifs() }>
            <Text>See your Gifs here</Text>
          </Button>
        </View>
       <View style={styles.gifWrapper}>
          {
            !this.state.gifs.length
            ? <NoResult />
            : this.state.gifs.map((g, i) => {
              return <Gif gif={g} key={i} />
            })
          }
        </View>
     </ScrollView>
    );
  }
}

function SearchInputWrapper({ onChangeText, onSubmit }) {
  return (
    <View style={styles.searchWrapper}>
      <TextInput
        style={styles.searchInput}
        placeholder="search..."
        onChangeText={onChangeText}
      />
      <TouchableHighlight
        style={styles.searchButton}
        onPress={onSubmit}
      >
        <Text>
          Search
        </Text>
      </TouchableHighlight>
    </View>
  );
}

function Gif({ gif }) {
  return(
    <TouchableOpacity
      style={styles.gif}
      onPress={() => Actions.single({ gif: gif })}
    >
      <WebView
        source={{ uri: gif.embed_url }}
        style={{ marginTop: 20 }}
      />
    </TouchableOpacity>
  );
}

function NoResult() {
  return (
    <Text style={styles.noResult}>
      {NO_SEARCH_RESULT}
    </Text>
  );
}

const styles = StyleSheet.create({
  searchButton: {
    backgroundColor: 'blue',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    backgroundColor: 'white',
    flex: 4,
    height: 50,
  },
  searchWrapper: {
    flexDirection: 'row',
  },
  gifWrapper: {
    width: '100%',
    height: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  gif: {
    height: 80,
    width: 110,
  },
  noResult: {
    marginTop: 20,
  }
});
export default GifContainer;
