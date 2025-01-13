export interface ITodo {
  _id: string;
  title: string;
  completed: boolean;
  created_at: number;
  isLoading?: boolean;
}

export interface ICreateTodo {
  title: string;
  completed: boolean;
  created_at: number;
}
