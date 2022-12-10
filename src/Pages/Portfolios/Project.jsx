import React from 'react';

const Project = ({ project }) => {
    const { title, image, category, details, live, client, server } = project;
    return (
        <div className="card card-compact bg-secondary shadow-lg text-white">
            <figure><img src={image} className="w-full h-[200px]" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{category}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-xs btn-primary"><a href={live} alt="" target="_blank">Live Site</a></button>
                    <button className="btn btn-outline btn-xs btn-primary"><a href={client} alt="" target="_blank">Client</a></button>
                    {
                        server && <button className="btn btn-outline btn-xs btn-primary"><a href={server} alt="" target="_blank">Server</a></button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Project;