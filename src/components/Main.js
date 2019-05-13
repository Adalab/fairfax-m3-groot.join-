import React, { Component } from 'react';
import Preview from './Preview';
import Form from './Form';

class Main extends Component {
    constructor(props){
        super();
        this.state={
            name:'',
            job:'',
            phone:'',
            email:'',
        }
    }
    getInputChildValue = (inputKey) => (inputValueFromChild) =>{
        // console.log('main',inputKey, inputValueFromChild);
        this.setState({
            [inputKey]:inputValueFromChild
        })   
    }
    // info = () =>{
    //     console.log(this);
        
    // }
    render() {
        return (
            <div className="main-page__container">
            {/* <button onClick={this.info}>INFO</button> */}
                <Preview 
                name={this.state.name}
                job={this.state.job}
                tel={this.state.phone}
                email={this.state.email}/>
                <Form functionFromMain={this.getInputChildValue}/>
            </div>
        )
    }
}

export default Main;