import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import useScroll from '../../Hooks/useScroll';
import Project from './Project';

const Portfolios = ({ children }) => {
    let [projects, setProjects] = useState([]);
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])
    useScroll();
    if (isLoading) {
        return <Loader />
    }
    if (children) {
        projects = projects.slice(0, 3)
    }
    return (
        <div className='p-3 md:p-12 mb-14 md:mb-0'>
            <h5 className={`text-3xl md:text-5xl font-bold text-primary mb-7 ${children ? "text-center" : "text-start"}`}>Portfolios</h5>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    projects.map(project => <Project
                        key={project.id}
                        project={project}
                    />)
                }
            </div>
            <div className='flex justify-center'>
                {
                children && <Link to="/portfolios"><button className='btn btn-outline btn-primary mt-8'>See All</button></Link>
            }
            </div>
        </div>
    );
};

export default Portfolios;