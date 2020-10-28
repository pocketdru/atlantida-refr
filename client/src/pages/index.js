import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import Board from "../components/Board";


class Home extends Component {
    render() {
        return (
        <div>
            <Nav/>
            <Jumbotron/>
            <Board/>
        </div>
        ) 
    }
}

  export default Home;