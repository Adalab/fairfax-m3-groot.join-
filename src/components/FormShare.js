import React, { Component } from 'react';
import iconTwitter from './../images/twitter.png'

const urlBack = 'http://urlBack.com';


class FormShare extends Component {
    render() {
        return (
            <fieldset className="form__fieldset">
                <div className="fieldset__share-container form__share ">{/* borramos clase hide */}
                    <button className="button__create" type="button">
                        <i className="far fa-address-card form__card-icon"></i>
                        Crear tarjeta
                     </button>

                    <section
                        class="align_share align_share_text"
                    >
                        <p class="card-create">La tarjeta ha sido creada</p>
                        <p>
                            <a class="card-link" href={urlBack}>{urlBack}</a>
                        </p>
                        <div class="align_share">
                            <a
                                class="twitter-share-button"
                                href={'https://twitter.com/intent/tweet?text= Mirad%20que%20tarjeta%20más%20chachi%20he%20creado%20con%20la%20aplicación%20"Awesome%20Profile-cards"&url=' + urlBack}
                                data-size="large"
                                target="_blank"
                            >
                                <img
                                    class="icon__twitter"
                                    src={iconTwitter}
                                    alt="compatir en Twitter"
                                />Compartir en Twitter
                            </a>
                        </div>
                    </section>




                    {/* <div className="card__created hide">
                        <h2 className="form__share-subtitle">La tarjeta ha sido creada:</h2>
                        {/* <a href="" className="card__link" target="_blank"></a>
                        <a className="share__twitter twitter-share-button-share" href="" target="_blank"> 
                    <i className="fab fa-twitter form__icons-twitter"></i>
                    Compartir en twitter
                    </a> 
                </div> */}
                </div>
            </fieldset >
        )
    }
}


export default FormShare;