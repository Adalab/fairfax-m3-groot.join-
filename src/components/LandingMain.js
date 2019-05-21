import React from "react";
import { Link } from "react-router-dom";

class LandingMain extends React.Component {
  render() {
    return (
      <main className="main__container">
        <h1 className="main__title">Crea tu tarjeta de visita</h1>
        <h2 className="main__subtitle">
          Crea mejores contactos profesionales de forma fácil y cómoda
        </h2>
        <ul className="main__list">
          <li className="list__item">
            <i className="far fa-object-ungroup landing__icons" />
            <p>Diseña</p>
          </li>
          <li className="list__item">
            <i className="far fa-keyboard landing__icons" />
            <p>Rellena</p>
          </li>
          <li className="list__item">
            <i className="fas fa-share-alt landing__icons" />
            <p>Comparte</p>
          </li>
        </ul>
        <Link to="/mainpage" className="button__start">
          Comenzar
        </Link>
      </main>
    );
  }
}

export default LandingMain;
