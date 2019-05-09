import React, {Component} from 'react';

class FormDesign extends Component{
    render(){
        return(
            <fieldset className="form__fieldset">
                <div className="fieldset__title trigger__design">
                    <i className="far fa-object-ungroup form__icons"></i>
                    <legend className="fieldset__title-text">Diseña</legend>
                    <i className="fas fa-chevron-up form__arrow-icons arrow1"></i>
                </div>
                <div className="fieldset__theme-container">
                    <p className="theme__description">Colores</p>
                    <div className="theme-options__container">
                        <label className="theme" for="theme-green">
                            <input id="theme-green" type="radio" value="1" name="palette" className="theme-radio" checked/>
                            <div className="color-box color-green1"></div>
                            <div className="color-box color-green2"></div>
                            <div className="color-box color-green3"></div>
                        </label>
                        <label className="theme" for="theme-red">
                            <input id="theme-red" type="radio" value="2" name="palette" className="theme-radio"/>
                            <div className="color-box color-red1"></div>
                            <div className="color-box color-red2"></div>
                            <div className="color-box color-red3"></div>
                        </label>
                        <label className="theme" for="theme-grey">
                            <input id="theme-grey" type="radio" value="3" name="palette" className="theme-radio"/>
                            <div className="color-box color-grey1"></div>
                            <div className="color-box color-grey2"></div>
                            <div className="color-box color-grey3"></div>
                        </label>
                    </div>
                </div>
            </fieldset>
        );
    }
}

export default FormDesign;