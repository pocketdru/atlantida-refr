import React from "react";
import "./style.css";
import WavySvg from "../Waves";

function Prices() {
    return(
        <section className="prices">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <div>
                                    <h2 className="card-title text-center">Prices
                                    <span><WavySvg/></span></h2>
                                    <p className="card-text text-center">Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. </p>
                                    <p className="card-text text-center"><i>Hover the cards below</i></p>
                                </div>
                            </div>
                        </div>
                        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                            <div className="col">
                                <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Basic</h5>
                                    <img src="/images/prices/icon-1.png" id="test" alt="gallery-photo" className=""/>                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Advanced</h5>
                                    <img src="/images/prices/icon-2.png" alt="gallery-photo" className="scheme-title scheme-title-img p-3"/>                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Pro</h5>
                                    <img src="/images/prices/icon-3.png" alt="gallery-photo" className="scheme-title scheme-title-img p-3"/>                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Prices;