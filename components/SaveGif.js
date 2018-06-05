import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import axios from 'axios';
import { SERVER_URL } from './constants';
const guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
};
import { Actions } from 'react-native-router-flux';

export default class SaveGif extends React.Component {

  saveGif = () => {
    axios.post(`${SERVER_URL}/gifs`,{
      gif_url: this.props.gif.embed_url,
      id: guid(),
      gif_name: this.state.name, 
    }).then(res => {
      console.log('res ', res);
      this.setState(() =>({ name: '' }), 
      Actions.gif(),
      );
    }); 
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Gif Nickname</Label>
              <Input onChangeText={(name) => this.setState({ name})} />
            </Item>
          </Form>
          <Button block info onPress={this.saveGif}>
            <Text>Save</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
