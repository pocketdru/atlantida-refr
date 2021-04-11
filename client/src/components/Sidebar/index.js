import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
    return (

    <div className="col-md-3 sidebarBlog pt-5 pr-0">
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
            <span className="input-group-text" id="basic-addon1">
            <FontAwesomeIcon icon={faSearch}/>
        </span>
        </div>
        <h5 className="search-title mt-5">Latest POSTS</h5>
            <div className="card pt-5 pb-5">
            <img className="card-img" src="/images/sidebarBlog/Image-1.png" alt="Card image cap"/>

            <div className="card-body">
                <h5 className="card-title">sit amet pretium odio magna ege</h5>
                <p className="card-text">Nullam lobortis, turpis lobortis placerat vehicula, ipsum</p>
            </div>
            </div>
            <div className="card pt-5 pb-5">
            <img className="card-img" src="/images/sidebarBlog/Image-2.png" alt="Card image cap"/>

            <div className="card-body">
                <h5 className="card-title">sit amet pretium odio magna ege</h5>
                <p className="card-text">Nullam lobortis, turpis lobortis placerat vehicula, ipsum</p>
            </div>
            </div>
            <div className="card pt-5 pb-5">
            <img className="card-img" src="/images/sidebarBlog/Image-3.png" alt="Card image cap"/>

            <div className="card-body">
                <h5 className="card-title">sit amet pretium odio magna ege</h5>
                <p className="card-text">Nullam lobortis, turpis lobortis placerat vehicula, ipsum</p>
            </div>
            </div>
            <div className="card pt-5 pb-5">
            <img className="card-img" src="/images/sidebarBlog/Image-4.png" alt="Card image cap"/>

            <div className="card-body">
                <h5 className="card-title">sit amet pretium odio magna ege</h5>
                <p className="card-text">Nullam lobortis, turpis lobortis placerat vehicula, ipsum</p>
            </div>
            </div>
            <h5 className="search-title mt-5">categories</h5>
            <ul className="list-group">
                <li className="list-group-item">Photography</li>
                <li className="list-group-item">Website Design</li>
                <li className="list-group-item">Branding</li>
                <li className="list-group-item">Flyers</li>
                <li className="list-group-item">Uncategories</li>
                <li className="list-group-item">Category 22</li>
            </ul>
            <h5 className="search-title mt-5">ARCHIVES</h5>
            <ul className="list-group">
                <li className="list-group-item">January 2021</li>
                <li className="list-group-item">December 2020</li>
                <li className="list-group-item">November 2020</li>
                <li className="list-group-item">October 2020</li>
                <li className="list-group-item">September 2020</li>
            </ul>
            <h5 className="search-title mt-5 mb-4">FLICKR PHOTOS</h5>
            <img src="/images/sidebarBlog/1.png" className="img-fluid pr-3 pb-3" alt="flickr"/>
            <img src="/images/sidebarBlog/2.png" className="img-fluid pr-3 pb-3" alt="flickr"/>
            <img src="/images/sidebarBlog/3.png" className="img-fluid pr-3 pb-3" alt="flickr"/>
            <br/>
            <img src="/images/sidebarBlog/4.png" className="img-fluid pr-3" alt="flickr"/>
            <img src="/images/sidebarBlog/5.png" className="img-fluid pr-3" alt="flickr"/>
            <img src="/images/sidebarBlog/6.png" className="img-fluid pr-3" alt="flickr"/>
        </div>


    )
}

export default Sidebar;