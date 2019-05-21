const ENDPOINT = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';

const fetchCard = (userData) => {
    fetch(ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'content-type': 'application/json'
        },
    })
        .then(function (resp) { console.log (resp.json()); })
        // .then(function (result) { showURL(result); })
        .catch(function (error) { console.log(error); });
}




// // y recoger la URL generada
// function showURL(result) {
//     if (result.success) {
//         const linkProvided = result.cardURL;
//         return linkProvided;
//         <

//     } else {
//         console.error(`Ha sucedido un error: ${error}`);
//     }

     export default SendToBack;