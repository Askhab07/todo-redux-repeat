import React, { useState } from 'react';
import remove from '../assets/icons/delete.svg';

interface ITodo {
  _id: string
  title: string
  completed: boolean
  created_at: number
}

const Todo: React.FC<{ todo: ITodo }> = ({ todo }) => {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  };
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
      <label className={`w-[632px] h-10 text-gray-100 text-sm ${isChecked ? 'line-through text-my-gray-300' : ''}`} htmlFor="">
        {todo.title}
        <span className={`text-my-gray-300 text-[8px] ${isChecked ? 'hidden' : ''}`}>5 минут назад</span>
      </label>
      <button className="mt-[5px] mr-[5px]">
        <img src={remove} alt="" />
      </button>
    </div>
  );
};

export default Todo;
