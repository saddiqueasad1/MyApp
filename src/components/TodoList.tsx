import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList, StyleSheet, View} from 'react-native';
import {RootState} from '../store/store';
import TodoItem from './TodoItem';
import {Todo} from '../types/todoTypes';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);

  const renderItem = ({item}: {item: Todo}) => <TodoItem todo={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default TodoList;
