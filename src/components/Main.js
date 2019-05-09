import React, { Component } from 'react';
import Preview from './Preview';
import Form from './Form';

class Main extends Component {
    render() {
        return (
            <div className="main-page__container">
                <Preview name='Miren' job='Fron-end developer'/>
                <Form />
            </div>
        )
    }
}

export default Main;