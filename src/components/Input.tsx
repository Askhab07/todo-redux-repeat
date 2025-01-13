import React from 'react';

const Input = ({ title, setTitle }: any) => {
  return (
    <input
      className="w-[603px] h-[54px] px-4 bg-my-gray-500 rounded-lg placeholder:text-my-gray-300 placeholder:font-normal placeholder:text-[16px] text-white outline-none border-[1px] border-my-gray-700 cursor-pointer"
      placeholder="Что вы планируете сделать?"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  );
};

export default Input;
