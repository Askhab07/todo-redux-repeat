import { ITodo } from './../../types/ITodo';
import { getTodo, createTodo, completedTodo, deleteTodo } from './TodosAction';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ITodosStoreState } from '../../types/ITodoStoreState';

const initialState: ITodosStoreState = {
  todos: [],
  isLoading: false
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getTodo.fulfilled, (state, action: PayloadAction<{todos: ITodo[]}>) => {
      state.todos = action.payload.todos
    })

    .addCase(createTodo.pending, (state) => {
      state.isLoading = true
    })
    .addCase(createTodo.fulfilled, (state, action: PayloadAction<ITodo>) => {
      state.todos.push(action.payload);
      state.isLoading = false
    })

    .addCase(completedTodo.fulfilled, (state, action: PayloadAction<ITodo>) => {
      const index = state.todos.findIndex((todo) => todo._id === action.payload._id);
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    })

    .addCase(deleteTodo.pending, (state, action) => {
      const todo = state.todos.find((todo) => todo._id === action.meta.arg);
      if (todo) {
        todo.isLoading = true;
      }
    })
    .addCase(deleteTodo.fulfilled, (state, action: PayloadAction<{ _id: string }>) => {
      state.todos = state.todos.filter(todo => todo._id !== action.payload._id);
    });
  }
})

export default todosSlice.reducer