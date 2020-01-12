import React from 'react';
import ImageGallery from 'react-image-gallery';
import {imagesObjects} from '../../imagePathsObject'
import avengersPoster from '../common/images/Avengers_poster.jpg'
import ben3 from '../common/images/ben_3.jpg'

function Gallery() {
    const images = imagesObjects
/*
    const images = [
        { 
            original: avengersPoster,
            thumbnail: avengersPoster,
        },
        { 
            original: ben3,
            thumbnail: ben3,
        },
    ]
*/
    
    console.log("IMAGES: ", images)
  return (
    <div className="Gallery">
        <h2>Gallery</h2>
        <p>Here's his gallery boiiiiiii</p>
        <ImageGallery items={images} />;
      
    </div>
  );
}

export default Gallery;