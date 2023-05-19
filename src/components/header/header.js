import React from 'react';
import { Link } from 'react-router-dom'
import './header.css'
import { useUserContext } from '../../context/userContext';

function Header() {
    const {user} = useUserContext();
    console.log(user);
    return (
        <header>
            <div className='header-container'>
            <div className='logo'>
                {/* <Link to="/">DiscoverMOTrails</Link> */}
                <h1>Welcome {user.displayName} to DiscoverMOTrails</h1>
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