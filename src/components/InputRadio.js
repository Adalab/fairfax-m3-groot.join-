import React, {Component} from 'react';

class InputRadio extends Component{
  render(){
    return(
      <label className="theme" for={`theme-${this.props.id}`}>
        <input id={`theme-${this.props.id}`} type="radio" value={this.props.number} name="palette" className="theme-radio"/>
        <div className={`color-box color-${this.props.id}1`}></div>
        <div className={`color-box color-${this.props.id}2`}></div>
        <div className={`color-box color-${this.props.id}3`}></div>
      </label>
    )
  }
}

export default InputRadio;