import React, { Component } from 'react';
import App from './App';

class Preview extends Component {
    render() {
        const preview = (
            <aside className="section__preview theme--green">
                <div>  
                    <button className="button__reset">
                        <i className="far fa-trash-alt"></i>
                        Reset
                    </button>
                    <section className="card__preview ">
                        <p className="name">{this.props.name}</p>
                        <p className="job">{this.props.job}</p>
                        <div className="card__photo js__profile-image"></div>
                        <ul className="social__links">
                            <li>
                                <a className="social__button phone__icon" href="#">
                                    <i className="fas fa-mobile-alt"></i>
                                </a>
                            </li>
                            <li>
                                <a className="social__button buttonMail" href="#">
                                    <i className="far fa-envelope"></i>
                                </a>
                            </li>
                            <li>
                                <a className="social__button linkedin" href="#" target="_blank">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a className="social__button github" href="#" target="_blank">
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