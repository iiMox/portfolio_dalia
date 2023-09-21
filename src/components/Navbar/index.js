import "./Navbar.css";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='logo'>
                    <h1>Dalia's Portfolio</h1>
                </div>
                <ul>
                    <div
                        className='close'
                        onClick={() => {
                            document
                                .querySelector(".navbar ul")
                                .classList.remove("show");
                        }}
                    ></div>
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
                <div
                    className='hamburger-menu'
                    onClick={() => {
                        document
                            .querySelector(".navbar ul")
                            .classList.add("show");
                    }}
                >
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default Navbar;
