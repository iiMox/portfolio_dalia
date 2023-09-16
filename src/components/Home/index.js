import Navbar from "../Navbar";
import Welcome from "../Welcome";
import About from "../About";
import Service from "../Service";

import "./Home.css";

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Welcome />
            <About />
            <Service />
        </div>
    );
};

export default Home;
