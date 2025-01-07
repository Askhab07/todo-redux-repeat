import React from 'react';
import logo from '../assets/icons/rocket.svg';

const Header = () => {
    return (
        <header className='bg-[#0D0D0D] h-[200px] flex justify-center items-center'>
            <div className='w-[1440px] flex justify-center'>
            <div className='flex items-center gap-3'>
                <img className='mt-2' src={logo} alt="" />
                <div className='text-[40px] font-black text-my-blue-100'>to<span className='text-my-purple-100'>do</span></div>
                <div className='text-xl font-black text-my-blue-100 mt-4'>by <span className='text-my-purple-200'>unicode</span></div>
            </div>
            </div>
        </header>
    );
};

export default Header;