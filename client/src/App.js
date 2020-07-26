import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";

import './App.css';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
   );
}

export default App;
