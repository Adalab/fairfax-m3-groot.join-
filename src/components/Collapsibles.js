import React, { Component } from 'react';

class Collapsibles extends Component {



  render() {
    const arrowStyling = this.props.open === this.props.name ? "fa-chevron-up" : "fa-chevron-down";
    const showContent = this.props.open !== this.props.name ? "hide" : "";
    return (
      <React.Fragment>
        <div onClick={this.props.handleCollapsible} name={this.props.name} className="form__fieldset fieldset__title trigger__design">
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
