import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { Button, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Header from './common/Header';
import AddTodo from './common/AddTodo';
import TodoDisplayer from './common/TodoDisplayer';
import { TODO_CONSTANTS, FORM_KEYS } from './constants';

const {
  TODO_ID,
  TITLE,
  TODOS,
  STATUS,
} = TODO_CONSTANTS;

const {
  INCOMPLETE,
  IN_PROGRESS,
  COMPLETE,
} = FORM_KEYS;

export default class Todos extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      todoId: 3,
      todos: [
        {
          todoId: 0,
          title: 'wash dishes',
          status: 'incomplete',
        },
        {
          todoId: 1,
          title: 'laundry',
          status: 'in progress',
        },
        {
          todoId: 2,
          title: 'trash',
          status: 'complete',
        },
      ],
    };
  }

  addTodo = () => {
    const { todoId, title } = this.state;
    const newTodo = {};
    newTodo[TODO_ID] = this.state.todoId++;
    newTodo[TITLE] = this.state.title || 'N/A';
    newTodo[STATUS] = 'incomplete';

    const newState = this.state.todos.slice();
    newState.push(newTodo);

    this.setState(() =>
      ({
        todos: newState,
      }), this.resetState,
    );

  }

  resetState = () => {
    this.setState(({ todoId }) => ({
      todoId: todoId ++,
      title: '',
    }));
  }

  handleChangeText = (text) => {
    this.setState(() => ({ title: text }));
  }

  updateTodo = (id, prev = 0) => {
    let targetIndex;
    const oldState = this.state.todos.slice();
    const target = oldState.filter((obj, i) => {
      if (obj.todoId === id) {
        targetIndex = i;
        return obj;
      }
    })[0];
    const newStatus = prev !== 1 ? this.handleNextStatus(target.status) : this.handlePrevStatus(target.status);
    target[STATUS] = newStatus;
    const head = oldState.slice(0, targetIndex);
    const tail = oldState.slice(targetIndex + 1);
    const newState = [...head.concat(target), ...tail];
    this.setState(() => ({
      todos: newState,
    }));
  }

  handlePrevStatus = (status) => {
    let newStatus;
    switch(status) {
      case INCOMPLETE:
        nextStatus = status;
        break;
      case IN_PROGRESS:
        nextStatus = INCOMPLETE;
        break;
      case COMPLETE:
        nextStatus = IN_PROGRESS;
    }

    return nextStatus;
  }

  handleNextStatus = (status) => {
    let newStatus;
    if (status === INCOMPLETE) {
      newStatus = IN_PROGRESS;
    } else if (status === IN_PROGRESS) {
      newStatus = COMPLETE;
    }
    return newStatus;
  }

  clearAllCompleted = () => {
    const oldState = this.state.todos.slice();
    const newState = oldState.filter(obj => obj.status !== COMPLETE);
    this.setState(() => ({
      todos: newState,
    }));
  }
//  try these render prop with fetch components
//https://hackernoon.com/do-more-with-less-using-render-props-de5bcdfbe74c
  render() {
    const  { todos } = this.state;
    return (
      <View style={styles.containerWrapper}>
        <Text onPress={() => Actions.gif()}>
          Go To Test
        </Text>
        <Header text="To Do App" />
        <AddTodo
          title={this.state.title}
          addTodo={this.addTodo}
          onChangeText={this.handleChangeText}
        />
        <View style={styles.todoContainer}>
          <TodoDisplayer
            title="Backlog"
            todos={todos.filter(t => t.status === 'incomplete')}
            nextTodo={this.updateTodo}
          />
          <TodoDisplayer
            title="In Progress"
            todos={todos.filter(t => t.status === 'in progress')}
            nextTodo={this.updateTodo}
          />
          <TodoDisplayer
            title="Complete"
            todos={todos.filter(t => t.status === 'complete')}
            nextTodo={this.updateTodo}
          />
        </View>
        <Button onPress={this.clearAllCompleted} style={styles.clearCompleted}>
          <Text>Clear Completed</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerWrapper: {
    width: '100%',
    marginTop: 20,
  },
  todoContainer: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clearCompleted: {
    backgroundColor: 'orange',
    width: 80,
    height: 40,
  }
});
