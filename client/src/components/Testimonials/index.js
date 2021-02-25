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
                                src="images/testimonials/img-4.png"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <img className="img-fluid" src="images/testimonials/Images.png"></img>
                                <p className="caption">
                                <span className="quote">"</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu libero ut erat sodales finibus sed in dolor. 
Etiam iaculis, nibh a lobortis egestas, est urna sodales
<span className="quote">"</span>

                                </p>
                                
                            </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="images/testimonials/img-3.png"
                                alt="Second slide"
                            />
                    
                            <Carousel.Caption>
                            <img className="img-fluid" src="images/testimonials/Images.png"></img>

                            <p className="caption">
                            <span className="quote">"</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu libero ut erat sodales finibus sed in dolor. 
Etiam iaculis, nibh a lobortis egestas, est urna sodales
<span className="quote">"</span>

                                </p>
                            </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="images/testimonials/Image2.png"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                            <img className="img-fluid" src="images/testimonials/Images.png"></img>

                            <p className="caption">
                            <span className="quote">"</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu libero ut erat sodales finibus sed in dolor. 
Etiam iaculis, nibh a lobortis egestas, est urna sodales
<span className="quote">"</span>

                                </p>
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