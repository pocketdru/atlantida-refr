import React from "react";
import "./style.css";
import WavySvg from "../Waves";

function Services() {
  return (
    <div className="container-fluid services">
        <div className="row">
          <div className="col-md-12">
            <h1>
              SERVICES
              <span><WavySvg/></span>
            </h1>
          </div>
        </div>
        <div className="row"></div>
    </div>
  );
}

export default Services;