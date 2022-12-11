import React from 'react';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Portfolios from '../../Portfolios/Portfolios';
import Home from '../Main/Home';

const HomePage = () => {
    return (
        <div className=''>
            <Home />
            <div className='mx-2 mt-0'>
                <About />
            </div>
            <Portfolios />
            <Contact />
        </div>
    );
};

export default HomePage;