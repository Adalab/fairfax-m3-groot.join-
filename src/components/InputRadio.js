import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputRadio extends Component {
  render() {
    return (
      <label className="theme" htmlFor={`theme-${this.props.id}`}>
        <input
          id={`theme-${this.props.id}`}
          type="radio"
          value={this.props.option}
          name="palette"
          className="theme-radio"
          checked={this.props.palette}
          onChange={this.props.handleChangeCard}
        />
        <div className={`color-box color-${this.props.id}1`}></div>
        <div className={`color-box color-${this.props.id}2`}></div>
        <div className={`color-box color-${this.props.id}3`}></div>
      </label>
    )
  }
}

InputRadio.propTypes = {
  id: PropTypes.string,
  number: PropTypes.number,
}

export default InputRadio;