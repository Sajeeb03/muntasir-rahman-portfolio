import React from 'react';

const Loader = () => {
    return (
        <div className='h-screen grid place-items-center'>
            <h1 className='border-4 border-dashed border-primary rounded-full h-9 w-9 animate-spin'></h1>
        </div>
    );
};

export default Loader;