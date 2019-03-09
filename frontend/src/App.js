import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';
import Cities from './Components/Cities';
import States from'./Components/States';
import Navigation from "./Components/Navigation";

//I changed the App.js to turn in to a router, this code does not need to be touched at all, To edit the States page go to /Components/States.js to edit the Cities page go to /Components/Cities.js.
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
