import { useEffect, useState } from "react";
import Section from "../Section";
import Project from "../Project";

import "./Projects.css";

const Projects = () => {
    const [padding, setPadding] = useState(60);
    useEffect(() => {
        setPadding(
            document.querySelector(
                ".projects-section .row:first-of-type .project:first-of-type .initial"
            )?.offsetWidth
        );
    }, []);

    return (
        <div className='projects-section'>
            <Section
                title='Projects'
                content={
                    <>
                        <div
                            className='row'
                            style={{
                                paddingLeft: `${padding + 5 + 60}px`,
                            }}
                        >
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
