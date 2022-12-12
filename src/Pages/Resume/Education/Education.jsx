import React from 'react';

const Education = () => {
    const education = [
        {
            id: 1,
            institute: "Begum Rokeya University Rangpur",
            location: "Rangpur, Bangladesh",
            degree: "BSc(Engineering) in Electrical And Electronic Engineering",
            duration: "2017-2022",
            grade: "3.60 out of 4.00"
        },
        {
            id: 2,
            institute: "Govt. JKA Goni College Patgram",
            location: "Lalmonirhat, Bangladesh",
            degree: "Higher Secondary Certificate",
            duration: "2014-2016",
            grade: "4.08 out of 5.00"
        }
    ]
    return (
        <div data-aos="fade-right" className='bg-secondary p-8 mx-3 sm:mx-0 mb-3 sm:mb-0 md:m-12 text-white rounded-lg'>
            <h5 className="text-3xl md:text-5xl font-bold text-primary mb-3">Education</h5>
            <hr className='mb-3' />
            <div>
                {
                    education.map((edu, i) => <div className='mb-3' key={edu.id}>
                        <h3 className="text-3xl font-bold">{edu.institute}</h3>
                        <h2 className="text-xl font-semibold">{edu.degree}</h2>
                        <p>Duration: {edu.duration}</p>
                        <p>Grade: {edu.grade}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Education;