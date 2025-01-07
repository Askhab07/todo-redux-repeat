import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

const Form = () => {
    return (
        <div className='flex justify-center gap-2 -mt-7'>
            <Input />
            <Button>Добавить</Button>
        </div>
    );
};

export default Form;