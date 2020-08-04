import React from "react";
import logo from "./Icon_Logo.png";
import "./style.css";
import Carousel from "react-bootstrap/esm/Carousel";

function Nav() {
  return (
    <div className="container">
      <div className="row"> 
      <div className="col-md-12 col-lg-12 col-sm-12">
      <nav className="nav navbar d-flex">
          <a className="navbar-brand col-md-4 col-sm-12" href="#">
              <img src={logo} height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
          </a>
          <span className="col-md-7">
            <a className="navbar-brand mr-5 ml-0">Atlantida</a>    
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/saved">About</a>
            <a className="nav-link" href="/">Services</a>
            <a className="nav-link" href="/saved">History</a>
          </span>
          <span className="col-md-12">
            <a className="nav-link" href="/saved">Team</a>
            <a className="nav-link" href="/saved">Portfolio</a>
            <a className="nav-link" href="/saved">Prices</a>
            <a className="nav-link" href="/saved">Blog</a>
            <a className="nav-link" href="/">Contact</a>
          </span>
      </nav>
      </div>
      </div>
    </div>
  );
}

export default Nav;