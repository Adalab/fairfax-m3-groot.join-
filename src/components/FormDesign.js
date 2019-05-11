import React, {Component} from 'react';
import InputRadio from './InputRadio'

class FormDesign extends Component{
    render(){
        return(
            <fieldset className="form__fieldset">
                <div className="fieldset__theme-container">
                    <p className="theme__description">Colores</p>
                    <div className="theme-options__container">
                        <InputRadio id='green' number={1}/>
                        <InputRadio id='red' number={2}/>
                        <InputRadio id='grey' number={3}/>
                    </div>
                </div>
            </fieldset>
        );
    }
}

export default FormDesign;