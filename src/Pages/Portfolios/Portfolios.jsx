import React from 'react';
import Project from './Project';

const Portfolios = () => {
    const projects = [
        {
            id: 1,
            title: "Dream Car",
            image: "https://i.ibb.co/ZzL9LtD/toyota.jpg",
            category: "Product Reselling Website",
            details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            live: "https://dream-car-2e265.web.app/",
            client: "https://github.com/Sajeeb03/Dream-car-client",
            server: "https://github.com/Sajeeb03/dream-car-server"
        },
        {
            id: 2,
            title: "Wildography",
            image: "https://i.ibb.co/BGJ5M9Q/sumatran-tiger-black-background-remixed-from-photography-by-mehgan-murphy-53876-138128.jpg",
            category: "Service providing portfolio.",
            details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            live: "https://wildography-b0b36.web.app/",
            client: "https://github.com/Sajeeb03/wildography-client",
            server: "https://github.com/Sajeeb03/wildography-app-server"
        },
        {
            id: 3,
            title: "Saj Academy",
            image: "https://i.ibb.co/gd4J4nm/building.jpg",
            category: "Online educational platform",
            details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            live: "https://saj-academy.web.app/",
            client: "https://github.com/Sajeeb03/saj-academy-client",
            server: "https://github.com/Sajeeb03/saj-academy-server"
        },
        {
            id: 4,
            title: "Quick Quiz",
            image: "https://i.ibb.co/NTSYnV3/library-Books.png",
            category: "Multiple choice quiz app",
            details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            live: "https://quick-quiz-web.netlify.app/",
            client: "https://github.com/Sajeeb03/Quick-quiz-app",
            server: ""
        },
    ]
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

        </div>
    );
};

export default Portfolios;