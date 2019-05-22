import React, { Component } from "react";
import Preview from "./Preview";
import Form from "./Form";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {
        palette: "1",
        name: "",
        job: "",
        phone: "",
        email: "",
        linkedin: "",
        github: "",
        photo: ""
      },
      url: '',
      error: ''
    };
    this.handleChangeCard = this.handleChangeCard.bind(this);
    this.getImage = this.getImage.bind(this);
    this.handleClickCreate = this.handleClickCreate.bind(this);

  }

  handleClickCreate() {
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
      method: 'POST',
      body: JSON.stringify(this.state.card),
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.success) {
          this.setState({
            url: data.cardURL,
            error: ''
          })
        } else {
          this.setState({
            error: data.error,
            url: ''
          })
        }
      })
      .catch(error => console.log(error));

  }


  getImage(image) {
    this.setState(
      prevState => {
        return {
          card: {
            ...prevState.card,
            photo: image
          }
        };
      },
      () => {
        localStorage.setItem("cardLS", JSON.stringify(this.state.card));
      }
    );
  }

  handleChangeCard(event) {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;
    this.setState(
      prevState => {
        return {
          card: {
            ...prevState.card,
            [name]: value
          }
        };
      },
      () => {
        localStorage.setItem("cardLS", JSON.stringify(this.state.card));
      }
    );
  }

  render() {
    return (
      <div className="main-page__container">
        <Preview
          palette={this.state.card.palette}
          name={this.state.card.name}
          job={this.state.card.job}
          phone={this.state.card.phone}
          photo={this.state.card.photo}
          email={this.state.card.email}
          linkedin={this.state.card.linkedin}
          github={this.state.card.github}
        />
        <Form
          palette={this.state.card.palette}
          name={this.state.card.name}
          job={this.state.card.job}
          phone={this.state.card.phone}
          photo={this.state.card.photo}
          email={this.state.card.email}
          linkedin={this.state.card.linkedin}
          github={this.state.card.github}
          handleChangeCard={this.handleChangeCard}
          getImage={this.getImage}
          handleClickCreate={this.handleClickCreate}
          stateUrl={this.state.url}
          stateError={this.state.error}
        />
      </div>
    );
  }
}

export default Main;
