import React, {Component} from 'react';
import FormDesign from './FormDesign';
import FormFill from './FormFill';
import FormShare from './FormShare';


class Collapsibles extends Component{
    render(){
        return(
            <FormDesign />
            <FormFill />
            <FormShare />

        )
    }
}


export default Collapsibles;