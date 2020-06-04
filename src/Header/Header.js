import React, { useEffect, useState } from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (

<header>
        <nav>
       <img className="logo" src={require('../assets/images/logo.png')} alt="Cover Photo"/>
            <input type="checkbox" id='check'/>
            <label for="check" className="checkbtn">
            <FontAwesomeIcon color="white" size="5x" icon={faBars} />
            </label>
            <ul>
                <li><a href="#dont">Home</a></li>
                <li><a href="#forget">Projects</a></li>
                <li><a href="#dont">Contact</a></li>
                <li ><a className="button" href="#forget">Login</a></li>
            </ul>
        </nav>
        </header>
    );
};

export default Header;