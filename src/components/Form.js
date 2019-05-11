import React, { Component } from 'react';
import Collapsibles from './Collapsibles';
import FormDesign from './FormDesign';
import FormFill from './FormFill';
import FormShare from './FormShare';

class Form extends Component {
  render() {
    const {
      name,
      job,
      phone,
      photo,
      tel,
      linkedin,
      github,
      palette,
      email,
    } = this.props.card;

    return (
      < form className="main-form" action="">

        <Collapsibles>
          <FormDesign color={palette}/>
        </ Collapsibles >

        <Collapsibles>
          <FormFill 
            name={name}
            job={job}
            photo={photo}
            linkedin={linkedin}
            github={github}
            phone={phone}
            email={email}
            tel={tel}
            eventText={this.props.eventText}
          />
        </ Collapsibles >

        <Collapsibles card={this.props}>
          <FormShare />
        </Collapsibles >

      </form>

    )
  }
}

export default Form;
