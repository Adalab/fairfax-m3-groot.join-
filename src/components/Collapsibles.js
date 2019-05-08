import React, { Component } from 'react';
import FormDesign from './FormDesign';
import FormFill from './FormFill';
import FormShare from './FormShare';
import { directive } from '@babel/types';

class Collapsibles extends Component {
  render() {
    return (
      <React.Fragment>
        <FormDesign />
        <FormFill />
        <FormShare />
      </React.Fragment>
    );
  }
}

export default Collapsibles;
