import React from "react";
import "./style.css";

function Quality() {
    return(
        <section className="quality">
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-2">
                        <img src="/images/quality/Image.png" className="img-fluid" alt="compass"/>
                    </div>
                    <div className="col-md-6 quality-title">
                        <h4 className="text-start">
                        Looking for a quality and affordable for your next project ?
                        </h4>
                        <p className="text-start quality-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu libero ut erat sodales finibus sed in dolor. 
            Etiam iaculis, nibh a lobortis egestas, est urna sodales</p>
                    </div>
                    <div className="col-md-4 buttons-alignment">
                        <button type="button" className="btn">Purchase</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Quality;