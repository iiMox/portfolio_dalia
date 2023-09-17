import Section from "../Section";
import Project from "../Project";

import "./Projects.css";

const Projects = () => {
    return (
        <div className='projects-section'>
            <Section
                title='Projects'
                content={
                    <>
                        <div className='row'>
                            <Project
                                image='project_1.png'
                                project='Energy efficient House'
                            />
                            <Project
                                image='project_2.png'
                                project='Landscape Centrality'
                            />
                            <Project
                                image='project_3.png'
                                project='Urban Neighborhood'
                            />
                        </div>
                        <div className='row'>
                            <Project
                                image='project_4.png'
                                project='Residential'
                            />
                            <Project
                                image='project_5.png'
                                project='Shopping Center'
                            />
                            <Project
                                image='project_6.png'
                                project='Tiny House Airbnb'
                            />
                        </div>
                    </>
                }
            />
        </div>
    );
};

export default Projects;
