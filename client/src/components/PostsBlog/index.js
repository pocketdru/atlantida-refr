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
        <section className="PostsBlog-container">
            <div className="container">
                <div className="row">
                <div className="col-md-9 PostsBlog">
                <div className="card">
                    <img src="/images/sidebarBlog/Post-1.png" className="card-img-top" alt="..." />
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
                            <p class="card-paragraph mt-4">Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.</p>
                            <a href="#" className="btn mt-3">Read More</a>
                    </div>
                </div>
                <div className="card">
                    <img src="/images/sidebarBlog/Post-2.png" className="card-img-top" alt="..." />
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
                            <p class="card-paragraph mt-4">Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.</p>
                            <a href="#" className="btn mt-3">Read More</a>
                    </div>
                    </div>           
                <div className="card">
                    <img src="/images/sidebarBlog/Post-3.png" className="card-img-top" alt="..." />
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
                                <p class="card-paragraph mt-4">Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.</p>
                                <a href="#" className="btn mt-3">Read More</a>
                    </div>
                </div>                
                <div className="card">
                    <img src="/images/sidebarBlog/Post-4.png" className="card-img-top" alt="..."/>
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
                                <p class="card-paragraph mt-4">Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.</p>
                                <a href="#" className="btn mt-3">Read More</a>
                    </div>
                </div>                
                <div className="card">
                    <img src="/images/sidebarBlog/Post-5.png" className="card-img-top" alt="..."/>
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
                                <p class="card-paragraph mt-4">Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.</p>
                                <a href="#" className="btn mt-3">Read More</a>
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