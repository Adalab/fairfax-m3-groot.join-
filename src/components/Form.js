import React, { Component } from 'react';
import Collapsibles from './Collapsibles';
// import FormDesign from './FormDesign';
import FormFill from './FormFill';
// import FormShare from './FormShare';

class Form extends Component {
  render() {
    const { functionFromMain } = this.props;
    return (
      < form className="main-form" action="">

        <Collapsibles>
          {/* <FormDesign /> */}
        </ Collapsibles >

        <Collapsibles>
          <FormFill functionFromForm={functionFromMain}/>
        </ Collapsibles >

        <Collapsibles>
          {/* <FormShare /> */}
        </Collapsibles >

      </form>

    )
  }
}

export default Form;
