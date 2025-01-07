import React from 'react';
import Form from '../layouts/Form';
import TaskBoard from '../layouts/TaskBoard';

const Main = () => {
    return (
        <div className='flex flex-col gap-16 items-center h-screen bg-my-gray-600'>
            <Form />
            <TaskBoard />
        </div>
    );
};

export default Main;