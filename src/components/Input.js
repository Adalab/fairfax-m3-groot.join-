import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Input extends Component {

  render() {
    return (
      <React.Fragment>
        <label htmlFor={this.props.id} className="title-label">{this.props.label}</label>
        <input 
          type={this.props.type}
          id={this.props.id}
          name={this.props.id}
          placeholder={this.props.placeholder}
          className="input-box"
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