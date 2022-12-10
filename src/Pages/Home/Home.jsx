import React from 'react';
import Typewriter from 'typewriter-effect';
import resume from '../../assets/muntasir_rahman_12_7.pdf';
import fb from '../../assets/icons8-facebook-96.png';
import git from '../../assets/icons8-git-96.png';
import li from '../../assets/icons8-linkedin-circled-96.png';
import tw from '../../assets/icons8-twitter-96.png';
import photo from '../../assets/d.png';
const Home = () => {
    return (
        <div className='grid place-content-center min-h-screen text-white'>
            <div>
                <img src={photo} alt="" className='h-24 w-24 rounded-full mb-3 m-auto md:hidden' />
                <h4 className="text-2xl md:text-4xl font-bold">Hi There!</h4>
                <h6 className="text-2xl md:text-6xl font-bold uppercase">I'M <span className='text-primary'>Md. Muntasir Rahman</span></h6>
                <h6 className="text-2xl md:text-4xl font-bold uppercase w-[280px] md:w-full">I'm a<span className='text-primary text-xl md:text-5xl'>
                    <Typewriter
                        options={{
                            strings: ["Full Stack Developer", 'Front End Developer', 'REact developer', 'MERN Stack Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <a href={resume} download>
                        <button className='btn btn-outline btn-primary mt-2' style={{ color: "white" }}>Download Resume</button>
                    </a>
                </span></h6>
            </div>
            <div className='flex gap-2 mt-4'>
                <a href="https://www.linkedin.com/in/muntasir-sajeeb/" target="_blank"><img src={li} className="w-12 h-12" alt="fbIcon" /></a>
                <a href="https://github.com/Sajeeb03"><img src={git} className="w-12 h-12" alt="fbIcon" target="_blank" /></a>
                <a href="https://www.facebook.com/sajeebmuntasir/"><img src={fb} className="w-12 h-12" alt="fbIcon" target="_blank" /></a>
                <a href="https://twitter.com/muntasir_sajeeb"><img src={tw} className="w-12 h-12" alt="fbIcon" target="_blank" /></a>
            </div>
        </div>
    );
};

export default Home;