import "./Project.css";

const Project = ({ image, project }) => {
    const bg = require(`../../assets/${image}`);
    return (
        <div className='project'>
            <div className='overlay'></div>
            <img src={bg} alt={project} />
            <div className='initial'>{project.charAt(0)}</div>
            <h3>{project.substring(1)}</h3>
        </div>
    );
};

export default Project;
