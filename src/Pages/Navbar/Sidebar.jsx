import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/d.png';
const Sidebar = () => {
    return (
        <div className='bg-secondary min-h-screen sticky top-0 pt-12'>
            <img className='h-24 w-24 rounded-full m-auto mb-12' src={profile} alt="myImage" />
            <Link to="/"><h2 className="pl-12 text-2xl w-full text-white hover:bg-primary p-2">Home</h2></Link>
            <Link to="/about"><h2 className="pl-12 text-2xl w-full text-white hover:bg-primary p-2">About</h2></Link>
            <Link to="/resume"><h2 className="pl-12 text-2xl w-full text-white hover:bg-primary p-2">Resume</h2></Link>
            <Link to="/portfolios"><h2 className="pl-12 text-2xl w-full text-white hover:bg-primary p-2">Portfolios</h2></Link>
            <Link to="/blogs"><h2 className="pl-12 text-2xl w-full text-white hover:bg-primary p-2">Blogs</h2></Link>
            <Link to="/contact"><h2 className="pl-12 text-2xl w-full text-white hover:bg-primary p-2">Contact Me</h2></Link>
        </div>
    );
};

export default Sidebar;