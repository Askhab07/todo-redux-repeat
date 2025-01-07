import React from 'react';
import { IButtonProps } from '../types/Button.types';
import plus from '../assets/icons/plus.svg';

const Button: React.FC<IButtonProps> = ({children}) => {
    return (
        <div className='flex justify-center items-center gap-2 w-[125px] h-[52px] bg-my-blue-200 rounded-lg font-bold text-sm text-white cursor-pointer'>
            {children}
            <img src={plus} alt="" />
        </div>
    );
};

export default Button;