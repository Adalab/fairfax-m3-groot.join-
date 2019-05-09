import React, { Component } from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
// import PropTypes from 'prop-types';

class App extends Component {
  render() {
    const {
      name,
      job,
      phone,
      email,
      linkedin,
      github,
      photo,
      palette
    }=this.props;
    return (
      <div className="main-page">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
