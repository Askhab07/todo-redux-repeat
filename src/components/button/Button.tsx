import React from 'react';
import { IButtonProps } from './Button.types';
import plus from '../../assets/icons/plus.svg';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../hooks/selectIsLoading';
import IsLoading from '../IsLoading';

const Button: React.FC<IButtonProps> = ({children, onClick}) => {
    const loading = useSelector(selectIsLoading);

    return (
        <div className='flex justify-center items-center gap-2 w-[125px] h-[52px] bg-my-blue-200 rounded-lg font-bold text-sm text-white cursor-pointer' onClick={onClick}>
            {children}
            {loading ? <IsLoading color='#f2f2f2'/> : <img src={plus} alt="" />}
        </div>
    );
};

export default Button;