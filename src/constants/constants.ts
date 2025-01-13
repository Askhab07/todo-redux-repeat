import { BASE_URL } from '../api/url';

export const getTodosRoute = () => `${BASE_URL}/todos`
export const createTodoRoute = () => `${BASE_URL}/todos`
export const completedTodoRoute = (_id: string) => `${BASE_URL}/todos/${_id}`
export const deleteTodoRoute = (_id: string) => `${BASE_URL}/todos/${_id}`