import React, { Component } from 'react';
import logoAdalab from "./../images/logo-adalab.png";


class Footer extends Component {
    render() {
        const footer = (
            <footer className="footer__container">
                <small className="footer__info">Awesome profile-cards &copy;2019</small>
                <img src={logoAdalab} className="footer__logo" alt="logo Adalab" />
            </footer>
        );
        return footer;
    };
};


export default Footer;