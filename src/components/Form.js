import React, { Component } from 'react';
import Collapsibles from './Collapsibles';
import FormDesign from './FormDesign';
import FormFill from './FormFill';
import FormShare from './FormShare';

class Form extends Component {
  render() {
    return (
      < React.Fragment>

        <Collapsibles>
          <FormDesign />
        </ Collapsibles >

        <Collapsibles>
          <FormFill />
        </ Collapsibles >

        <Collapsibles>
          <FormShare />
        </Collapsibles >

      </ React.Fragment>

    )
  }
}

export default Form;
