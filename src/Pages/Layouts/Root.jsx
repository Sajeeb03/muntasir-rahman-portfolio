import React from 'react';
import { FaEnvelopeOpenText, FaHome, FaRegAddressBook, FaRegListAlt, FaUser } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../Navbar/Sidebar';

const Root = () => {
    return (
        <div className=''>
            <div className='md:grid grid-cols-6'>
                <div className='hidden md:block'>
                    <Sidebar />
                </div>
                <div className='md:col-span-5 bg-accent z-0'>
                    <Outlet />
                </div>
            </div>
            <div className='fixed bottom-0 w-full z-11 md:hidden'>
                <div className='bg-secondary py-4 flex justify-around'>
                    <Link to="/">
                        <FaHome className='h-6 w-6 text-white' />
                    </Link>
                    <Link to="/about">
                        <FaUser className='h-6 w-6 text-white' />
                    </Link>
                    <a href="https://drive.google.com/file/d/134TLipEQSf1iP6x9TSjj5zDyhdcCgKQ2/view?usp=sharing" target="_blank" alt="resume">
                        <FaRegListAlt className='h-6 w-6 text-white' />
                    </a>
                    <Link to="/portfolios">
                        <FaEnvelopeOpenText className='h-6 w-6 text-white' />
                    </Link>
                    <Link to="/contact">
                        <FaRegAddressBook className='h-6 w-6 text-white' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Root;