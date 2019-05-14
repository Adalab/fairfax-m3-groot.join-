import React, { Component } from 'react';
import Preview from './Preview';
import Form from './Form';

class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            card:{
                palette:'',
                name:'',
                job:'',
                phone:'',
                email:'',
                linkedin:'',
                github:'',
                photo:''
            }
        }
        this.handleChangeCard=this.handleChangeCard.bind(this);
    }
    
    handleChangeCard(event){
        const value = event.currentTarget.value;
        const name = event.currentTarget.name;
        this.setState((prevState)=>{
            return {card:{
                ...prevState.card,
                [name]:value            
            }}
        })
    }

    render() {
        return (
            <div className="main-page__container">
            {/* <button onClick={this.info}>INFO</button> */}
                <Preview 
                    name={this.state.card.name}
                    job={this.state.card.job}
                    phone={this.state.card.phone}
                />
                <Form
                    name={this.state.card.name}
                    job={this.state.card.job}
                    phone={this.state.card.phone}

                 />
            </div>
        )
    }
}

export default Main;