import React, { Component } from "react";
import PropTypes from "prop-types";

class Preview extends Component {
  render() {
    const preview = (
      <aside className="section__preview theme--green">
        <div>
          <button className="button__reset">
            <i className="far fa-trash-alt" />
            Reset
          </button>
          <section className="card__preview ">
            <p className="name">
              {this.props.name ? this.props.name : "Nombre Apellido"}
            </p>
            <p className="job">
              {this.props.job ? this.props.job : "Front-end developer"}
            </p>
            <div className="card__photo js__profile-image" />
            <ul className="social__links">
              <li>
                <a className="social__button phone__icon" href={`tel:${this.props.phone}`}>
                  <i className="fas fa-mobile-alt" />
                </a>
              </li>
              <li>
                <a
                  className="social__button buttonMail"
                  href={`mailto:${this.props.email}`}
                >
                  <i className="far fa-envelope" />
                </a>
              </li>
              <li>
                <a className="social__button linkedin" href={this.props.linkedin} target="_blank">
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
              <li>
                <a className="social__button github" href="#" target="_blank">
                  <i className="fab fa-github-alt" />
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

Preview.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string,
  phone: PropTypes.number,
  email: PropTypes.string
};

export default Preview;
