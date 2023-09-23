import Section from "../Section";
import CV from "../../assets/Dalia Dahbia YAICI.pdf";

import "./About.css";

const About = () => {
    return (
        <div className='about-section'>
            <Section
                title='About Me'
                content={
                    <>
                        <div className='bg'></div>
                        <div className='container'>
                            <div className='info'>
                                <h3>Information</h3>
                                <ul>
                                    <li>
                                        Name: <span>Dalia D. YAICI</span>
                                    </li>
                                    <li>
                                        Phone: <span>+213698666809</span>
                                    </li>
                                    <li>
                                        E-mail:{" "}
                                        <span>dalia.yaici@gmail.com</span>
                                    </li>
                                </ul>
                                <a
                                    href={CV}
                                    download='CV Dalia Dahbia YAICI'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    Download Resume
                                </a>
                            </div>
                            <div className='desc'>
                                Hi, I’m Dalia <br /> As a junior architect, I am
                                currently pursuing a professional master's
                                degree in energy efficiency in buildings. My aim
                                is to design meaningful architectural projects
                                that are centered around the end-user, while
                                also prioritizing environmental sustainability
                                and securing our future.
                            </div>
                        </div>
                    </>
                }
            />
        </div>
    );
};

export default About;
