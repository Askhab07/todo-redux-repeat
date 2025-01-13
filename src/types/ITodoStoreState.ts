import { ITodo } from './ITodo';

export interface ITodosStoreState {
  todos: ITodo[];
  isLoading: boolean;
}
