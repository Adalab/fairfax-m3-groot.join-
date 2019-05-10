import React, { Component } from 'react';


class Collapsibles extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Collapsibles;
