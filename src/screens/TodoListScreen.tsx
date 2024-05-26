import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';
import {TodoContext} from '../store/TodoContext';

const TodoList = () => {
  const {state, dispatch} = useContext(TodoContext);
  const [task, setTask] = useState('');
  const [editing, setEditing] = useState(null);

  const handleAdd = () => {
    if (task.trim()) {
      if (editing) {
        dispatch({type: 'EDIT_TODO', payload: {id: editing, text: task}});
        setEditing(null);
      } else {
        dispatch({
          type: 'ADD_TODO',
          payload: {id: Date.now().toString(), text: task},
        });
      }
      setTask('');
    }
  };

  const handleEdit = todo => {
    setTask(todo.text);
    setEditing(todo.id);
  };

  const handleDelete = id => {
    dispatch({type: 'DELETE_TODO', payload: id});
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder="Enter a task"
      />
      <Button title={editing ? 'Edit Task' : 'Add Task'} onPress={handleAdd} />
      <FlatList
        data={state.todos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.todo}>
            <Text>{item.text}</Text>
            <Button title="Edit" onPress={() => handleEdit(item)} />
            <Button title="Delete" onPress={() => handleDelete(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  todo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
});

export default TodoList;
