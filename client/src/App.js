import React, {Component} from "react";
import { BrowserRouter, Route, Switch  } from "react-router-dom";
import Home from "./pages";
import BlogPage from "./pages/BlogPage.js";
import './fonts.css';
import './main.css';

class App extends Component {

  render () {
    return (
      <BrowserRouter>

      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/blog">
        <BlogPage />
      </Route>
      {/* <Route>
        <NoMatch />
      </Route> */}
    </Switch>
    </BrowserRouter>

   );
  }
}

export default App;
