import { Item, ItemsTypes, ItemsState, TodoListActionTypes } from '../../../types';
import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  todos: [
    {
    id: '1',
    inputTitle: '알고리즘',
    input: '알고리즘 문제 풀기',
    isDone: false,
  },
  {
    id: '2',
    inputTitle: '리액트',
    input: 'Todo list 만들기',
    isDone: true,
  },
  ]
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getTodos: (state, action) => {
      state.todos = action.payload;
    },

    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },

    toggleDone: (state, action) => {
      const newState = state.todos.map((item) => {
        return item.id === action.payload.id
          ? {
              ...item,
              isDone: !item.isDone,
            }
          : item;
      });
      state.todos = newState;
    },

    deleteTodo: (state, action) => {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload.id);
      state.todos = newTodos;
    },

    updateTodo: (state, action) => {
      const newState = state.todos.map((item) => {
        return item.id === action.payload.id
          ? {
              ...item,
              title: action.payload.title,
              content: action.payload.content,
            }
          : item;
      });

      state.todos = newState;
    },
  },
});

export const { getTodos, addTodo, deleteTodo, toggleDone, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
