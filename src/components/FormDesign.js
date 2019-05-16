import React, { Component } from 'react';
import InputRadio from './InputRadio'

class FormDesign extends Component {
    render() {
        return (
            <fieldset className="form__fieldset">
                <div className="fieldset__theme-container">
                    <p className="theme__description">Colores</p>
                    <div className="theme-options__container">
                        <InputRadio
                            id='green'
                            option={'1'}
                            palette={this.props.palette}
                            checked={'1' === this.props.palette}
                            handleChangeCard={this.props.handleChangeCard}
                        />
                        <InputRadio
                            id='red'
                            option={'2'}
                            palette={this.props.palette}
                            checked={'2' === this.props.palette}
                            handleChangeCard={this.props.handleChangeCard}
                        />
                        <InputRadio
                            id='grey'
                            option={'3'}
                            palette={this.props.palette}
                            checked={'3' === this.props.palette}
                            handleChangeCard={this.props.handleChangeCard}
                        />
                    </div>
                </div>
            </fieldset>
        );
    }
}

export default FormDesign;