import React, { Component } from "react";
import Input from "./Input";

class FormFill extends Component {
  render() {
    const { functionFromForm } = this.props;
    const { value } = this.props;

    return (
      <fieldset className="form__fieldset">
        <div className="fieldset__title trigger__fill">
          <i className="far fa-keyboard form__icons" />
          <legend className="fieldset__title-text">Rellena</legend>
          <i className="form__arrow-icons arrow2 fas fa-chevron-down" />
        </div>
        <div className="fieldset__fill-container wrapper__fill">
          <Input
            id="name"
            label="Nombre completo"
            type="text"
            placeholder="Ej: Mary Fairfax"
            value={value}
            functionFromFormFill={functionFromForm('name')}
          />
          <Input
            id="position"
            label="Puesto"
            type="text"
            placeholder="Ej: Front-end developer"
            value={value}
            functionFromFormFill={functionFromForm('job')}
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
            functionFromFormFill={functionFromForm('phone')}
          />
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="Ej: mary-fairfax@gmail.com"
            functionFromFormFill={functionFromForm('email')}
          />
          <Input
            id="linkedin"
            label="Linkedin"
            type="url"
            placeholder="Ej: https://linkedin.com/in/mary.fairfax"
          />
          <Input
            id="github"
            label="Github"
            type="url"
            placeholder="Ej: https://github.com/mary-fairfax"
          />
        </div>
      </fieldset>
    );
  }
}

export default FormFill;
