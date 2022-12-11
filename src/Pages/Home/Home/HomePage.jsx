import React from 'react';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Home from '../Main/Home';

const HomePage = () => {
    return (
        <div>
            <Home />
            <About />
            <Contact />
        </div>
    );
};

export default HomePage;