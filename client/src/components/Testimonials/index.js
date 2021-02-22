import React from "react";
import "./style.css";
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';

function Testimonials() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return(
        <section className="testimonials">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="images/testimonials/Background_Image_1.png"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                            <p className="caption">
                                Design Studio and Digital Agency
                                </p>
                                <h3>We are Atlantida</h3>

                                <button type="button" className="btn btn-outline-secondary pl-4 pr-4 mt-3">Get Started</button>
                            </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="images/testimonials/Background_Image_1.png"
                                alt="Second slide"
                            />
                    
                            <Carousel.Caption>
                            <p className="caption">
                                Design Studio and Digital Agency
                                </p>
                                <h3>We are Atlantida</h3>
                                <button type="button" className="btn btn-outline-secondary pl-4 pr-4 mt-3">Get Started</button>
                            </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="images/testimonials/Image2.png"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                            <p className="caption">
                                Design Studio and Digital Agency
                                </p>
                                <h3>We are Atlantida</h3>
                                <button type="button" className="btn btn-outline-secondary pl-4 pr-4 mt-3">Get Started</button>
                            </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;