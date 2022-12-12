import React from 'react';
import useScroll from '../../../Hooks/useScroll';
import Contact from '../../Contact/Contact';
import Portfolios from '../../Portfolios/Portfolios';
import ContactMe from '../ContactMe/ContactMe';
import Education from '../Education/Education';
import Languages from '../Languages/Languages';
import Skills from '../Skills/Skills';

const Resume = () => {
    useScroll();
    return (
        <div className='pt-3'>
            <Education />
            <Skills />
            <Portfolios>{true}</Portfolios>
            <Languages />
            <ContactMe />
        </div>
    );
};

export default Resume;