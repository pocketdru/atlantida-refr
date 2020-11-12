import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";

class Home extends Component {
    render() {
        return (
        <div>
            <Nav/>
            <Jumbotron/>
            <AboutUs/>
            <Services/>
        </div>
        ) 
    }
}

  export default Home;