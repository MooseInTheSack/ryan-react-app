import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { postEmail } from '../../shared/PostContactService'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 400,
    },
  },
  email: {
    width: 200,
  }
}));

function Contact() {

  const [values, setValues] = useState({email: '', body: ''})

  const handleSubmit = () => {
    //alert(`just submitted. values = ${JSON.stringify(values)}`)
    postEmail('test subject', values.body)
  }

  const handleInputChange = e => {
    const {name, value} = e.target
    setValues({...values, [name]: value})
  }

  const classes = useStyles()

  return (
    <div className="Contact">
        <h2>Contact</h2>
          <p><b>Name:</b> </p> 
          <p>Ryan Kirkpatrick </p>
          <p><b>Email:</b> </p> 
          <p>rfkirkpatrick@gmail.com </p>
          <p>Please feel free to email me with any questions, prospects or anything else.</p>
      
    </div>
  );
}

export default Contact;

/*
<form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
  <TextField 
    id="emailText" 
    label="email" 
    name="email"
    variant="outlined"
    className={classes.email}
    onChange={handleInputChange}
    value={values.email}
  />
  <br />
  <TextField 
    id="bodyText" 
    label="body" 
    name="body"
    variant="outlined" 
    multiline={true} 
    rows={10}
    onChange={handleInputChange}
    value={values.body}
  />
  <br />
  <input disabled={false} type="submit" value="Submit" component={Button} /> 
</form>
*/