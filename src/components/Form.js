import React, { Component } from 'react';
import Collapsibles from './Collapsibles';
import FormDesign from './FormDesign';
import FormFill from './FormFill';
import FormShare from './FormShare';

class Form extends Component {
  render() {
    const { functionFromMain } = this.props;

    return (
      < form className="main-form" action="">

        <Collapsibles name="Diseña" icon="far fa-object-ungroup form__icons">
          <FormDesign color={palette}/>
        </ Collapsibles >
        <Collapsibles name="Rellena" icon="far fa-keyboard form__icons">
          <FormFill functionFromForm={functionFromMain}/>
        </ Collapsibles >
        <Collapsibles name="Comparte" icon="fas fa-share-alt form__icons">
          <FormShare card={this.props} />
        </Collapsibles >

      </form>

    )
  }
}

export default Form;
