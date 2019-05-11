import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Input extends Component {

  render() {
    const {
      id,
      label,
      type,
      placeholder,
      updateCard
    } = this.props;
    return (
      <React.Fragment>
        <label htmlFor={id} className="title-label">{label}</label>
        <input 
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          className="input-box"
          onChange={(event) => updateCard(event, id)}
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