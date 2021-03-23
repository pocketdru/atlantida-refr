import React, {Component} from "react";
import Home from "./pages";
import BlogPage from "./pages/BlogPage.js";
import './fonts.css';
import './main.css';

class App extends Component {

  render () {
    let mainComponent = "";
    switch(this.props.location) {
      case "":
        mainComponent = <Home {...this.props}/>;
        break;
      case "/blog":
        mainComponent = <BlogPage {...this.props} />;
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
