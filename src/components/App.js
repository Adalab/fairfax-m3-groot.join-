import React, { Component } from "react";
import LandingPage from './LandingPage';
import MainPage from './MainPage';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="main-page">
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/mainpage" component={MainPage} />
        </Switch>
      </div>
    );
  }
}

export default App;