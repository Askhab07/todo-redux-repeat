import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITodo } from '../../types/ITodo';
import { getTodosRoute } from '../../constants/constants';
import axios from 'axios';

export const getTodo = createAsyncThunk(
  'todos/getTodo',
  async (): Promise<{ todos: ITodo[] }> => {
    const response = await axios.get(getTodosRoute());
    return {todos: response.data};
  }
);
