import React, { Component } from 'react';
import Preview from './Preview';
import Form from './Form';

let userCard = {
    name: '',
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
        this.handleUpdateCard = this.handleUpdateCard.bind(this);
        this.state = {
            name: '',
            job: '',
            phone: '',
            email: '',
            linkedin: '',
            github: '',
            photo: '',
            palette: 1
        }
    }

    handleUpdateCard(event, key) {
        console.log(key, event.currentTarget.value);
        this.setState({ [key]: event.currentTarget.value });
        userCard[key] = event.currentTarget.value;
    }

    render() {
        return (
            <div className="main-page__container">
                <Preview card={this.state}/>
                <Form
                    updateCard={this.handleUpdateCard}
                    card={userCard}
                />
            </div>
        )
    }
}

export default Main;