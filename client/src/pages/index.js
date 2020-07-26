import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";


class Home extends Component {
    render() {
        return (
        <div>
            <Nav/>
            <Jumbotron/>
        </div>
        ) 
    }
}

  export default Home;