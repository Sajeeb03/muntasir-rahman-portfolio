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
                <div className='md:col-span-5 bg-accent'>
                    <Outlet />
                </div>
            </div>
            <div className='fixed bottom-0 w-full md:hidden'>
                <div className='bg-secondary py-4 flex justify-around'>
                    <Link to="/">
                        <FaHome className='h-6 w-6 text-white' />
                    </Link>
                    <Link to="/about">
                        <FaUser className='h-6 w-6 text-white' />
                    </Link>
                    <Link to="/resume">
                        <FaRegListAlt className='h-6 w-6 text-white' />
                    </Link>

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