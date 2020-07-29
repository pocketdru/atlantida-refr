import React, {Component} from "react";
import Home from "./pages";

import './App.css';

class App extends Component {

  render () {
    let mainComponent = "";
    switch(this.props.location) {
      case "":
        mainComponent = <Home {...this.props}/>;
        break;
      default:
        mainComponent = <Home {...this.props} />;
  
    }
  return (
    
      <div className="container-fluid">
        {mainComponent}
      </div>
   );
  }
}

export default App;
