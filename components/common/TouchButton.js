import React from 'react';
import {
  Text,
  TouchableHighlight,
} from 'react-native';

const TouchButton = ({ onPress }) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={{
        height: 40,
        padding: 10,
        margin: 20,
        backgroundColor: '#e6e6e6', 
      }}>
      <Text style={{ textAlign: 'center'
  }}>
      Delete
    </Text>
  </TouchableHighlight> 
  );
};

export default TouchButton;
