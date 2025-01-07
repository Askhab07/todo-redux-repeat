import React from 'react';
import clipboard from '../assets/icons/clipboard.svg';

const NotTasks = () => {
    return (
        <div className='h-[222px] flex flex-col justify-center gap-4 items-center rounded-lg border-t-[1px] border-my-gray-400 mt-6'>
            <img src={clipboard} alt="" />
            <h2 className='text-my-gray-300 font-bold'>У вас пока нет добавленных задач</h2>
        </div>
    );
};

export default NotTasks;