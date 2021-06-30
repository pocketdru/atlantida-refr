import React from "react";
import "./style.css";
import WavySvg from "../Waves";
import Checkbox from "../Checkbox";

function AboutUs() {
  return (
    <section className="board" id="aboutUs">
    <div className="container">
        <div className="row board">
          <div className="col-md-12">
            <div className="card">
              <img src="/images/board-1.png" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h3 className="card-title text-center mt-5 mb-2">About us
                <span><WavySvg/></span>
                </h3>
                <p className="card-text pr-5 pl-5">Donec aliquet, ipsum ut lobortis facilisis, nisi ligula aliquam odio, ut vehicula odio lorem in erat. Quisque quam ipsum, commodo non condimentum a, fermentum id sapien. Pellentesque sit amet sem neque. Maecenas est enim, sollicitudin sit amet nisi vel, mattis efficitur sapien. Nulla lobortis dui in aliquam placerat. Maecenas commodo odio nec neque imperdiet sagittis. Fusce mauris tellus, vulputate id finibus a, rutrum et justo. Vivamus at eros sed justo laoreet mattis vulputate vel magna. Sed quis pulvinar quam, et tempus purus. Fusce et nisi eget dui hendrerit iaculis. Cras volutpat augue tempor viverra tincidunt. Maecenas interdum scelerisque enim. Aenean interdum leo ac lectus gravida, id tincidunt sem finibus. Curabitur ac arcu blandit, tempus leo id, ultrices ante. </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                  <button type="button" className="btn btn-outline-primary mt-4 mb-3 mr-1">Contact Us</button>
                  <button type="button" className="btn btn-outline-secondary mt-4 mb-3">Portfolio</button>
                </div>
              </div>
          </div>
          </div>
        </div>
        {/* Adding checkbox component  */}
        <Checkbox/>
    </div>
    </section>
  );
}

export default AboutUs;