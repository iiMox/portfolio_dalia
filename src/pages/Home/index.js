import Navbar from "../../components/Navbar";
import Welcome from "../../components/Welcome";
import About from "../../components/About";
import Service from "../../components/Service";
import Projects from "../../components/Projects";

import Wrapper from "../../components/Wrapper";
import Contact from "../../components/Contact";

import "./Home.css";

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Welcome />
            <About />
            <Service />
            <Projects />
            <Wrapper>
                <Contact />
            </Wrapper>
        </div>
    );
};

export default Home;
