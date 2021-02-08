import React from "react";
import "./style.css";

function Gallery () {
    return(
        <div className="row gallery mt-5">
            <div className="col-md-3 col-sm-6 p-0">
                <img src="/images/gallery/1.png" className="img-fluid mw-auto" alt="gallery-photo"/>
                <img src="/images/gallery/2.png" className="img-fluid mw-auto" alt="gallery-photo"/>
            </div>
            <div className="col-md-3 col-sm-6 p-0">
                <img src="/images/gallery/3.png" className="img-fluid mw-auto" alt="gallery-photo"/>
                <img src="/images/gallery/4.png" className="img-fluid mw-auto" alt="gallery-photo"/>
            </div>
            <div className="col-md-3 col-sm-6 p-0">
                <img src="/images/gallery/5.png" className="img-fluid mw-auto" alt="gallery-photo"/>
                <img src="/images/gallery/6.png" className="img-fluid mw-auto" alt="gallery-photo"/>
            </div>
            <div className="col-md-3 col-sm-6 p-0">
                 <img src="/images/gallery/7.png" className="img-fluid mw-auto" alt="gallery-photo"/>
                 <img src="/images/gallery/8.png" className="img-fluid mw-auto" alt="gallery-photo"/>
            </div>
        </div>

    )
}

export default Gallery;