import React from "react";
import "./style.css";
import WavySvg from "../Waves";
import Border from "./Border";

function Services() {
  return (
    <section className="services">
      <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <div>
                    <h2 className="card-title text-center">Services
                      <span><WavySvg/></span></h2>
                      <p className="card-text text-center">Donec aliquet, ipsum ut lobortis facilisis, nisi ligula aliquam odio, ut vehicula odio lorem in erat. Quisque quam ipsum, commodo non condimentum a, fermentum id sapien. Pellentesque sit amet sem neque. </p>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-sm-6 col-md-3">
                  <div className="card card-1">
                    <div className="card-body">
                      <h5 className="card-title">GRAPHIC<br/>DESIGN</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ipsum pulvinar, consequat ipsum non, sodales augue. Donec dapibus ipsum rutrum congue egestas. Curabitur fringilla tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    </div>
                    <Border/>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="card card-2">
                    <div className="card-body">
                      <h5 className="card-title">WEBSITE <br/>DESIGN</h5>
                      <p className="card-text">Nunc non sem vitae neque tristique pellentesque. Donec vitae vehicula mauris. Proin elementum mauris ut ante tristique rutrum. Quisque tristique, dui iaculis commodo consectetur, libero nibh tincidunt tortor, in sollicitudin arcu tellus non puruslibero nibh tincidunt tortor, in sollicitudin arcu.</p>
                    </div>
                    <Border/>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="card card-3">
                    <div className="card-body">
                      <h5 className="card-title">SEO &amp; <br/> ANALITYCS</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ipsum pulvinar, consequat ipsum non, sodales augue. Donec dapibus ipsum rutrum congue egestas. Curabitur fringilla tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    </div>
                    <Border/>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="card card-4">
                    <div className="card-body">
                      <h5 className="card-title">WORDPRESS <br/> PROGRAMING</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ipsum pulvinar, consequat ipsum non, sodales augue. Donec dapibus ipsum rutrum congue egestas. Curabitur fringilla tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    </div>
                    <Border/>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;


// check everything to the sections !!!