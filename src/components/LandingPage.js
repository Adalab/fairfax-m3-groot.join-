import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import LandingMain from "./LandingMain";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing__container">
        <Header headerClass="index" />
        <LandingMain />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
