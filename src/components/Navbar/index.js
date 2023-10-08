import { NavLink } from "react-router-dom";

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
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>About Me</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Service</NavLink>
                    </li>
                    <li>
                        <NavLink to='/projects'>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Let's talk</NavLink>
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
