import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import History from "../components/History";
import OurTeam from "../components/OurTeam";
import Portfolio from "../components/Portfolio";
import Prices from "../components/Prices";
import Quality from "../components/Quality";

class Home extends Component {
    render() {
        return (
        <div>
            <Nav/>
            <Jumbotron/>
            <AboutUs/>
            <Services/>
            <History/>
            <OurTeam/>
            <Portfolio />
            <Prices />
            <Quality />
        </div>
        ) 
    }
}

  export default Home;