import React from "react";
import "./style.css";
import "../Sidebar";
import Sidebar from "../Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

function PostsBlog() {
    return (
        <section className="PostsBlog">
            <div className="container">
                <div className="row">
                <div className="col-md-9">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Donec id lobortis tellus. Maecenas vel dignissim</h5>
                        <p class="card-text">14 Aug 2015 / By Admin</p>
                                <div className="icons">
                                    <FontAwesomeIcon icon={faCommentDots} />
                                    <p>95</p>
                                    <FontAwesomeIcon icon={faEye}/>
                                    <p>567</p>
                                    <FontAwesomeIcon icon={faBriefcase} />
                                    <p>Branding</p>
                                </div>
                                <p class="card-paragraph mt-4">Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis.</p>
                                <a href="#" className="btn mt-3">Read More</a>
                    </div>
                    </div>
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>           
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>                
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>                
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                    </div>
                <Sidebar />
            </div>
            </div>
        </section>
    )
}

export default PostsBlog;