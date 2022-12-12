import React from 'react';
import About from '../../About/About';
import Portfolios from '../../Portfolios/Portfolios';
import ContactMe from '../../Resume/ContactMe/ContactMe';
import Skills from '../../Resume/Skills/Skills';
import Home from '../Main/Home';

const HomePage = () => {
    return (
        <div className=''>
            <Home />
            <About />
            <Skills />
            <Portfolios>{true}</Portfolios>
            <ContactMe />
        </div>
    );
};

export default HomePage;