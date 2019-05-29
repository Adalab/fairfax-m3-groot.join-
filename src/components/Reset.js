import React from 'react'

class Reset extends React.Component {
  render () {
    return (
      <button onClick={this.props.handleResetClick} className='button__reset'>
        <i className='far fa-trash-alt' />
         {` Reset`}
      </button>
    )
  }
}

export default Reset
