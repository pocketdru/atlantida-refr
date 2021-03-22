import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import WavySvg from "../Waves";
import { useState } from 'react';
import "./style.css";

function ControlledCarousel() {

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <section className="carousel" id="carousel">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/Image.png"
              alt="First slide"
            />
            <Carousel.Caption>
            <p className="caption">
              Design Studio and Digital Agency
              </p>
              <WavySvg/>
              <h3>We are Atlantida</h3>
              <WavySvg/>

              <button type="button" className="btn btn-outline-secondary pl-4 pr-4 mt-3">Get Started</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/img-2.png"
              alt="Second slide"
            />
    
            <Carousel.Caption>
            <p className="caption">
              Design Studio and Digital Agency
              </p>
            <WavySvg/>
              <h3>We are Atlantida</h3>
              <WavySvg/>
              <button type="button" className="btn btn-outline-secondary pl-4 pr-4 mt-3">Get Started</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/img-3.png"
              alt="Third slide"
            />
            <Carousel.Caption>
            <p className="caption">
              Design Studio and Digital Agency
              </p>
            <WavySvg/>
              <h3>We are Atlantida</h3>
              <WavySvg/>
              <button type="button" className="btn btn-outline-secondary pl-4 pr-4 mt-3">Get Started</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/img-4.png"
              alt="Third slide"
            />
    
            <Carousel.Caption>
            <p className="caption">
              Design Studio and Digital Agency
              </p>
            <WavySvg/>
              <h3>We are Atlantida</h3>
              <WavySvg/>
              <button type="button" className="btn btn-outline-secondary pl-4 pr-4 mt-3">Get Started</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    );
  }
  
export default ControlledCarousel;