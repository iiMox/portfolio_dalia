import Navbar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";
import projects from "../../utils/projects.json";
import Carousel from "../../components/Carousel";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

import "./Project.css";

const Project = () => {
    const params = useParams();

    const project = projects.filter((prj) => prj.id == params.id)[0];

    return (
        <div className='project-page'>
            <Navbar />
            <h2>Projects</h2>
            <div className='content'>
                <div className='container'>
                    {project.rows.map((row, index) => (
                        <div className='row'>
                            {row.text !== undefined ? (
                                <div className='text'>
                                    {index === 0 ? (
                                        <h3>{project.label}</h3>
                                    ) : (
                                        ""
                                    )}
                                    {parse(row.text)}
                                </div>
                            ) : (
                                ""
                            )}
                            <div
                                className='image'
                                style={{
                                    width: `${index === 2 ? "75%" : "49%"}`,
                                }}
                            >
                                <img
                                    src={require(`../../assets/projects/project_${
                                        project.id
                                    }/image_${index + 1}.png`)}
                                    alt={`Project ${project.id}`}
                                />
                            </div>
                        </div>
                    ))}

                    {/* {Array.from(Array(size)).map((item, j) => (
                                <img
                                    src={require(`../../assets/projects/project_${
                                        project.id
                                    }/carousel_${i + 1}/image_${j + 1}.png`)}
                                    alt={j}
                                />
                            ))} */}
                </div>
            </div>
            <Wrapper>
                <div className='box'>
                    {project.carousels.map((size, i) => (
                        <Carousel size={size} row={i} id={project.id} />
                    ))}
                </div>
            </Wrapper>
        </div>
    );
};

export default Project;
