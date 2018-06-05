import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { Button, Badge } from 'native-base';

const btnStyle = {
  width: '100%',
  height: 24,
  paddingLeft: 5,
};

export default class Todo extends React.PureComponent {
  render() {
    const { todo, nextTodo } = this.props;
    return(
      <View style={styles.containerStyle}>
        <Text style={{ paddingTop: 2, paddingLeft: 5, marginBottom: 5 }}>{todo.title}</Text>
        <View>
          {
            todo.status !== 'incomplete'
            &&
            <Previous
              nextTodo={nextTodo}
              id={todo.todoId}
            />
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

function Previous({ id, nextTodo }) {
  return (
    <Button
      style={styles.previous}
      onPress={() => nextTodo(id, 1)}
    >
      <Text>
        Previous
      </Text>
    </Button>
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
    <Button
      style={styles.next}
      onPress={() => nextTodo(todo.todoId)}
    >
      <Text>
        {text}
      </Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'lightblue',
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 8,
  },
  previous: {
    ...btnStyle,
    ...{ backgroundColor: 'yellow'},
  },
  next: {
    ...btnStyle,
    ...{ backgroundColor: 'green' },
  },
});
