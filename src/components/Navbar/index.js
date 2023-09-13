import "./Navbar.css";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <h1>Dalia's Portfolio</h1>
            </div>
            <ul>
                <li>Home</li>
                <li>About Me</li>
                <li>Service</li>
                <li>Projects</li>
                <li>Blog</li>
                <li>
                    Let's talk
                    <div></div>
                </li>
            </ul>
            <hr />
        </div>
    );
};

export default Navbar;
