import Carousel from 'react-bootstrap/Carousel'
import React from "react";
import { useState } from 'react';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
    return (
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/components/Carousel/Image.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Crate account</h3>
            <p>To explore all the features of the photo editing.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/components/Carousel/Image.png"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Share your photos with your friends!</h3>
            <p>After editing you can add your photo to the feed.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/components/Carousel/Image.png"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Big choise of filters</h3>
            <p>
              Try all the photo filters yourself.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/components/Carousel/Image.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Big choise of photo effects</h3>
            <p>Try all the photo effects yourself.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/components/Carousel/Image.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Create account</h3>
            <p>To start edit today.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/components/Carousel/Image.png"
            alt="First slide"
          />
          <Carousel.Caption>
          <h3>Explore all the features and effects.</h3>
          <p>You can crop, shrink, add an effect, apply filter, change the size.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
export default ControlledCarousel;