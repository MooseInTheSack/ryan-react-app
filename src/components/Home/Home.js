import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import self_p from '../common/images/self_p_small.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'hidden',
    backgroundColor: 'black',
  },
  self_p: {
    width: '50%',
    height: '50%',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className="Home">
        <h2>My name is Ryan Kirkpatrick</h2>
        <p>I am an aspiring young artist who aims to share his creativity with the world . I specialize in illustrations, figure drawing, inking, and digital. I also have experience in oil painting, 3D modeling and graphic design.</p>
        <img src={self_p} className={classes.self_p} alt="Ryan Kirkpatrick" />
      
    </div>
  );
}

export default Home;
