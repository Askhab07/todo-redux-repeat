import React, { useState } from 'react';
import Button from './button/Button';
import Input from './Input';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { createTodo } from '../store/todo/TodosAction';;

const Form = () => {

  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();
  
  const handleAddTodo = async () => {
    if (title.trim()) {
      await dispatch(createTodo({ title, completed: false, created_at: Date.now() }));
      setTitle('');
    }
  };

  return (
    <div className="flex justify-center gap-2 -mt-7">
      <Input title={title} setTitle={setTitle} />
      <Button onClick={handleAddTodo}>Добавить</Button>
    </div>
  );
};

export default Form;
