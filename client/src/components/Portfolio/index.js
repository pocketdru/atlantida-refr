import React from "react";
import "./style.css";
import WavySvg from "../Waves";

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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;