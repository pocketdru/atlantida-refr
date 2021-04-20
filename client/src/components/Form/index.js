import React from "react";

function Form() {
    return (
    <form className="row g-3">
        <div className="col-md-6 mb-4">
            <input type="text" className="form-control" placeholder="Name*" required/>
        </div>
        <div className="col-md-6 mb-4">
            <input type="email" className="form-control" placeholder="Email*" required/>
        </div>
        <div className="col-md-6 mb-4">
            <input type="tel" className="form-control" placeholder="Telephone*" required/>
        </div>
        <div className="col-md-6 mb-4">
            <input type="url" className="form-control" placeholder="Website*" required/>
        </div>
        <div className="col-md-12 mb-4">
        <textarea id="w3review" name="w3review" rows="4" cols="100" className="col-md-12 pt-2" placeholder="Message" required>
        </textarea>
        </div>
        <div className="col-md-3">
            <button type="submit" className="btn">Submit</button>
        </div>
    </form>
    )}

export default Form;