import React, { Component } from 'react';
import Input from './Input';

class FormFill extends Component {

    render() {
        return (
            <fieldset className="form__fieldset">
                <div className="fieldset__title trigger__fill">
                    <i className="far fa-keyboard form__icons"></i>
                    <legend className="fieldset__title-text">Rellena</legend>
                    <i className="form__arrow-icons arrow2 fas fa-chevron-down"></i>
                </div>
                <div className="fieldset__fill-container wrapper__fill">
                
                    <Input 
                        id="name"
                        label="Nombre completo"
                        type="text"
                        placeholder="Ej: Mary Fairfax"
                        updateCard={this.props.updateCard}
                    />

                    <Input 
                        id="job"
                        label="Puesto"
                        type="text"
                        placeholder="Ej: Front-end developer"
                        updateCard={this.props.updateCard}
                    />

                    <label htmlFor="profile-picture" className="title-label">Foto de perfil</label>
                    <input type="file" id="profile-picture" name="photo" className="js__profile-upload-btn" required /> {/* borramos clase hide */}
                    <div className="js__profile-container">
                        <div className="js__profile-preview thumbnail"></div>
                        <button type="button" className="js__profile-trigger button__add-image">Añadir imagen</button>
                    </div>

                    <Input 
                        id="phone"
                        label="Teléfono"
                        type="tel"
                        placeholder="Ej: 666-55-44-33"
                        updateCard={this.props.updateCard}
                    />

                    <Input 
                        id="email"
                        label="Email"
                        type="email"
                        placeholder="Ej: mary-fairfax@gmail.com"
                        updateCard={this.props.updateCard}
                    />

                    <Input 
                        id="linkedin"
                        label="Linkedin"
                        type="url"
                        placeholder="Ej: https://linkedin.com/in/mary.fairfax"
                        updateCard={this.props.updateCard}
                    />

                    <Input 
                        id="github"
                        label="Github"
                        type="url"
                        placeholder="Ej: https://github.com/mary-fairfax"
                        updateCard={this.props.updateCard}
                    />

                </div>
            </fieldset>
        )
    }
}

export default FormFill;