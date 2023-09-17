import { useRef, useState, useEffect } from "react";

import "./Project.css";

const Project = ({ image, project }) => {
    const bg = require(`../../assets/${image}`);

    const initialRef = useRef(null);

    const [left, setLeft] = useState(0);

    useEffect(() => {
        setLeft(initialRef.current.offsetWidth);
    }, []);

    return (
        <div className='project'>
            <div className='overlay'></div>
            <img src={bg} alt={project} />
            <div
                className='initial'
                ref={initialRef}
                style={{ left: `-${left + 5}px` }}
            >
                {project.charAt(0)}
            </div>
            <h3>{project.substring(1)}</h3>
        </div>
    );
};

export default Project;
