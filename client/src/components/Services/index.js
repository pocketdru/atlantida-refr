import React from "react";
import "./style.css";
import WavySvg from "../Waves";

function Services() {
  return (
    <div className="container-fluid services pt-5 pb-5">
        {/* <div className="row">
          <div className="col-md-12">
            <h1 className="text-center mt-3">Services
              <span><WavySvg/></span>
            </h1>
            <p className="">Donec aliquet, ipsum ut lobortis facilisis, nisi ligula aliquam odio, ut vehicula odio lorem in erat. Quisque quam ipsum, commodo non condimentum a, fermentum id sapien. Pellentesque sit amet sem neque.</p>
          </div>
        </div> */}
        <div className=" row card bg-dark text-white">
          <div className="col-md-12">
        <img src="/images/services/Background.png" class="card-img" alt="..."/>
        <div className="card-img-overlay">
          <h2 className="card-title text-center">Services
              <span><WavySvg/></span></h2>
          <p className="card-text text-center">Donec aliquet, ipsum ut lobortis facilisis, nisi ligula aliquam odio, ut vehicula odio lorem in erat. Quisque quam ipsum, commodo non condimentum a, fermentum id sapien. Pellentesque sit amet sem neque. </p>
        </div>
      </div>
      </div>
        <div className="row"></div>
    </div>
  );
}

export default Services;