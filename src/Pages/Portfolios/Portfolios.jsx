import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
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

    if (isLoading) {
        return <Loader />
    }
    if (children) {
        projects = projects.slice(0, 3)
    }
    return (
        <div className='p-3 md:p-12 mb-14 md:mb-0'>
            <h5 className="text-5xl font-bold text-primary mb-3">Portfolios</h5>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    projects.map(project => <Project
                        key={project.id}
                        project={project}
                    />)
                }
            </div>
            {
                children && <Link to="/portfolios"><button className='btn btn-outline btn-primary mt-8'>See All</button></Link>
            }
        </div>
    );
};

export default Portfolios;