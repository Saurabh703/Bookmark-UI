import React from 'react';
import "../Header/Header.css";
import logo from "../Header/images/logo-bookmark.svg";
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className="header">
            <Link to="/">
            <img className="logo" src={logo} alt="logo" />
            </Link>
            {/* <div className="navbar"> */}
            <Link className="features" to="/">
                Features
                </Link>
            <Link className="pricing" to="/">
                Pricing
            </Link>
            <Link className='contact' to="/">
                Contact
            </Link>
                <Link to="/login">
                    Log In
                </Link>
                </div>
            // </div>

    );
};

export default Header;


