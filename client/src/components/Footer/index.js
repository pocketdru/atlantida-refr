import React from "react";
import "./style.css";
import logo from "./Icon_Logo.png";
import Icons from "../Icons";
import Form from "../Form";

function Footer() {
    return(
        <footer>
            <section className="forms" id="forms">
                <div className="container">
                    <div className="row pt-5 pb-5">
                        <div className="col-md-12">
                            <a className="navbar-brand" href="#carousel">
                                <img src={logo} height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
                            </a>
                            <a className="card-title navbar-brand flex-sm-fill text-sm-center" href="#carousel">Atlantida</a>
                        </div>
                        <div className="col-md-4 mt-4">
                            <p className="card-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ipsum pulvinar, consequat ipsum non, sodales augue. Donec dapibus ipsum rutrum congue egestas. Curabitur fringilla tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>   
                            <h5 className="card-title">ATLANTIDA STUDIO</h5> 
                            <p className="card-paragraph">Steven Bernson, Attorney at Law <br/>
                                1556 Broadway, suite 416 <br/>
                                New York, NY, 10120, USA <br/>
                            </p>
                            <h5 className="card-title">E-mail: elegantflyers@gmail.com
                            +84 956 654 972</h5>
                            <Icons/>
                        </div>
                        <div className="col-md-8 mt-4">
                            <Form />
                        </div>
                    </div>
                    <div className="row pt-4 footer">
                        <div className="col-md-12">
                            <p className="card-paragraph">Copyright &copy; 2015 Atlantida Theme</p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;