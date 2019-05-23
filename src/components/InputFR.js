import React from "react";
import ReactFileReader from "react-file-reader";
import groot from './../images/groot.jpeg';

class InputFR extends React.Component {
  constructor(props) {
    super(props);
    this.handleFiles = this.handleFiles.bind(this);
  }

  handleFiles(files) {
    this.props.getImage(files.base64);
  }

  render() {
    return (
      <div className="inputfr" base64={true} handleFiles={this.handleFiles}>
        <label htmlFor="profile-picture" className="title-label title-image-label">Foto de perfil
        </label>
        <div className="js__profile-container">
          <div className="thumbnail" style={{backgroundImage: `url(${this.props.photo || groot})`}}></div>
          <button type="button" className="button__add-image">
            Añadir imagen
          </button>
        </div>
      </div>
    );
  }
}

export default InputFR;
