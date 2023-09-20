import { useEffect, useState } from "react";
import Section from "../Section";
import Project from "../Project";
import projects from "../../utils/projects.json";

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
                            {projects
                                .slice(0, Math.ceil(projects.length / 2))
                                .map((project) => (
                                    <Project
                                        key={project.id}
                                        image={project.image}
                                        project={project.project}
                                        index={project.id}
                                        row={1}
                                    />
                                ))}
                            {/* <Project
                                image='project_1.png'
                                project='Energy efficient House'
                                index={1}
                                row={1}
                            />
                            <Project
                                image='project_2.png'
                                project='Landscape Centrality'
                                index={2}
                                row={1}
                            />
                            <Project
                                image='project_3.png'
                                project='Urban Neighborhood'
                                index={3}
                                row={1}
                            /> */}
                        </div>
                        <div className='row'>
                            {projects
                                .slice(Math.ceil(projects.length / 2))
                                .map((project) => (
                                    <Project
                                        key={project.id}
                                        image={project.image}
                                        project={project.project}
                                        index={
                                            project.id -
                                            Math.ceil(projects.length / 2)
                                        }
                                        row={2}
                                    />
                                ))}
                            {/*  <Project
                                image='project_4.png'
                                project='Residential'
                                index={3}
                                row={2}
                            />
                            <Project
                                image='project_5.png'
                                project='Shopping Center'
                                index={2}
                                row={2}
                            />
                            <Project
                                image='project_6.png'
                                project='Tiny House Airbnb'
                                index={1}
                                row={2}
                            /> */}
                        </div>
                    </>
                }
            />
        </div>
    );
};

export default Projects;
