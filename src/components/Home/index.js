import Navbar from "../Navbar";
import Welcome from "../Welcome";
import About from "../About";
import Service from "../Service";
import Projects from "../Projects";
import Contact from "../Contact";
import Footer from "../Footer";

import "./Home.css";

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Welcome />
            <About />
            <Service />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
