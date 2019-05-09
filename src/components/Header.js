import React, { Component } from 'react';
import logo from "./../images/awesome_cards_logo.svg";

class Header extends Component {
    render() {
        const header = (
            <header className="header__@@option">
                <img className="header__image" src={logo} alt="awesome cards logo" />
            </header>
        );

        return header;
    }
};

export default Header;