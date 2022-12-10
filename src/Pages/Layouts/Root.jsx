import React from 'react';
import Sidebar from '../Navbar/Sidebar';

const Root = () => {
    return (
        <div className='grid grid-cols-6'>
            <div className=''>
                <Sidebar />
            </div>
            <div className='col-span-5 border-2 border-red-200'>
                5
            </div>
        </div>
    );
};

export default Root;