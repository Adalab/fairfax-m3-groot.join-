import React, { Component } from 'react';


class Collapsibles extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      open: false,
    }
  }

  handleClick() {
    this.setState((prevState, props) => {
      let nextState;
      if (prevState.open) {
        nextState = false;
      } else {
        nextState = true;
      }

      return {
        open: nextState,
      };
    });
  }

  render() {
    const arrowStyling = this.state.open ? "fa-chevron-up" : "fa-chevron-down";
    const showContent = !this.state.open ? "hide" : "";
    return (
      <React.Fragment>
        <div onClick={this.handleClick} className="form__fieldset fieldset__title trigger__design">
            <i className={this.props.icon}></i>
            <legend className="fieldset__title-text">{this.props.name}</legend>
            <i className={`fas ${arrowStyling} form__arrow-icons arrow1`}></i>
        </div>
        <div className={showContent}>
          {this.props.children}
        </div>
      </ React.Fragment>
    );
  }
}

export default Collapsibles;
