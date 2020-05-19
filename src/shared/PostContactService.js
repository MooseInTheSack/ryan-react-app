//import React from 'react'
var rp = require('request-promise');

export const postEmail = (subject, text) => {
    console.log(`INFO BEGIN postEmail. subject = ${subject}, text=${text}`)
    console.log('process.env: ', process.env)
    if(text === '') {
        return
    }
    var options = {
        method: 'POST',
        //uri: 'http://172.16.1.62:3000/email',
        uri: process.env.RYAN_NODE_SERVER + ':3000/email',
        body: {
            subject: subject || 'Message From ryankirkpatrick.me',
            text: text,
        },
        json: true // Automatically stringifies the body to JSON
    };
     
    rp(options)
    .then(function (parsedBody) {
        console.log(`INFO SUCCESS postEmail. parsedBody = ${parsedBody}`)
        alert(`SUCCESS: parsedBody: ${parsedBody}`)
        // POST succeeded...
    })
    .catch(function (err) {
        // POST failed...
        console.log(`INFO FAILURE postEmail. err = ${err}`)
        alert(`FAILURE: err: ${err}`)
    });
}



export const PostContactService = () => {
    const config = {
        SERVER_URL: "localhost:3000/email"
    }

    const postContactForm = async (newitem) => {
        return fetch(config.SERVER_URL, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newitem)
        })
            .then(response => {
            if (!response.ok) {
                handleResponseError(response);
            }
            return response.json();
            })
            .catch(error => {
                handleError(error);
            });
      }

    const handleResponseError = (response) => {
        throw new Error("HTTP error, status = " + response.status);
    }
    const handleError = (error) => {
        console.log(error.message);
    }
  
    
}
export default PostContactService