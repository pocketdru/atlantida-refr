import React from "react";
import "./style.css";
import WavySvg from "../Waves";

function Blog() {
    return(
        <section className="blog">
            <div className="container-fluid pt-5">
                <div className="row">
                <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <div>
                                    <h2 className="card-title text-center">Blog
                                    <span><WavySvg/></span></h2>
                                    <p className="card-text text-center">Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. </p>
                                </div>
                            </div>
                        </div>
                        <div className="row gallery mt-5">
                            <div className="col-md-3 col-sm-6 p-0">
                                <img src="/images/blog/Image2.png" className="img mw-auto" alt="gallery-photo"/>
                                    <div className="card">
                                        <div className="card-body">
                                            <p className="card-text">14 Aug 2015 / By Admin</p>
                                            <p className="card-title">Donec id lobortis tellus Maecenas.</p>
                                            <p className="card-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ipsum pulvinar, consequat ipsum non, sodales augue. Donec dapibus ipsum rutrum congue egestas. Curabitur fringilla tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur fringilla tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                        </div>
                                    </div>
                            </div>
                            <div className="col-md-3 col-sm-6 p-0">
                                    <div className="card">
                                        <div className="card-body">
                                            <p className="card-text">14 Aug 2015 / By Admin</p>
                                            <p className="card-title">Donec id lobortis tellus Maecenas.</p>
                                            <p className="card-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ipsum pulvinar, consequat ipsum non, sodales augue. Donec dapibus ipsum rutrum congue egestas. Curabitur fringilla tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur fringilla tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                        </div>
                                    </div>
                                <img src="/images/blog/Image4.png" className="img mw-auto" alt="gallery-photo"/>
                            </div>
                            <div className="col-md-3 col-sm-6 p-0">
                                <img src="/images/blog/Image5.png" className="img mw-auto" alt="gallery-photo"/>
                                    <div className="card">
                                        <div className="card-body">
                                            <p className="card-text">14 Aug 2015 / By Admin</p>
                                            <p className="card-title">Donec id lobortis tellus Maecenas.</p>
                                            <p className="card-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ipsum pulvinar, consequat ipsum non, sodales augue. Donec dapibus ipsum rutrum congue egestas. Curabitur fringilla tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur fringilla tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                        </div>
                                    </div>
                            </div>
                            <div className="col-md-3 col-sm-6 p-0">
                                    <div className="card">
                                        <div className="card-body">
                                            <p className="card-text">14 Aug 2015 / By Admin</p>
                                            <p className="card-title">Donec id lobortis tellus Maecenas.</p>
                                            <p className="card-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ipsum pulvinar, consequat ipsum non, sodales augue. Donec dapibus ipsum rutrum congue egestas. Curabitur fringilla tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur fringilla tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                        </div>
                                    </div>
                                <img src="/images/blog/Image6.png" className="img mw-auto" alt="gallery-photo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;