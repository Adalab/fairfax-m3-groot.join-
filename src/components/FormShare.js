import React, { Component } from 'react';
import ShareTwitter from './ShareTwitter';


class FormShare extends Component {
    render() {
        return (
            <fieldset className="form__fieldset">
                <div className="fieldset__share-container form__share ">{/* borramos clase hide */}
                    <button className="button__create" type="button">
                        <i className="far fa-address-card form__card-icon"></i>
                        Crear tarjeta
                     </button>
                    <ShareTwitter />

                </div>
            </fieldset >
        )
    }
}


export default FormShare;