import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import Board from "../components/Board";
import Services from "../components/Services";

class Home extends Component {
    render() {
        return (
        <div>
            <Nav/>
            <Jumbotron/>
            <Board/>
            <Services/>
        </div>
        ) 
    }
}

  export default Home;