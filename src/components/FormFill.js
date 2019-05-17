import React, { Component } from "react";
import Input from "./Input";

class FormFill extends Component {
  render() {
    return (
      <fieldset className="form__fieldset">

        <div className="fieldset__fill-container wrapper__fill">
          <Input
            id="name"
            label="Nombre completo"
            type="text"
            placeholder="Ej: Mary Fairfax"
            value={this.props.name}
            handleChangeCard={this.props.handleChangeCard}
          />
          <Input
            id="job"
            label="Puesto"
            type="text"
            placeholder="Ej: Front-end developer"
            value={this.props.job}
            handleChangeCard={this.props.handleChangeCard}
          />
          <label htmlFor="profile-picture" className="title-label">
            Foto de perfil
          </label>
          <input
            type="file"
            id="profile-picture"
            name="photo"
            className="js__profile-upload-btn"
            required
          />{" "}
          {/* borramos clase hide */}
          <div className="js__profile-container">
            <div className="js__profile-preview thumbnail" />
            <button
              type="button"
              className="js__profile-trigger button__add-image"
            >
              Añadir imagen
            </button>
          </div>
          <Input
            id="phone"
            label="Teléfono"
            type="tel"
            placeholder="Ej: 666-55-44-33"
            value={this.props.phone}
            handleChangeCard={this.props.handleChangeCard}
          />
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="Ej: mary-fairfax@gmail.com"
            value={this.props.email}
            handleChangeCard={this.props.handleChangeCard}
          />
          <Input
            id="linkedin"
            label="Linkedin"
            type="url"
            placeholder="Ej: https://linkedin.com/in/mary.fairfax"
            value={this.props.linkedin}
            handleChangeCard={this.props.handleChangeCard}
          />
          <Input
            id="github"
            label="Github"
            type="url"
            placeholder="Ej: https://github.com/mary-fairfax"
            value={this.props.github}
            handleChangeCard={this.props.handleChangeCard}
          />
        </div>
      </fieldset>
    );
  }
}

export default FormFill;
