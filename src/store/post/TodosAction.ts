import { createAsyncThunk } from '@reduxjs/toolkit'

export interface ITodo {
  _id: string
  title: string
  completed: boolean
  created_at: number
}

export const getTodo = createAsyncThunk(
    'todos/getTodo',
    async (): Promise<{ todos: ITodo[] }> => {
      const response = await fetch('https://todo-server-taj0.onrender.com/todos')
      const data: ITodo[] = await response.json()
      return { todos: data }
    }
  )