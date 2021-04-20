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
import MiniBlog from "../components/MiniBlog";
import Clients from "../components/Clients";
import Testimonials from "../components/Testimonials";
import Map from "../components/Map";
import Footer from "../components/Footer";

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
            <MiniBlog />
            <Clients />
            <Testimonials />
            <section id="map" style={{height: "70vh"}}>
                <Map/>
            </section>
            <Footer />
        </div>
        ) 
    }
}

  export default Home;