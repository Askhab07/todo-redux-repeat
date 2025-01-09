import React, { useEffect, useState } from 'react';
import NotTasks from '../components/NotTasks';
import Todo from '../components/Todo';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector'; 
import { getTodo } from '../store/todo/TodosAction';

const TaskBoard = () => {
  const todos = useAppSelector(state => state.todos.todos);
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(false);

  useEffect(() => {
    dispatch(getTodo())
  }, [dispatch])

  return (
    <div className="w-[736px] flex flex-col gap-6">
      <div className="flex justify-between">
        <div className="flex gap-2 text-my-blue-100 font-bold text-sm">
          Всего задач
          <span className="flex justify-center items-center w-[25px] h-[19px] rounded-full bg-my-gray-400 text-my-gray-200">
            0
          </span>
        </div>
        <div className="flex gap-2 text-my-purple-100 font-bold text-sm">
          Выполнено
          <span className="flex justify-center items-center w-[25px] h-[19px] rounded-full bg-my-gray-400 text-my-gray-200">
            0
          </span>
        </div>
      </div>
      {active && <NotTasks />}
      <div className='flex flex-col gap-3'>
        {todos.map(todo => <Todo key={todo._id} todo={todo} />)}
      </div>
    </div>
  );
};

export default TaskBoard;
