import React from 'react';
import navIcon from '../../Assets/Img/rings.png';
import { Link } from 'react-router-dom';

function Navbar() {

    
    return(
        <div className="topnav">
            <div className="topnav-right">
                <a className="navbar-brand" href="/">
                    <img src={navIcon} width="35" height="35" className="d-inline-block align-top" alt="gold rings icon"/>
                    WONDERLUST
                </a>
                <Link className="active" to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/Contact">Contact Us</Link>
            <span className="social">
                <a href="twitter.com"><i className="fab fa-twitter"></i></a>
                <a href="facebook.com"><i className="fab fa-facebook-f"></i></a>
                <a href="instagram.com"><i className="fab fa-instagram"></i></a>
            </span>
            </div>
        </div>
    )
}
export default Navbar;