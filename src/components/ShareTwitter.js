import React, { Component } from 'react';
import iconTwitter from './../images/twitter.png'

const urlBack = 'http://urlBack.com';

class ShareTwitter extends Component {
    render() {
        return (
            <section class="align_share align_share_text">
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
                        rel="noopener noreferrer"

                    >
                        <img
                            class="icon__twitter"
                            src={iconTwitter}
                            alt="compatir en Twitter"
                        />Compartir en Twitter
                </a>
                </div>
            </section>
        );
    }
}

export default ShareTwitter;