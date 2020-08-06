import React from "react";
import logo from "./Icon_Logo.png";
import "./style.css";
import Carousel from "react-bootstrap/esm/Carousel";

function Nav() {
  return (
    <div className="container">
      <div className="row"> 
      <div className="col-md-12 col-lg-12 col-sm-12">
      <nav className="nav navbar nav-pills flex-column flex-sm-row">
            <a className="navbar-brand" href="#">
                <img src={logo} height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
            </a>
            <a className="navbar-brand flex-sm-fill text-sm-center">Atlantida</a>    
            <a className="nav-link flex-sm-fill text-sm-center" href="/">Home</a>
            <a className="nav-link flex-sm-fill text-sm-center" href="/saved">About</a>
            <a className="nav-link flex-sm-fill text-sm-center" href="/">Services</a>
            <a className="nav-link flex-sm-fill text-sm-center" href="/saved">History</a>
            <a className="nav-link flex-sm-fill text-sm-center" href="/saved">Team</a>
            <a className="nav-link flex-sm-fill text-sm-center" href="/saved">Portfolio</a>
            <a className="nav-link flex-sm-fill text-sm-center" href="/saved">Prices</a>
            <a className="nav-link flex-sm-fill text-sm-center" href="/saved">Blog</a>
            <a className="nav-link flex-sm-fill text-sm-center" href="/">Contact</a>
      </nav>
      </div>
      </div>
    </div>  
  );
}

export default Nav;