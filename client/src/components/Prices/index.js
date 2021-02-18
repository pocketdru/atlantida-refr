import React from "react";
import "./style.css";
import WavySvg from "../Waves";

function Prices() {
    return(
        <section className="prices">
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <div>
                                    <h2 className="card-title text-center">Prices
                                    <span><WavySvg/></span></h2>
                                    <p className="card-text text-center">Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. </p>
                                </div>
                            </div>
                        </div>
                        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Basic</h5>
                                        <div className="scheme-title-img">
                                            <div className="line"></div>
                                            <img src="/images/prices/icon-1.png" alt="gallery-photo" className="scheme-title"/>        
                                        </div>  
                                        <p className="card-text"><span className="dollar" >&#36;</span>10</p>
                                        <ul className="list-group">
                                            <li className="list-group-item">Full Access</li>
                                            <li className="list-group-item">Unlimited Edition</li>
                                            <li className="list-group-item">Full Backup</li>
                                            <li className="list-group-item">Free Tea and Free Mockup</li>
                                            <li className="list-group-item">Several Prices</li>
                                        </ul>
                                        <button type="button" className="btn mt-3">Sign Up</button>

                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Advanced</h5>
                                    <div className="scheme-title-img">
                                        <div className="line"></div>
                                        <img src="/images/prices/icon-2.png" alt="gallery-photo" className="scheme-title"/>        
                                    </div>                                      
                                    <p className="card-text"><span className="dollar">&#36;</span>20</p>
                                    <ul className="list-group">
                                        <li className="list-group-item">Full Access</li>
                                        <li className="list-group-item">Unlimited Edition</li>
                                        <li className="list-group-item">Full Backup</li>
                                        <li className="list-group-item">Free Tea and Free Mockup</li>
                                        <li className="list-group-item">Several Prices</li>
                                    </ul>
                                    <button type="button" className="btn mt-3">Sign Up</button>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Pro</h5>
                                    <div className="scheme-title-img">
                                        <div className="line"></div>
                                        <img src="/images/prices/icon-3.png" alt="gallery-photo" className="scheme-title"/>        
                                    </div>                                      
                                    <p className="card-text"><span className="dollar">&#36;</span>30</p>
                                    <ul className="list-group">
                                    <li className="list-group-item">Full Access</li>
                                        <li className="list-group-item">Unlimited Edition</li>
                                        <li className="list-group-item">Full Backup</li>
                                        <li className="list-group-item">Free Tea and Free Mockup</li>
                                        <li className="list-group-item">Several Prices</li>
                                    </ul>
                                    <button type="button" className="btn mt-3">Sign Up</button>
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