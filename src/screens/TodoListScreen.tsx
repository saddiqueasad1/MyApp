import React from 'react';
import {View, StyleSheet} from 'react-native';
import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList';

const TodoListScreen = () => {
  return (
    <View style={styles.container}>
      <AddTodoForm />
      <TodoList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default TodoListScreen;
