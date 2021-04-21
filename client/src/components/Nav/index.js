import React from "react";
import logo from "./Icon_Logo.png";
import Icons from "../Icons";
import "./style.css";

function Nav() {
  return (
    <section className="nav-background">
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <a className="navbar-brand m-0" href="#carousel">
              <img src={logo} className="d-inline-block" alt="" loading="lazy"/>
          </a>
          <a className="navbar-brand flex-sm-fill text-sm-center" href="/">Atlantida</a>    
        </div>
      <div className="col-md-9 col-lg-8 col-sm-9 p-0">
        <nav className="nav navbar nav-pills d-flex justify-content-center pl-0 pr-0">
          <a className="nav-link flex-sm-fill text-sm-center" href="/">Home</a>
          <a className="nav-link flex-sm-fill text-sm-center" href="/">About</a>
          <a className="nav-link flex-sm-fill text-sm-center" href="/">Services</a>
          <a className="nav-link flex-sm-fill text-sm-center" href="/">History</a>
          <a className="nav-link flex-sm-fill text-sm-center" href="/">Team</a>
          <a className="nav-link flex-sm-fill text-sm-center" href="/">Portfolio</a>
          <a className="nav-link flex-sm-fill text-sm-center" href="/">Prices</a>
          <a className="nav-link flex-sm-fill text-sm-center" href="blog">Blog</a>
          <a className="nav-link flex-sm-fill text-sm-center" href="/">Contact</a>
          </nav>
        </div>
        <div  className="col-md-1">
          <Icons />
        </div>
      </div>
    </div> 
    </section> 
  );
}

export default Nav;