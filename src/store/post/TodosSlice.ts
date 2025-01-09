import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getTodo, ITodo } from '../post/TodosAction';

interface ITodosState {
  todos: ITodo[]
}

const initialState: ITodosState = {
  todos: [],
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodo.fulfilled, (state, action: PayloadAction<{todos: ITodo[]}>) => {
      state.todos = action.payload.todos
    })
  }
})

export default todosSlice.reducer