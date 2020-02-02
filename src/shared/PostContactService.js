import React from 'react'

const config = {
    SERVER_URL: "localhost:3000/email"
}

const PostContactService = () => {
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