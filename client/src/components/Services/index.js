import React from "react";
import "./style.css";
import WavySvg from "../Waves";

function Services() {
  return (
    <section className="services">
      <div className="container pt-5 pb-5">
          <div className=" row card bg-dark text-white">
            <div className="col-md-12">
          <div className="card-img-overlay">
            <h2 className="card-title text-center">Services
                <span><WavySvg/></span></h2>
            <p className="card-text text-center">Donec aliquet, ipsum ut lobortis facilisis, nisi ligula aliquam odio, ut vehicula odio lorem in erat. Quisque quam ipsum, commodo non condimentum a, fermentum id sapien. Pellentesque sit amet sem neque. </p>
          </div>
        </div>
        </div>
          <div className="row"></div>
      </div>
    </section>
  );
}

export default Services;


// check everything to the sections !!!