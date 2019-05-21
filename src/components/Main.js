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
      }
    };
    this.handleChangeCard = this.handleChangeCard.bind(this);
    this.getImage = this.getImage.bind(this);
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
    console.log(name, value);
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
        {/* <button onClick={this.info}>INFO</button> */}
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
        />
      </div>
    );
  }
}

export default Main;
