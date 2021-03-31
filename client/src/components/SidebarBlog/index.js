import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SidebarBlog() {
    return (
        <section className="sidebarBlog">
            <div className="col-md-2">
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faSearch}/>
                </span>
            <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            </div>
        </section>
    )
}

export default SidebarBlog;