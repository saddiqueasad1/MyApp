import {createAction} from '@reduxjs/toolkit';
import {Todo} from '../../types/todoTypes';

export const addTodo = createAction<Todo>('todos/add');
export const editTodo = createAction<Todo>('todos/edit');
export const deleteTodo = createAction<number>('todos/delete');
