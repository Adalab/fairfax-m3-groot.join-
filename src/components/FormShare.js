import React, { Component } from 'react';
import ShareTwitter from './ShareTwitter';


class FormShare extends Component {

    render() {
        const showTwitter = this.props.stateUrl === this.props.stateError ? 'hide' : '';
        return (

            <fieldset className="form__fieldset">
                <div className="fieldset__share-container form__share ">
                    <button onClick={this.props.handleClickCreate} className="button__create" type="button">
                        <i className="far fa-address-card form__card-icon"></i>
                         {` Crear tarjeta`}
                    </button>
                    <div>{this.props.loading === true ? <div class="lds-dual-ring"></div> : ''}</div>
                    <ShareTwitter
                        handleClickCreate={this.props.handleClickCreate}
                        stateUrl={this.props.stateUrl}
                        stateError={this.props.stateError}
                        showTwitter={showTwitter} />

                </div>
            </fieldset >
        )
    }
}


export default FormShare;