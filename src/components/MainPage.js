import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class MainPage extends Component {
  render() {
    return (
      <div className="main-page">
        <Header headerClass="main" />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default MainPage;
