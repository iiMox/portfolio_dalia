import Navbar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";
import { Link } from "react-router-dom";

import thumbnails from "../../utils/thumbnails.json";

import "./Projects.css";

const Projects = () => {
    return (
        <div className='projects-page'>
            <Navbar />
            <h2>Projects</h2>
            <div className='content'>
                <div className='container'>
                    {thumbnails.map((thumbnail, id) => {
                        return (
                            <Link
                                to={`/projects/${thumbnail.project}`}
                                className='thumbnail'
                                onClick={() => {
                                    window.scroll(0, 0);
                                }}
                            >
                                <div className='overlay'>{thumbnail.title}</div>
                                <img
                                    src={require(`../../assets/thumbnails/${thumbnail.thumbnail}`)}
                                    alt={`thumbnail ${id + 1}`}
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>
            <Wrapper />
        </div>
    );
};

export default Projects;
