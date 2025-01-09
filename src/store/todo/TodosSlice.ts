import { getTodo } from './TodosAction';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from '../../types/ITodo';

import { ITodosStoreState } from '../../types/ITodoStoreState';

const initialState: ITodosStoreState = {
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