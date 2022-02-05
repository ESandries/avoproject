import React from 'react';
import logoEsandries from '../assets/logo/Isotipo-Esandries.svg';

const Header = () => {
    return (
        <header className="mainHeader">
            <div className="mainHeader--logoContainer">
                <img
                    src={logoEsandries}
                    className="mainHeader--logo"
                    alt=""
                />
            </div>
            <div className="mainHeader--links">
                <ul className="mainHeader--list">
                    <li><a href="https://esandries.com">PortFolio</a></li>
                    <li><a href="https://esandries.com">About me</a></li>
                    <li><a href="https://esandries.com">Blog</a></li>
                    <li><a href="https://esandries.com">Projects</a></li>
                    <li><a href="https://esandries.com">Services</a></li>
                </ul>
            </div>
            <div className="mainHeader--CTA">
                <a href="https://esandries.com" className="button-CTA">Contact Me</a>
            </div>
        </header>
    );
};

export default Header;