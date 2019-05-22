import React, { Component } from "react";
import Collapsibles from "./Collapsibles";
import FormDesign from "./FormDesign";
import FormFill from "./FormFill";
import FormShare from "./FormShare";

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleCollapsible = this.handleCollapsible.bind(this);
    this.state = {
      open: 'hide',
    };
  }

  handleCollapsible(event) {
    const name = event.currentTarget.getAttribute('name');
    this.setState((prevState, props) => {
      return {
        open: prevState.open === name ? 'hide' : name,
      };
    });
  }

  render() {
    return (
      <form className="main-form" action="">
        <Collapsibles
          name="Diseña"
          icon="far fa-object-ungroup form__icons"
          handleCollapsible={this.handleCollapsible}
          open={this.state.open}
        >
          <FormDesign
            palette={this.props.palette}
            handleChangeCard={this.props.handleChangeCard}
          />
        </Collapsibles>
        <Collapsibles
          name="Rellena"
          icon="far fa-keyboard form__icons"
          handleCollapsible={this.handleCollapsible}
          open={this.state.open}
        >
          <FormFill
            name={this.props.name}
            job={this.props.job}
            phone={this.props.phone}
            email={this.props.email}
            linkedin={this.props.linkedin}
            github={this.props.github}
            handleChangeCard={this.props.handleChangeCard}
            getImage={this.props.getImage}
            photo={this.props.photo}
          />
        </Collapsibles>
        <Collapsibles
          name="Comparte"
          icon="fas fa-share-alt form__icons"
          handleCollapsible={this.handleCollapsible}
          open={this.state.open}
        >
          <FormShare card={this.props} />
        </Collapsibles>
      </form>
    );
  }
}

export default Form;
