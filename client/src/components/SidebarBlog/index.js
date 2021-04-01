import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SidebarBlog() {
    return (

    <div className="col-md-3 sidebarBlog pt-5">
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
            <span className="input-group-text" id="basic-addon1">
            <FontAwesomeIcon icon={faSearch}/>
        </span>
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
                <li class="list-group-item">Photography</li>
                <li class="list-group-item">Website Design</li>
                <li class="list-group-item">Branding</li>
                <li class="list-group-item">Flyers</li>
                <li class="list-group-item">Uncategories</li>
                <li class="list-group-item">Category 22</li>
            </ul>
            <h5 className="search-title">ARCHIVES</h5>
            <ul class="list-group">
                <li class="list-group-item">January 2021</li>
                <li class="list-group-item">December 2020</li>
                <li class="list-group-item">November 2020</li>
                <li class="list-group-item">October 2020</li>
                <li class="list-group-item">September 2020</li>
            </ul>
            <h5 className="search-title">FLICKR PHOTOS</h5>
            <img src="..." class="img-fluid" alt="flickr"/>
            <img src="..." class="img-fluid" alt="flickr"/>
            <img src="..." class="img-fluid" alt="flickr"/>
            <br/>
            <img src="..." class="img-fluid" alt="flickr"/>
            <img src="..." class="img-fluid" alt="flickr"/>
            <img src="..." class="img-fluid" alt="flickr"/>
        </div>


    )
}

export default SidebarBlog;