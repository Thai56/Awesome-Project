import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';


export default class Todo extends React.PureComponent {
  render() {
    const { todo, nextTodo } = this.props;
    return(
      <View>
        <Text>
          {todo.title}
        </Text>
        <View>
          {
            todo.status !== 'incomplete' && <Previous />
          }
          {
            todo.status !== 'complete'
              &&
              <Next
                todo={todo}
                nextTodo={nextTodo}
              />
          }
        </View>
      </View>
    );
  }
}

function Previous() {
  return (
    <TouchableHighlight style={styles.previous}>
      <Text>
        Previous
      </Text>
    </TouchableHighlight>
  );
}

function Next({ todo, nextTodo }) {
  const { status } = todo;
  let text = '';
  if (status === 'incomplete') {
    text = 'in progress';
  } else if (status === 'in progress') {
    text = 'complete';
  } else {
    text = 'N/A';
  }
  return ( 
    <TouchableHighlight 
      style={styles.next}
      onPress={() => nextTodo(todo.todoId)}
    >
      <Text>
        {text}
      </Text>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  previous: {
    backgroundColor: 'yellow',
  },
  next: {
    backgroundColor: 'green',
  },
});
