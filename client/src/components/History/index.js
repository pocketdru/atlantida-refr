import React from "react";
import "./style.css";
import WavySvg from "../Waves";
 
function History() {
    return (
        <section className="history">
            <div className="container pt-3 pb-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <div>
                                    <h2 className="card-title text-center">History
                                    <span><WavySvg/></span></h2>
                                    <p className="card-text text-center">In pulvinar, mi at rhoncus condimentum, turpis nisl scelerisque turpis, ut gravida eros tortor non arcu. In eget arcu ante. Curabitur lacinia ultricies ante, eget mattis orci vestibulum sit amet. </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                                <div className="col-md-12 mt-3 mb-4">
                                    <h2 className="scheme-title">2020</h2>
                                </div>
                            <div className="row">
                            <div className="col-md-6">
                                <div className="card mt-3">
                                    <div className="arrow"></div>
                                    <div className="card-body pr-5">
                                        <h5 className="card-title">Donec id lobortis tellus. Maecenas vel dignissim</h5>
                                        <p className="card-text date">07 October 2020</p>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ipsum pulvinar, consequat ipsum non, sodales augue. Donec dapibus ipsum rutrum congue egestas. Curabitur fringilla tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card mt-5">
                                    <div className="card-body pl-5">
                                        <h5 className="card-title">Nam tincidunt, lacus sit amet ultrices </h5>
                                        <p className="card-text date">05 June 2020</p>
                                        <p className="card-text">In pulvinar, mi at rhoncus condimentum, turpis nisl scelerisque turpis, ut gravida eros tortor non arcu. In eget arcu ante. Curabitur lacinia ultricies ante, eget mattis orci vestibulum sit amet. Donec quis faucibus lorem. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card mt-4">
                                    <div className="card-body pr-5">
                                        <h5 className="card-title">Donec quis faucibus lorem</h5>
                                        <p className="card-text data">07 May 2020</p>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ipsum pulvinar, consequat ipsum non, sodales augue. Donec dapibus ipsum rutrum congue egestas. Curabitur fringilla tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 pt-4">
                                <div className="card mt-5" id="white">
                                    <div className="card-body pl-5">
                                        <h5 className="card-title">Nunc efficitur laoreet turpis sed auctor.</h5>
                                        <p className="card-text data" id="white">02 April 2020</p>
                                        <p className="card-text" id="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ipsum pulvinar, consequat ipsum non, sodales augue. Donec dapibus ipsum rutrum congue egestas. Curabitur fringilla tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                        Praesent id augue in risus molestie euismod molestie id augue. Suspendisse a libero porttitor, lobortis eros ac, varius velit. Praesent sed eros at elit suscipit laoreet vitae condimentum risus.</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                                <div className="col-md-12 mt-5 mb-4">
                                    <h2 className="scheme-title">2019</h2>
                                </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card mt-3">
                                        <div className="card-body pr-5">
                                            <h5 className="card-title">Donec id lobortis tellus. Maecenas vel dignissim</h5>
                                            <p className="card-text data">07 October 2019</p>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ipsum pulvinar, consequat ipsum non, sodales augue. Donec dapibus ipsum rutrum congue egestas. Curabitur fringilla tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card mt-5">
                                        <div className="card-body pl-5">
                                            <h5 className="card-title">Nam tincidunt, lacus sit amet ultrices </h5>
                                            <p className="card-text data">05 June 2019</p>
                                            <p className="card-text">In pulvinar, mi at rhoncus condimentum, turpis nisl scelerisque turpis, ut gravida eros tortor non arcu. In eget arcu ante. Curabitur lacinia ultricies ante, eget mattis orci vestibulum sit amet. Donec quis faucibus lorem.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-4 pt-1">
                                <h2 className="scheme-title">2019</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default History;