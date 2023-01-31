import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <div className='flex justify-between bg-slate-900 p-5'>
            <Link className='text-4xl font-bold text-white flex ' to='/home'>
                <img className='w-12 mr-3' src='../logo.png' alt='' />
                 QuizBoss
             </Link>
            <nav className='space-x-8 font-bold mt-3 text-white text-lg header-btn'>
                <Link to='/home'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </nav>
    </div>
    );
};

export default Navbar;