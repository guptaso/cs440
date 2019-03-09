import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';
import Cities from './Components/Cities';
import States from'./Components/States';
import Navigation from "./Components/Navigation";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
          <Navigation/> 
          </div> 
          <Route exact path="/" component={States} />
          <Route exact path="/Cities" component={Cities} />
        </div>
      </Router>
    );
  }
}

export default App;
