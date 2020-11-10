import React from "react";
import "./style.css";
import Carousel from "../Carousel";

function Jumbotron() {
  return (
    <div className="container-fluid">
        <div className="jumbotron jumbotron-fluid p-0 mb-5">
        <div className="container-fluid">
            <Carousel/>
        </div>
        </div>
    </div>
  );
}

export default Jumbotron;