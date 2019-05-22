import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./../images/awesome_cards_logo.svg";

class Header extends Component {
  render() {
    const header = (
      <header className={`header__${this.props.headerClass}`}>
        <Link to="/">
          <img className="header__image" src={logo} alt="awesome cards logo" />
        </Link>
      </header>
    );

    return header;
  }
}

export default Header;
