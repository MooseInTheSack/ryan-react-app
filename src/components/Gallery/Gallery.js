import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import {imagesObjects} from '../../imagePathsObject'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

function Gallery(props) {

  let images = imagesObjects

  for (let image of images) {
    Object.assign(image, {img: image.thumbnail, author: 'test'})
  }
    
  const classes = useStyles

  return (

    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {images.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1} rows={tile.rows || 3}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default Gallery