import React from "react";
import "./style.css";
import WavySvg from "../Waves";
import Sidebar from "../Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function Post() {
    return (
        <section className="post-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row post">
                        <div className="card">
                        <img src="/images/sidebarBlog/Post-1.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Donec id lobortis tellus. Maecenas vel dignissim</h5>
                            <p className="card-text">14 Aug 2015 / By Admin</p>
                                <div className="icons">
                                    <FontAwesomeIcon icon={faCommentDots} />
                                    <p>95</p>
                                    <FontAwesomeIcon icon={faEye}/>
                                    <p>567</p>
                                    <FontAwesomeIcon icon={faBriefcase} />
                                    <p>Branding</p>
                                </div>
                                <p className="card-paragraph mt-4">Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.</p>
                                <p className="card-paragraph mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac consequat erat. Maecenas dignissim, justo sit amet consequat sagittis, libero ipsum elementum nisi, at efficitur tellus ante a nisl. Pellentesque eu imperdiet lacus, quis gravida libero. Vivamus ac est mauris. Sed orci velit, iaculis quis elementum sit amet, lacinia vitae purus. Nam magna nulla, ultrices nec faucibus in, venenatis imperdiet nisi. Aliquam interdum lectus tempus nunc luctus condimentum a vel magna. </p>
                                <p className="card-paragraph mt-4">Aliquam nibh diam, elementum in lorem eu, dictum pretium leo. Nullam condimentum ante at sapien consectetur fringilla. Fusce ut ultricies tortor, eu sagittis elit. Pellentesque pretium, arcu ut consectetur posuere, nulla purus porttitor eros, vel eleifend mi ligula vel ligula. Aenean eget malesuada erat, ut ultricies orci. Sed sed tortor ut lorem semper feugiat vel vel magna. Aliquam fermentum, nunc nec cursus lobortis, odio odio elementum augue, eget rhoncus magna elit ut lorem. Quisque ac quam non purus venenatis lacinia. Donec sit amet posuere ante, pulvinar interdum nibh.</p>
                                <p className="card-paragraph-bold p-5 mt-5 mb-5">Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula</p>
                                <p className="card-paragraph mt-4">Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.</p>
                                <p className="card-paragraph mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac consequat erat. Maecenas dignissim, justo sit amet consequat sagittis, libero ipsum elementum nisi, at efficitur tellus ante a nisl. Pellentesque eu imperdiet lacus, quis gravida libero. Vivamus ac est mauris. Sed orci velit, iaculis quis elementum sit amet, lacinia vitae purus. Nam magna nulla, ultrices nec faucibus in, venenatis imperdiet nisi. Aliquam interdum lectus tempus nunc luctus condimentum a vel magna. </p>
                                <p className="card-paragraph mt-4">Aliquam nibh diam, elementum in lorem eu, dictum pretium leo. Nullam condimentum ante at sapien consectetur fringilla. Fusce ut ultricies tortor, eu sagittis elit. Pellentesque pretium, arcu ut consectetur posuere, nulla purus porttitor eros, vel eleifend mi ligula vel ligula. Aenean eget malesuada erat, ut ultricies orci. Sed sed tortor ut lorem semper feugiat vel vel magna. Aliquam fermentum, nunc nec cursus lobortis, odio odio elementum augue, eget rhoncus magna elit ut lorem. Quisque ac quam non purus venenatis lacinia. Donec sit amet posuere ante, pulvinar interdum nibh.</p>
                        </div>
                        </div>
                        </div>
                        <div className="row post icons-post">
                            <div className="col-md-12 icons d-flex justify-content-center">
                                <FontAwesomeIcon icon={faFacebookF} />
                                <FontAwesomeIcon icon={faTwitter} />
                                <FontAwesomeIcon icon={faGooglePlusG} />
                                <FontAwesomeIcon icon={faBehance} />
                                <FontAwesomeIcon icon={faYoutube} />
                            </div>
                        </div>
                        <div className="row comments">
                        <div class="card pt-5 pb-5">
                            <img class="card-img" src="/images/post/img-4.png" alt="blog-img"/>
                                <div class="card-body">
                                    <h5 class="card-title">BRIAN SMITH</h5>
                                <p class="card-text">02 Nivenber 2015 at 11:00 pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Sidebar />
                    
                </div>
            </div>
        </section>
    )
}

export default Post;