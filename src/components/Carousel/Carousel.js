import React from 'react';
import ImageGallery from 'react-image-gallery';
import {imagesObjects} from '../../imagePathsObject'

function Carousel() {
    const images = imagesObjects
    
  return (
    <div className="Carousel">
        <h2>Carousel</h2>
        <ImageGallery items={images} />;
      
    </div>
  );
}

export default Carousel;