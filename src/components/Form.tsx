import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
    return (
        <div className='flex justify-center gap-2 -mt-7'>
            <Input />
            <Button>Добавить</Button>
        </div>
    );
};

export default Form;