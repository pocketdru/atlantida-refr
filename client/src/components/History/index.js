import React from "react";
import "./style.css";
import WavySvg from "../Waves";
 
function History() {
    return (
        <section className="history">
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <div>
                                    <h2 className="card-title text-center">History
                                    <span><WavySvg/></span></h2>
                                    <p className="card-text text-center">In pulvinar, mi at rhoncus condimentum, turpis nisl scelerisque turpis, ut gravida eros tortor non arcu. In eget arcu ante. Curabitur lacinia ultricies ante, eget mattis orci vestibulum sit amet. </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="scheme-title">2020</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default History;