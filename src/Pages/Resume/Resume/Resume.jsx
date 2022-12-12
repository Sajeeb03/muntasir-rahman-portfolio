import React from 'react';
import Contact from '../../Contact/Contact';
import ContactMe from '../ContactMe/ContactMe';
import Education from '../Education/Education';
import Languages from '../Languages/Languages';
import Skills from '../Skills/Skills';

const Resume = () => {
    return (
        <div className='pt-3'>
            <Education />
            <Skills />
            <Languages />
            <ContactMe />
        </div>
    );
};

export default Resume;