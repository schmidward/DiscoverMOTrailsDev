import React from 'react';
import { Link } from 'react-router-dom'
import './header.css'

function Header() {
    return (
        <header>
            <div className='header-container'>
            <div className='logo'>
                <Link to="/"><h1>DiscoverMOTrails</h1></Link>
            </div>
                <nav>
                    <ul className='nav-links'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/Register">Register</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;