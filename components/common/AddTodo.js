import React from 'react';
import {
  View,
  TextInput,
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native';
import { Button, Spinner } from 'native-base';

export default function AddTodo({ onChangeText, addTodo, title }) {
  return (
    <View style={styles.addTodo}>
      <TextInput
        keyboardType='default'
        style={styles.todoInput}
        placeholder="add todo..."
        onChangeText={onChangeText}
        value={title}
      />
      <Button
        style={styles.buttonStyle}
        onPress={addTodo}
      >
        <Text>
          Add Todo
        </Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  addTodo: {
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  todoInput: {
    height: '100%',
    flex: 3,
  },
  buttonStyle: {
    marginTop: 8,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
//    alignItems: 'center',
//    borderRadius: 15,
//    borderWidth: 2,
//    borderColor: '#e6e6e6',
  },
});
