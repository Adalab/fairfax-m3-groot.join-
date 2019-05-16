import React, { Component } from 'react';
//import PropTypes from 'prop-types';




class InputImage extends Component {
    constructor(props) {
        // highlight-range{3}
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.openFileDialog = this.openFileDialog.bind(this);
        this.fileUpload = React.createRef();
    }
    handleChange(event) {
        console.log(event.target.value);


        // this.fileUpload.current.files[0].name;

        // return impPrw
        // console.log(this.fileUpload.current.files[0].name);
        // highlight-range{4}
        // event.preventDefault();
        //es un componente no controlado asi que no se relaciona con el estado
        // pintar la preview de la imagen en la minicaja y en la tarjeta
        // console.log(
        //     `Selected file - ${
        //     this.fileInput.current.files[0].name //contiene la ruta de la preview de la imagen
        //     }`
        //     const urlImagePreview = this.fileInput.current.files[0].name;
        // // imagePreview.
        // profileImage.style.backgroundImage = `url(${urlImagePreview})`;

        // );
    }
    openFileDialog() {
        // var fileUploadDom = React.findDOMNode(this.ref.fileInput);
        // fileUploadDom.click();
        this.refs.fileUpload.click();

        //     function fakeFileClick() {
        //     fileField.click();
        // }


        // render() {
        //     return (
        //       <FlatButton
        //         label="Upload file"
        //         onClick={this._openFileDialog}/>
        //       <input
        //         ref="fileUpload"
        //         type="file" 
        //         style={{"display" : "none"}}
        //         onChange={this._handleChange}/>
        //     );
        //   }
    }


    render() {
        // highlight-range{5}
        return (
            <React.Fragment>
                {/*onSubmit={this.handleSubmit}*/}
                < label >
                    <input type="file" ref="fileUpload"
                        //style={{ "display": "none" }}
                        onChange={this.handleChange}
                    />
                    {/* onChange={this.handleChange} */}
                </label >

                <div className="js__profile-container">
                    <div className="js__profile-preview thumbnail"
                        style={{ "backgroundColor": `url(${this.impPrw})` }}></div>
                    {/* //aqui meto la preview pequeña */}

                    <button
                        type="button"
                        className="js__profile-trigger button__add-image"
                        label="Upload file"
                        onClick={this.openFileDialog}
                    >
                        Añadir imagen
                    </button>
                </div>

                {/* <br />
                <button type="submit">Submit</button> */}
            </React.Fragment>
        );
    }
}



//   ReactDOM.render(
//     <FileInput />,
//     document.getElementById('root')
//   );



//   InputRadio.propTypes = {
//     id: PropTypes.string,
//     number:PropTypes.number,
//   }

export default InputImage;


