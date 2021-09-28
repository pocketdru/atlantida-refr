import React from "react";
import "./style.css";

function Checkbox() {
  return (
    <div className="row checkbox pb-5">
        <div className="col-md-12">
        <div className="row row-cols-1 row-cols-md-3">
            <div className="col-md-3">
                <div className="card mt-4">
                <img src="/images/about/icon-1.png" className="card-img-top mx-auto" alt="icon"/>
                <div className="card-body">
                    <h5 className="card-title">AWARDS <br/> WINNER</h5>
                    <p className="card-text">54</p>
                </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card mt-4">
                <img src="/images/about/icon-2.png" className="card-img-top mx-auto" alt="icon"/>
                <div className="card-body">
                    <h5 className="card-title">JOBS <br/> DONE</h5>
                    <p className="card-text">1054</p>
                </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card mt-4">
                <img src="/images/about/icon-3.png" className="card-img-top mx-auto" alt="icon"/>
                <div className="card-body">
                    <h5 className="card-title">HAPPY <br/> CLIENTS</h5>
                    <p className="card-text">120</p>
                </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card mt-4">
                <img src="/images/about/icon-4.png" className="card-img-top mx-auto" alt="icon"/>
                <div className="card-body">
                    <h5 className="card-title">reviews <br/> recieved</h5>
                    <p className="card-text">54</p>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  );
}
export default Checkbox;