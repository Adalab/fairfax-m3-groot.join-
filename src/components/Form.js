import React, { Component } from 'react';
import Collapsibles from './Collapsibles';

class Form extends Component {
  render() {
    return (
      <React.Fragment>
        <Collapsibles />
        <Collapsibles />
        <Collapsibles />
      </React.Fragment>
    );
  }
}

export default Form;
