import React from 'react';
import { Link } from 'react-router-dom';
import './nav-style.css'

const NavBar = () => {
    return (
        <div>
            <ul className="nav">
                <li>
                    <Link to={'/'}> Home </Link>
                </li>
                <li>
                    <Link to={'/country'}> Countries </Link>
                </li>
                <li>
                    <Link to={'/user'}> User </Link>
                </li>
               
            </ul>
        </div>
    );
};

export default NavBar;