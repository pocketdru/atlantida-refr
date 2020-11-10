import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import Board from "../components/Board";
import About from "../components/About";


class Home extends Component {
    render() {
        return (
        <div>
            <Nav/>
            <Jumbotron/>
            <Board/>
            <About/>
        </div>
        ) 
    }
}

  export default Home;