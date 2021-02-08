import React from "react";
import "./style.css";
import WavySvg from "../Waves";
import Gallery from "../Gallery";

function Portfolio() {
    return (
        <section className="portfolio">
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <div>
                                    <h2 className="card-title text-center">Portfolio
                                    <span><WavySvg/></span></h2>
                                    <p className="card-text text-center">Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-12">
                                <div className="d-grid gap-2 d-md-flex justify-content-md-center" role="group" aria-label="Basic example">
                                    <button type="button" className="btn mr-2 pl-4 pr-4">All</button>
                                    <button type="button" className="btn mr-2 pl-4 pr-4">Website</button>
                                    <button type="button" className="btn mr-2 pl-4 pr-4">Brochures</button>
                                    <button type="button" className="btn pl-4 pr-4">Logos</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Gallery/>
            </div>
        </section>
    )
}

export default Portfolio;