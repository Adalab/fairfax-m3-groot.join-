import React, { Component } from 'react';
import Collapsibles from './Collapsibles';
import FormDesign from './FormDesign';
import FormFill from './FormFill';
import FormShare from './FormShare';

class Form extends Component {

  render() {

    return (
      < form className="main-form" action="">

        <Collapsibles name="Diseña" icon="far fa-object-ungroup form__icons">
          <FormDesign color={this.palette}/>
        </ Collapsibles >
        <Collapsibles name="Rellena" icon="far fa-keyboard form__icons">
          <FormFill name={this.props.name} job={this.props.job} phone={this.props.phone} email={this.props.email} linkedin={this.props.linkedin}/>
        </ Collapsibles >
        <Collapsibles name="Comparte" icon="fas fa-share-alt form__icons">
          <FormShare card={this.props} />
        </Collapsibles >

      </form>

    )
  }
}

export default Form;
