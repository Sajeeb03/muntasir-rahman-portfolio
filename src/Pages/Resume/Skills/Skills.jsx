import React from 'react';

const Skills = () => {
    //     const expertise = [
    //         {
    //             id: 1,
    //             title: "Javascript",
    //             img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
    //         },
    //         {
    //             id: 2,
    //             title: "React",
    //             img: "https://cdn-icons-png.flaticon.com/512/3334/3334886.png"
    //         },
    //         {
    //             id: 3,
    //             title: "Html",
    //             img: "https://cdn-icons-png.flaticon.com/512/174/174854.png"
    //         },
    //     ]
    //     <div className='bg-secondary text-white'>
    //     <div className='flex gap-3'>
    //         {
    //             expertise.map(exp => <div className='border-2 border-primary h-24 w-24 grid place-content-center rounded-lg p-4' key={exp.id}>
    //                 <img src={exp.img} alt="" title={exp.title} className='h-12 w-12 hover:h-14 hover:w-14' />
    //             </div>)
    //         }
    //     </div>
    // </div>
    return (
        <div data-aos="fade-left" className='bg-secondary mx-3 p-8 md:m-12 text-white rounded-lg'>
            <h5 className="text-3xl md:text-5xl font-bold text-primary mb-3">Skills</h5>
            <hr />
            <h3 className="text-3xl font-bold mt-3">Expertise:</h3>
            <p>JavaScript, ES6, React, React Router, SPA, Rest API, Axios, Html5, CSS3, bootstrap 5, Tailwind CSS,
                Firebase, Daisy UI, Flowbite, React Bootstrap.</p>
            <h3 className="text-3xl font-bold mt-3">Comfortable:</h3>
            <p>Node JS, Express JS, Mongo DB, Stripe.</p>
            <h3 className="text-3xl font-bold mt-3">Familiar:</h3>
            <p>Material UI, Styled Component.</p>
            <h3 className="text-3xl font-bold mt-3">Tools</h3>
            <p>Git, GitHub, VS code, Yarn, NPM, Vite, Netlify, Vercel.</p>
        </div>
    );
};

export default Skills;