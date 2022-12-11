import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    const { title, image, category, id } = project;
    return (
        <div className="card card-compact bg-secondary shadow-lg text-white">
            <figure><img src={image} className="w-full h-[200px]" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{category}</p>
                <div className="card-actions justify-end">
                    <Link to={`/portfolios/${id}`}>
                        <button className="btn btn-outline btn-primary">Explore</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Project;