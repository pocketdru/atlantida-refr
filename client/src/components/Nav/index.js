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
            <a className="navbar-brand flex-sm-fill text-sm-center" href="#carousel">Atlantida</a>    
            <a className="nav-link flex-sm-fill text-sm-center" href="#carousel">Home</a>
            <a className="nav-link flex-sm-fill text-sm-center" href="#aboutUs">About</a>
            <a className="nav-link flex-sm-fill text-sm-center" href="#services">Services</a>
            <a className="nav-link flex-sm-fill text-sm-center" href="#history">History</a>
            <a className="nav-link flex-sm-fill text-sm-center" href="#ourteam">Team</a>
            <a className="nav-link flex-sm-fill text-sm-center" href="#portfolio">Portfolio</a>
            <a className="nav-link flex-sm-fill text-sm-center" href="#prices">Prices</a>
            <a className="nav-link flex-sm-fill text-sm-center" href="blog">Blog</a>
            <a className="nav-link flex-sm-fill text-sm-center" href="#forms">Contact</a>
      </nav>
      </div>
      </div>
    </div>  
  );
}

export default Nav;