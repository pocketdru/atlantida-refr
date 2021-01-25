import React from "react";
import "./style.css";
import WavySvg from "../Waves";
import { func } from "prop-types";

function OurTeam () {
    return (
        <section className="ourteam">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <div>
                                    <h2 className="card-title text-center">Our Team
                                    <span><WavySvg/></span></h2>
                                    <p className="card-text text-center">Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <img src="/images/ourTeam/Image_1.png" className="card-img-top" alt="..."/>
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text">Last updated 3 mins ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <img src="/images/ourTeam/Image2.png" className="card-img-top" alt="..."/>
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text">Last updated 3 mins ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <img src="/images/ourTeam/Image3.png" className="card-img-top" alt="..."/>
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text">Last updated 3 mins ago</p>
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

export default OurTeam;