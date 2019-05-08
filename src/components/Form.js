import React, {Component} from 'react';
import FormDesign from './FormDesign';
import FormFill from './FormFill';


class Form extends Component{
    render(){
        return(
            <FormDesign />  
            <FormFill />  

        )
    }
}

export default Form;