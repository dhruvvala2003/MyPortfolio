import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import './NavbarCss.css';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='header'>
            <Link className='logo'>Vala <span>Dhruv</span></Link>

            <button onClick={toggleMenu} className={`bx bx-menu ${isOpen ? 'active' : ''}`} id='menu-icon'>
                <GiHamburgerMenu />
            </button>

            <nav className={`navbar ${isOpen ? 'active' : ''}`}>
                <Link className="link" smooth  to="#home" onClick={toggleMenu}>Home</Link>
                <Link className="link" smooth  to="#about" onClick={toggleMenu}>About</Link>
                <Link className="link" smooth  to="#service" onClick={toggleMenu}>Service</Link>
                {/* <Link className="link" smooth  to={"/portfolio"} onClick={toggleMenu}>Portfolio</Link> */}
                <Link className="link" smooth to="#contact" onClick={toggleMenu}>Contact</Link>
            </nav>
        </div>
    );
};

export default Navbar;
