import React from 'react';
import remove from '../assets/icons/delete.svg';
import { ITodo } from '../types/ITodo';
import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';
import { completedTodo, deleteTodo } from '../store/todo/TodosAction';
import { useAppDispatch } from '../hooks/useAppDispatch';
import IsLoading from './IsLoading';


interface ITodoProps {
  todo: ITodo;
}

const Todo: React.FC<ITodoProps> = ({ todo }) => {

  const dispatch = useAppDispatch();


  const handleCheckboxChange = () => {
    dispatch(completedTodo({ _id: todo._id, completed: !todo.completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo._id))
  }
  
  const createdTime = todo.created_at
    ? formatDistanceToNow(new Date(Number(todo.created_at)), { addSuffix: true, locale: ru })
    : 'Некорректная дата';
  
  return (
    <div className="w-[736px] h-[72px] p-4 flex justify-between items-start bg-my-gray-500 rounded-lg">
      <input
        className="mt-1 ml-1 appearance-none before:content-[''] before:block before:bg-[url('/src/assets/icons/checkbox.svg')] before:w-[18px] before:h-[18px] checked:before:content-[''] checked:before:block checked:before:bg-[url('/src/assets/icons/checkbox1.svg')] checked:before:w-[18px] checked:before:h-[18px]"
        type="checkbox"
        name=""
        id=""
        checked={todo.completed}
        onChange={handleCheckboxChange}
      />
      <label
        className={`w-[632px] h-10 text-gray-100 text-sm ${
          todo.completed ? 'line-through text-my-gray-300' : ''
        }`}
        htmlFor=""
      >
        {todo.title}{' '}
        <span
          className={`text-my-gray-300 text-[8px] ${todo.completed ? 'hidden' : ''}`}
        >
          {createdTime}
        </span>
      </label>
      <button className="mt-[5px] mr-[5px]" onClick={handleDelete}>
         {todo.isLoading ? <IsLoading color='#808080' /> : <img src={remove} alt="" />}
      </button>
    </div>
  );
};

export default Todo;
