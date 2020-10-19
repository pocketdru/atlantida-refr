import React from "react";
import "./style.css";
import Carousel from "../Carousel";
import Waves from "../Waves";

function Jumbotron() {
  return (
    <div className="container-fluid ">
        <div className="jumbotron jumbotron-fluid">
        <div className="container-fluid">
            <Carousel/>
            <Waves/>
        </div>
        </div>
    </div>
  );
}

export default Jumbotron;