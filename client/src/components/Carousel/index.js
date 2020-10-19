import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import { useState } from 'react';
import "./style.css";

function ControlledCarousel() {

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/Image.png"
            alt="First slide"
          />
          <Carousel.Caption>
          {/* <div className="holder clip">
            <div className="ellipse ellipse1"></div>
            <div className="ellipse ellipse2"></div>
          </div> */}
          <div>
            
          </div>
            <h3>We are Atlantida</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/img-2.png"
            alt="Second slide"
          />
  
          <Carousel.Caption>
          <div className="holder clip">
            <div className="ellipse ellipse1"></div>
            <div className="ellipse ellipse2"></div>
          </div>  
          <div className="loader-container">
            <div className="loader" data-text="loaderloader"></div>
          </div>
            <h3>We are Atlantida</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/img-3.png"
            alt="Third slide"
          />
  
          <Carousel.Caption>
          <div className="holder clip">
            <div className="ellipse ellipse1"></div>
            <div className="ellipse ellipse2"></div>
          </div>  
          <div className="loader-container">
            <div className="loader" data-text="loaderloader"></div>
          </div>
            <h3>We are Atlantida</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/img-4.png"
            alt="Third slide"
          />
  
          <Carousel.Caption>
          <div className="holder clip">
            <div className="ellipse ellipse1"></div>
            <div className="ellipse ellipse2"></div>
          </div>  
          <div className="loader-container">
            <div className="loader" data-text="loaderloader"></div>
          </div>
            <h3>We are Atlantida</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
export default ControlledCarousel;