import React from "react";
import "./style.css";
import WavySvg from "../Waves";

function Clients() {
    return(
        <section className="clients" id="clients">
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <div>
                                    <h2 className="card-title text-center">Clients
                                    <span><WavySvg/></span></h2>
                                    <p className="card-text text-center">Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. </p>
                                </div>
                            </div>
                        </div>
                        {/* clients icons */}
                        <div className="row row-cols-1 row-cols-md-5 g-5 pt-5 pb-5">
                            <div className="col">
                                <div className="card">
                                    <img src="/images/clients/1.png" className="card-img-top" alt="clients-icon"/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src="/images/clients/2.png" className="card-img-top" alt="clients-icon"/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src="/images/clients/3.png" className="card-img-top" alt="clients-icon"/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src="/images/clients/4.png" className="card-img-top" alt="clients-icon"/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src="/images/clients/5.png" className="card-img-top" alt="clients-icon"/>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients;