import React from "react";
import logo from "./Icon_Logo.png";
import "./style.css";

function Nav() {
  return (
    <div className="container-fluid nav-background">
      <div className="row"> 
      <div className="col-md-12 col-lg-12 col-sm-12">
      <nav className="nav navbar nav-pills flex-column flex-sm-row">
            <a className="navbar-brand" href="#carousel">
                <img src={logo} height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
            </a>
            <a className="navbar-brand flex-sm-fill text-sm-center" href="/">Atlantida</a>    
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
      </div>
    </div>  
  );
}

export default Nav;