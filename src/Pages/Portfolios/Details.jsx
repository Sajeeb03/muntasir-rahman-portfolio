import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import useProject from '../../Hooks/useProject';

const Details = () => {
    const { id } = useParams();
    const [projects, loading] = useProject(id)

    if (loading) {
        return <Loader />
    }

    const project = projects.find(pr => pr.id === Number(id));
    const { title, category, screenshots, bullets, tech, live, client, server, image } = project;
    // console.log(project)

    return (
        <div className='text-white bg-secondary mb-12 md:mb-0 md:m-3 p-3'>

            <div className='text-center mb-3'>
                <h5 className="text-5xl font-bold text-primary">{title}</h5>
                <p className='text-lg'>{category}</p>
            </div>
            <img src={image} className="rounded-lg mb-3 md:mx-7 md:h-[512px] md:w-[95%] overflow-hidden" alt="" />
            <div className='md:px-7 my-4 md:w-2/3'>
                <a href={live}>
                    <button className="btn btn-outline btn-primary mr-3 md:mr-0">Live Website</button>
                </a>
                <a href={client}>
                    <button className="btn btn-outline btn-primary mt-3 md:mt-0 md:ml-3">Client Repository</button>
                </a>
                {
                    server && <a href={server}>
                        <button className="btn btn-outline btn-primary mt-3 md:mt-0 md:ml-3">Server Repository</button>
                    </a>
                }

            </div>
            <div className='text-lg md:px-7 mt-3'>
                <h2 className="text-2xl font-bold">This Website Contains</h2>
                <ul>
                    {
                        bullets.map((bl, i) => <li key={i} className="flex items-center gap-3"><FaHandPointRight className='text-primary' /> {bl}</li>)
                    }
                </ul>
            </div>
            <div className='text-lg mt-3 md:px-7'>
                <h2 className="text-2xl font-bold">Technology Used</h2>
                <ul>
                    {
                        tech.map((tc, i) => <li key={i} className="flex items-center gap-3"><FaHandPointRight className='text-primary' /> {tc}</li>)
                    }
                </ul>

            </div>
            <h2 className="text-2xl font-bold md:mx-7">Screenshots</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-3'>

                {
                    screenshots.map((sh, i) => <img key={i} src={sh} alt="" className='h-[320px] md:w-5/6 m-auto rounded-lg' />)
                }

            </div>
        </div>
    );
};

export default Details;