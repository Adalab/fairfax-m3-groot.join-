import React, {Component} from 'react';
import Preview from './Preview';
import Form from './Form';

class Main extends Component{
    render(){
        return(
            <div className="main-page__container">
                <Preview />
                <Form />
            </div>
        )
    }
}

export default Main;