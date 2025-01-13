import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICreateTodo, ITodo } from '../../types/ITodo';
import { getTodosRoute, createTodoRoute, completedTodoRoute, deleteTodoRoute } from '../../constants/constants';
import axios from 'axios';

export const getTodo = createAsyncThunk(
  'todos/getTodo',
  async (): Promise<{ todos: ITodo[] }> => {
    const response = await axios.get(getTodosRoute());
    return {todos: response.data};
  }
);

export const createTodo = createAsyncThunk(
  'todos/createTodo',
  async (newTodo: ICreateTodo): Promise<ITodo> => {
    const response = await axios.post(createTodoRoute(), newTodo);
    return response.data;
  }
);

export const completedTodo = createAsyncThunk(
  'todos/completedTodo',
  async ({ _id, completed }: { _id: string; completed: boolean }): Promise<ITodo> => {
    const response = await axios.patch(completedTodoRoute(_id), { completed });
    return response.data;
  }
);

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (_id: string): Promise<{_id: string}> => {
    await axios.delete(deleteTodoRoute(_id));
    return {_id}
  }
);