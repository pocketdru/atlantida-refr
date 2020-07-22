
import React from "react";
import logo from "./Icon_Logo.png";
import "../style.css";
import Jumbotron from "../Jumbotron";

function Nav() {
  return (
    <div className="container">
      <nav className="nav navbar d-flex">
          <a className="navbar-brand" href="#">
              <img src={logo} height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
          </a>
          <a className="navbar-brand mr-5 ml-0">Atlantida</a>
          <a className="nav-link" href="/">Home</a>
          <a className="nav-link" href="/saved">About</a>
          <a className="nav-link" href="/">Services</a>
          <a className="nav-link" href="/saved">History</a>
          <a className="nav-link" href="/saved">Team</a>
          <a className="nav-link" href="/saved">Portfolio</a>
          <a className="nav-link" href="/saved">Prices</a>
          <a className="nav-link" href="/saved">Blog</a>
          <a className="nav-link" href="/">Contact</a>
      </nav>
    </div>
  );
}

export default Nav;