import { useEffect, useState } from "react";
import "./Project.css";

const Project = ({ image, project, row, index }) => {
    const bg = require(`../../assets/${image}`);

    const [left, setLeft] = useState(0);

    useEffect(() => {
        setLeft(
            document.querySelector(
                `.home .projects-section .content .row:nth-of-type(${row}) .project:nth-of-type(${index}) .initial`
            )?.offsetWidth
        );
    }, []);

    return (
        <div className='project'>
            <div className='overlay'></div>
            <img src={bg} alt={project} />
            <div
                className='initial'
                style={{
                    left: `-${left + 5}px`,
                }}
            >
                {project.charAt(0)}
            </div>
            <h3>{project.substring(1)}</h3>
        </div>
    );
};

export default Project;
