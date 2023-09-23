import Footer from "../Footer";

import "./Wrapper.css";

const Wrapper = ({ children }) => {
    return (
        <div className='wrapper'>
            <div className='bg'></div>
            {children}
            <Footer />
        </div>
    );
};

export default Wrapper;
