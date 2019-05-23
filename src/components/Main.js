import React, { Component } from 'react'
import Preview from './Preview'
import Form from './Form'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      card: {
        palette: '1',
        name: '',
        job: '',
        phone: '',
        email: '',
        linkedin: '',
        github: '',
        photo: ''
      },
      url: '',
<<<<<<< HEAD
      error: ''
=======
      error: '',
      loading: false
>>>>>>> fbb884d5f4688e2e7f3a8a0f47d184f9ed274fc2
    }
    this.handleChangeCard = this.handleChangeCard.bind(this)
    this.getImage = this.getImage.bind(this)
    this.handleClickCreate = this.handleClickCreate.bind(this)
    this.handleResetClick = this.handleResetClick.bind(this)

  }

  handleResetClick(){
    this.setState({
       card: {
        palette: '1',
        name: '',
        job: '',
        phone: '',
        email: '',
        linkedin: '',
        github: '',
        photo: ''
      }
    })
  }
<<<<<<< HEAD

  handleClickCreate () {
=======
  
  componentDidUpdate(prevProps,prevState){
    localStorage.setItem("cardLS", JSON.stringify(this.state.card))
  }
  componentDidMount(){
    if(localStorage.cardLS){
      const objectFromLS= JSON.parse(localStorage.getItem("cardLS"));
      this.setState({
        card: objectFromLS
      })
    }
  }
  
  handleClickCreate() {
    this.setState({
      loading: true
    })
>>>>>>> fbb884d5f4688e2e7f3a8a0f47d184f9ed274fc2
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
      method: 'POST',
      body: JSON.stringify(this.state.card),
      headers: {
        'content-type': 'application/json'
      }
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
      .catch(error => console.log(error))
  }

<<<<<<< HEAD
  getImage (image) {
=======
  getImage(image) {
>>>>>>> fbb884d5f4688e2e7f3a8a0f47d184f9ed274fc2
    this.setState(
      prevState => {
        return {
          card: {
            ...prevState.card,
            photo: image
          }
<<<<<<< HEAD
        }
      },
      () => {
        localStorage.setItem('cardLS', JSON.stringify(this.state.card))
      }
    )
=======
        };
      });
>>>>>>> fbb884d5f4688e2e7f3a8a0f47d184f9ed274fc2
  }

  handleChangeCard (event) {
    const value = event.currentTarget.value
    const name = event.currentTarget.name
    this.setState(
      prevState => {
        return {
          card: {
            ...prevState.card,
            [name]: value
          }
        };
      },
<<<<<<< HEAD
      () => {
        localStorage.setItem('cardLS', JSON.stringify(this.state.card))
      }
    )
=======
    );
>>>>>>> fbb884d5f4688e2e7f3a8a0f47d184f9ed274fc2
  }

  render () {
    return (
      <div className='main-page__container'>
        <Preview
          palette={this.state.card.palette}
          name={this.state.card.name}
          job={this.state.card.job}
          phone={this.state.card.phone}
          photo={this.state.card.photo}
          email={this.state.card.email}
          linkedin={this.state.card.linkedin}
          github={this.state.card.github}
          handleResetClick={this.handleResetClick}
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
    )
  }
}

export default Main
