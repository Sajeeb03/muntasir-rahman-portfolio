import React from 'react';
import useScroll from '../../../Hooks/useScroll';
import About from '../../About/About';
import Portfolios from '../../Portfolios/Portfolios';
import ContactMe from '../../Resume/ContactMe/ContactMe';
import Skills from '../../Resume/Skills/Skills';
import Home from '../Main/Home';

const HomePage = () => {
    useScroll();
    return (
        <div className='overflow-x-hidden'>
            <Home />
            <About />
            <Skills />
            <Portfolios>{true}</Portfolios>
            <ContactMe />
        </div>
    );
};

export default HomePage;