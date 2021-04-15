import React, {Component} from "react";
import { BrowserRouter, Route, Switch  } from "react-router-dom";
import './fonts.css';
import './main.css';
import Home from "./pages";
import BlogPage from "./pages/BlogPage.js";
import SideBarBlogPage from "./pages/SideBarBlogPage.js";
import PostWithSidebar from "./pages/PostWithSidebar.js";

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
      <Route path="/blog_sidebar">
        <SideBarBlogPage />
      </Route>
      <Route path="/post_sidebar">
        <PostWithSidebar />
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
