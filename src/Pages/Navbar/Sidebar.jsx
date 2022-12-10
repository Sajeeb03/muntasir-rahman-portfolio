import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/d.png';
const Sidebar = () => {
    return (
        <div className='bg-secondary min-h-screen pt-12'>
            <img className='h-24 w-24 rounded-full m-auto mb-12' src={profile} alt="myImage" />
            <Link to="/"><h2 className="pl-3 text-2xl w-full text-white hover:bg-primary p-2">Home</h2></Link>
            <Link to="/about"><h2 className="pl-3 text-2xl w-full text-white hover:bg-primary p-2">About</h2></Link>
            <h2 className="pl-3 text-2xl w-full text-white hover:bg-primary p-2"><a href="https://drive.google.com/file/d/134TLipEQSf1iP6x9TSjj5zDyhdcCgKQ2/view?usp=sharing" alt="resume" target={`_blank`}>Resume</a></h2>

            <Link to="/portfolios"><h2 className="pl-3 text-2xl w-full text-white hover:bg-primary p-2">Portfolios</h2></Link>
            <Link to="/contact"><h2 className="pl-3 text-2xl w-full text-white hover:bg-primary p-2">Contact</h2></Link>
        </div>
    );
};

export default Sidebar;