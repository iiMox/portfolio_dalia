import Section from "../Section";
import ServiceBox from "../ServiceBox";
import ServiceOne from "../../assets/service_1.png";
import ServiceTwo from "../../assets/service_2.png";
import ServiceThree from "../../assets/service_3.png";

import "./Service.css";

const Service = () => {
    return (
        <div className='service-section'>
            <Section
                title='Service'
                content={
                    <>
                        <div className='bg'></div>
                        <div className='container'>
                            <ServiceBox
                                icon={ServiceOne}
                                title='What I can do'
                                desc={
                                    <>
                                        <p>
                                            I can create sustainable design for
                                            your architectural project by:
                                        </p>
                                        <ul>
                                            <li>Designing building</li>
                                            <li>Energy efficiency study</li>
                                            <li>Research and innovation</li>
                                        </ul>
                                    </>
                                }
                            />
                            <ServiceBox
                                icon={ServiceTwo}
                                title='What tools I use'
                                desc={
                                    <>
                                        <p>I use</p>
                                        <ul>
                                            <li>
                                                2D softwares: Autocad/ Revit{" "}
                                            </li>
                                            <li>
                                                3D softwares: Revit/ Sketchup
                                                Pro
                                            </li>
                                            <li>Renders: V-Ray/ Enscape</li>
                                            <li>
                                                Energy simulation: eQuest/
                                                Pleiades
                                            </li>
                                        </ul>
                                    </>
                                }
                            />
                            <ServiceBox
                                icon={ServiceThree}
                                title='What you can expect'
                                desc={
                                    <>
                                        <p>I can help with:</p>
                                        <ul>
                                            <li>Client communication</li>
                                            <li>Qualified design</li>
                                            <li>
                                                Environment friendly practice
                                            </li>
                                        </ul>
                                    </>
                                }
                            />
                        </div>
                    </>
                }
            />
        </div>
    );
};

export default Service;
