import React, { Component } from 'react';
import iconTwitter from './../images/twitter.png'



class ShareTwitter extends Component {
    render() {
        const urlBack = this.props.stateUrl || this.props.stateError;
        console.log("entra en sharetwitter");
        console.log(urlBack);

        // if (this.props.loading === true) {
        //     console.log("entra en el if de loading");
        //     return <p>Loading...</p>
        // }

        return (
            <section className={`align_share align_share_text ${this.props.showTwitter}`}>
                <p>{this.props.loading === true ? <p>loading...</p> : ''}</p>
                <p className="card-create">La tarjeta ha sido creada</p>
                <p>
                    <a className="card-link" href={urlBack}>{urlBack}</a>
                </p>
                <div className="align_share">
                    <a
                        className="twitter-share-button"
                        href={'https://twitter.com/intent/tweet?text= Mirad%20que%20tarjeta%20más%20chachi%20he%20creado%20con%20la%20aplicación%20"Awesome%20Profile-cards"&url=' + urlBack}
                        data-size="large"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="icon__twitter"
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