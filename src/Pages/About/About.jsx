import React from 'react';

const About = () => {
    return (
        <div className='text-white h-screen grid place-items-center gap-1'>
            <h1 className="text-4xl font-bold">About Page</h1>
            <div className='flex items-center'>
                <h1 className="text-5xl font-bold">L</h1>
                <h1 className='border-4 border-dashed border-primary rounded-full h-9 w-9 animate-spin'></h1>
                <h1 className="text-5xl font-bold">ADING</h1>
            </div>
        </div>
    );
};

export default About;