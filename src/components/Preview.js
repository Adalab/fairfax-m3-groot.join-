import React, { Component } from "react";
import Reset from "./Reset";
import PropTypes from "prop-types";
import groot from "./../images/groot.jpeg";

class Preview extends Component {
  render() {
    const theme =  (palette) => {
      if (parseInt(palette) === 1) {
        return 'theme--green';
      } else if (parseInt(palette) === 2) {
        return 'theme--red';
      } else if (parseInt(palette) === 3) {
        return 'theme--grey';
      }
    }
    const preview = (
      <aside className={`section__preview ${theme(this.props.palette)}`}>
        <div>
          <Reset handleResetClick={this.props.handleResetClick} />
          <section className="card__preview ">
            <p className="name">
              {this.props.name ? this.props.name : "Nombre Apellido"}
            </p>
            <p className="job">
              {this.props.job ? this.props.job : "Front-end developer"}
            </p>
            <div className="card__photo" style={{backgroundImage: `url(${this.props.photo || groot})`}} />
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
                <a className="social__button github" href={this.props.github} target="_blank">
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
