import React from "react";
import "./style.css";
import Carousel from "../Carousel";

function Jumbotron() {
  return (
    <section className="jumbotron-carousel">
      <div className="container-fluid p-0">
          <div className="jumbotron jumbotron-fluid p-0 mb-5">
              <Carousel/>
          </div>
      </div>
    </section>
  );
}

export default Jumbotron;