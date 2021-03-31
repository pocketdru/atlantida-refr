import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SidebarBlog() {
    return (

    <div className="col-md-2 sidebarBlog">
        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
            <FontAwesomeIcon icon={faSearch}/>
        </span>
            <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <h5 className="search-title">Latest POSTS</h5>
            <div class="card">
            <img class="card-img" src="..." alt="Card image cap"/>

            <div class="card-body">
                <h5 class="card-title">sit amet pretium odio magna ege</h5>
                <p class="card-text">Nullam lobortis, turpis lobortis placerat vehicula, ipsum</p>
            </div>
            </div>
            <div class="card">
            <img class="card-img" src="..." alt="Card image cap"/>

            <div class="card-body">
                <h5 class="card-title">sit amet pretium odio magna ege</h5>
                <p class="card-text">Nullam lobortis, turpis lobortis placerat vehicula, ipsum</p>
            </div>
            </div>
            <div class="card">
            <img class="card-img" src="..." alt="Card image cap"/>

            <div class="card-body">
                <h5 class="card-title">sit amet pretium odio magna ege</h5>
                <p class="card-text">Nullam lobortis, turpis lobortis placerat vehicula, ipsum</p>
            </div>
            </div>
            <div class="card">
            <img class="card-img" src="..." alt="Card image cap"/>

            <div class="card-body">
                <h5 class="card-title">sit amet pretium odio magna ege</h5>
                <p class="card-text">Nullam lobortis, turpis lobortis placerat vehicula, ipsum</p>
            </div>
            </div>
            <h5 className="search-title">categories</h5>
            <ul class="list-group">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>

        </div>


    )
}

export default SidebarBlog;