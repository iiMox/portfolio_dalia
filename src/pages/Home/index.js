import Navbar from "../../components/Navbar";
import Welcome from "../../components/Welcome";
import About from "../../components/About";
import Service from "../../components/Service";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

import "./Home.css";

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Welcome />
            <About />
            <Service />
            <Projects />
            <div className='wrapper'>
                <div className='bg'></div>
                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
