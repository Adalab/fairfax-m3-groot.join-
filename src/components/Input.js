import React, { Component } from "react";
import PropTypes from "prop-types";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.setInputValue = this.setInputValue.bind(this);
  }

  setInputValue(event) {
      this.setState({
        value: event.target.value
      });
      this.props.functionFromFormFill(event.target.value);
  }
  render() {
    return (
      <React.Fragment>
        <label htmlFor={this.props.id} className="title-label">
          {this.props.label}
        </label>
        <input

          type={this.props.type}
          id={this.props.id}
          name={this.props.id}
          placeholder={this.props.placeholder}
          className="input-box"
          value={this.state.value}
          onChange={this.setInputValue}
          required
      
        />
      </React.Fragment>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'url', 'tel', 'email']).isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default Input;
