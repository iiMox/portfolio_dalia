import Navbar from "../Navbar";
import Welcome from "../Welcome";
import About from "../About";

import "./Home.css";

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Welcome />
            <About />
        </div>
    );
};

export default Home;
