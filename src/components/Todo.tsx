import React, { useState } from 'react';
import remove from '../assets/icons/delete.svg';
import { ITodo } from '../types/ITodo';

interface ITodoProps {
  todo: ITodo;
}

const Todo: React.FC<ITodoProps> = ({ todo }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const formattedTime = formatRelativeTime(Number(todo.created_at));

  return (
    <div className="w-[736px] h-[72px] p-4 flex justify-between items-start bg-my-gray-500 rounded-lg">
      <input
        className="mt-1 ml-1 appearance-none before:content-[''] before:block before:bg-[url('/src/assets/icons/checkbox.svg')] before:w-[18px] before:h-[18px] checked:before:content-[''] checked:before:block checked:before:bg-[url('/src/assets/icons/checkbox1.svg')] checked:before:w-[18px] checked:before:h-[18px]"
        type="checkbox"
        name=""
        id=""
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label
        className={`w-[632px] h-10 text-gray-100 text-sm ${
          isChecked ? 'line-through text-my-gray-300' : ''
        }`}
        htmlFor=""
      >
        {todo.title}{' '}
        <span
          className={`text-my-gray-300 text-[8px] ${isChecked ? 'hidden' : ''}`}
        >
          {formattedTime}
        </span>
      </label>
      <button className="mt-[5px] mr-[5px]">
        <img src={remove} alt="" />
      </button>
    </div>
  );
};

const formatRelativeTime = (timestamp: number) => {
  const now = Date.now();
  const diff = Math.floor((now - timestamp) / 1000);

  if (diff < 60) {
    return `${diff} секунд назад`;
  } else if (diff < 3600) {
    const minutes = Math.floor(diff / 60);
    return `${minutes} минут назад`;
  } else if (diff < 86400) {
    const hours = Math.floor(diff / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    return `${hours} час${hours > 1 ? 'а' : ''} ${minutes} минут назад`;
  } else {
    const days = Math.floor(diff / 86400);
    return `${days} дн${days > 1 ? 'я' : 'ей'} назад`;
  }
};

export default Todo;
