import React from 'react';
import img from '../../assets/about.jpg';
const About = () => {
    return (
        <div className="bg-secondary mb-12 text-white p-8 md:p-0 md:m-12 md:grid md:grid-cols-3 items-center rounded-lg">
            <div className='md:col-span-2 md:px-8 mb-3 md:mb-0'>
                <h3 className="text-3xl font-bold text-primary">About Me</h3>
                <p className='text-justify text-lg'>I am a full stack developer, and currently I am working with the MERN stack. I develop professional-level web applications using this stack. I use the MERN stack because it is currently one of the best full stacks available. I developed several projects using them. I have a lot of interest in learning Redux, Next JS, and other frameworks like Angular and Vue. Also, I love backend development; for that, I am going to learn SQL databases, DSA, and much more. I am on my way, and one day I see myself there.</p>
            </div>
            <div>
                <img src={img} className="rounded-lg sm:rounded-none md:rounded-r-lg" alt="" />
            </div>
        </div>
    );
};

export default About;