import React from 'react';
import Form from '../components/Form';
import TaskBoard from '../components/TaskBoard';

const Main = () => {
    return (
        <div className='h-full min-h-screen pb-10 flex flex-col gap-16 items-center bg-my-gray-600'>
            <Form />
            <TaskBoard />
        </div>
    );
};

export default Main;