import React, { Component } from 'react';
import Preview from './Preview';
import Form from './Form';

let userCard = {
    name: 'Antonella',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
    palette: 1
};

class Main extends Component {

    constructor(props) {
        super(props);
        this.handleChangeText = this.handleChangeText.bind(this);
    }

    handleChangeText(newText) {
        console.log(newText);
    }

    render() {
        return (
            <div className="main-page__container">
                <Preview card={userCard}/>
                <Form
                    eventText={this.handleChangeText}
                    card={userCard}
                />
            </div>
        )
    }
}

export default Main;