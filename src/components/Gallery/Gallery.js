import React from 'react';
import ModalImage from "react-modal-image";
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
      <h3>Gallery</h3>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {images.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1} rows={tile.rows || 3}>
            <ModalImage
              small={tile.img}
              large={tile.img}
              alt={tile.title}
            />
          </GridListTile>
        ))}
      </GridList>

      

    </div>
  );
}

//<img src={tile.img} alt={tile.title} />

export default Gallery