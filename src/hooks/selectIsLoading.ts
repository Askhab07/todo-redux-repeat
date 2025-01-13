import { RootState } from '../store/index';

export const selectIsLoading = (state: RootState) => state.todos.isLoading;
