import React, { Component } from 'react';
import './App.css';

class App extends Component {
 constructor(){
   super();

   this.state = {
     States: []
   }
 }

 componentDidMount(){
  fetch('/Alabama')
    .then(res => res.json())
    .then(States => this.setState({States}, () => console.log('States fetched', States)));
}

 
  render() {
    return (
      <div className="States Crimes">
      </div>
    );
  }
}

export default App;
