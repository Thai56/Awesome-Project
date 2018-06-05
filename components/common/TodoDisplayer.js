import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Todo from './Todo';

export default function TodoDisplayer({ todos, title, nextTodo }) {
  return (
    <View style={styles.todoWrapper}>
      <Text style={styles.headerStyle}>
        {title}
      </Text>
      {todos.map((todo, i) =>
        <Todo
          key={i}
          todo={todo}
          nextTodo={nextTodo}
        />)}
    </View>
  );
}

const styles = StyleSheet.create({
  todoWrapper: {
    height: '100%',
    flex: 2,
    borderWidth: 1,
    borderColor: '#e6e6e6',
  },
  headerStyle: {
    marginBottom: 20,
    fontSize: 15,
    fontWeight: '900',
  },
});
