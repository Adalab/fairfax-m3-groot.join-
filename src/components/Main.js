import React, { Component } from 'react';
import Preview from './Preview';
import Form from './Form';

class Main extends Component {
    constructor(props){
        super();
        this.state={
            name:'',
            job:'',
        }
    }
    getInputChildValue = inputKey => (inputValueFromChild) =>{
        console.log('main',inputKey, inputValueFromChild);
        this.setState({
            [inputKey]:inputValueFromChild
        })   
    }
    info = () =>{
        console.log(this);
        
    }
    render() {
        return (
            <div className="main-page__container">
            <button onClick={this.info}>INFO</button>
                <Preview />
                <Form functionFromMain={this.getInputChildValue}/>
            </div>
        )
    }
}

export default Main;