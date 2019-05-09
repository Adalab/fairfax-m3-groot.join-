import React, { Component } from 'react';
class FormShare extends Component {
    render() {
        return (
            <fieldset className="form__fieldset">
                <div className="fieldset__title trigger__share">
                    <i className="fas fa-share-alt form__icons"></i>
                    <legend className="fieldset__title-text">Comparte</legend>
                    <i className="fas fa-chevron-down form__arrow-icons arrow3"></i>
                </div>
                <div className="fieldset__share-container form__share ">{/* borramos clase hide */}
                    <button className="button__create" type="button">
                        <i className="far fa-address-card form__card-icon"></i>
                        Crear tarjeta
                </button>
                    <div className="card__created hide">
                        <h2 className="form__share-subtitle">La tarjeta ha sido creada:</h2>
                        <a href="#" className="card__link" target="_blank"></a>
                        <a className="share__twitter twitter-share-button-share" href="#" target="_blank">
                            <i className="fab fa-twitter form__icons-twitter"></i>
                            Compartir en twitter
                    </a>
                    </div>
                </div>
            </fieldset>
        )
    }
}


export default FormShare;