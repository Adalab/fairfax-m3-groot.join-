import React, { Component } from 'react';
class FormFill extends Component {
    render() {
        return (
            <fieldset className="form__fieldset">
                <div className="fieldset__title trigger__fill">
                    <i className="far fa-keyboard form__icons"></i>
                    <legend className="fieldset__title-text">Rellena</legend>
                    <i className="form__arrow-icons arrow2 fas fa-chevron-down"></i>
                </div>
                <div className="fieldset__fill-container wrapper__fill hide">
                    <label for="name" className="title-label">Nombre completo</label>
                    <input type="text" id="name" name="name" placeholder="Ej: Mary Fairfax" className="input-box" />

                    <label for="position" className="title-label">Puesto</label>
                    <input type="text" id="position" name="job" placeholder="Ej: Front-end developer" required className="input-box" />

                    <label for="profile-picture" className="title-label">Foto de perfil</label>
                    <input type="file" id="profile-picture" name="photo" className="js__profile-upload-btn hide" value="Añadir imagen" required />
                    <div className="js__profile-container">
                        <div className="js__profile-preview thumbnail"></div>
                        <button type="button" className="js__profile-trigger button__add-image">Añadir imagen</button>
                    </div>

                    <label for="phone" className="title-label">Teléfono</label>
                    <input type="tel" id="phone" name="phone" placeholder="Ej: 666-55-44-33" required className="input-box phone" />

                    <label for="email" className="title-label">Email</label>
                    <input type="email" id="email" name="email" placeholder="Ej: mary-fairfax@gmail.com" required className="input-box input-mail" />

                    <label for="Linkedin" className="title-label">Linkedin</label>
                    <input type="url" id="Linkedin" name="linkedin" className="input-box" placeholder="Ej:https://linkedin.com/in/mary.fairfax" required />

                    <label for="github" className="title-label">Github</label>
                    <input type="url" id="github" className="input-box" name="github" placeholder="Ej: https://github.com/mary-fairfax" />
                </div>
            </fieldset>
        )
    }
}

export default FormFill;