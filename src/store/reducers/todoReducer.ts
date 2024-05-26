import {createReducer} from '@reduxjs/toolkit';
import {Todo} from '../../types/todoTypes';
import {addTodo, editTodo, deleteTodo} from '../actions/todoActions';

const initialState: Todo[] = [];

const todoReducer = createReducer(initialState, builder => {
  builder
    .addCase(addTodo, (state, action) => {
      state.push(action.payload);
    })
    .addCase(editTodo, (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    })
    .addCase(deleteTodo, (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    });
});

export default todoReducer;
