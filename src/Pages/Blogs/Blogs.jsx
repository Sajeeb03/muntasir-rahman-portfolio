import React from 'react';

const Blogs = () => {
    return (
        <div className='text-white'>
            <div className='flex flex-col h-screen justify-center items-center'>
                <div className='flex items-center'>
                    <h1 className="text-5xl font-bold">C</h1>
                    <h1 className='border-4 border-dashed border-primary rounded-full h-9 w-9 animate-spin'></h1>
                    <h1 className="text-5xl font-bold">MING</h1>
                </div>

                <div className='flex items-center'>
                    <h1 className="text-5xl font-bold">S</h1>
                    <h1 className='border-4 border-dashed border-primary rounded-full h-9 w-9 animate-spin'></h1>
                    <h1 className='border-4 border-dashed border-primary rounded-full h-9 w-9 animate-spin'></h1>
                    <h1 className="text-5xl font-bold">N</h1>
                </div>
            </div>
        </div>
    );
};

export default Blogs;