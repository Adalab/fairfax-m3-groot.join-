import React, { Component } from 'react';

class Preview extends Component {
    render() {
        const name = (this.props.card.name !== '') ? this.props.card.name : 'Nombre Apellido';
        const job = (this.props.card.job !== '') ? this.props.card.job : 'Front-end developer';
        const preview = (
            <aside className="section__preview theme--green">
                <div>  
                    <button className="button__reset">
                        <i className="far fa-trash-alt"></i>
                        Reset
                    </button>
                    <section className="card__preview ">
                        <p className="name">{name}</p>
                        <p className="job">{job}</p>
                        <div className="card__photo js__profile-image"></div>
                        <ul className="social__links">
                            <li>
                                <a className="social__button phone__icon" href={this.props.card.phone} title={this.props.card.phone}>
                                    <i className="fas fa-mobile-alt"></i>
                                </a>
                            </li>
                            <li>
                                <a className="social__button buttonMail" href={`mailto:${this.props.card.email}`}>
                                    <i className="far fa-envelope"></i>
                                </a>
                            </li>
                            <li>
                                <a className="social__button linkedin" href={`https://www.linkedin.com/in/${this.props.card.linkedin}`} target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a className="social__button github" href={`https://github.com/${this.props.card.github}`} target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github-alt"></i>
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>    
            </aside>
        );
        return preview;
    }
}

export default Preview;