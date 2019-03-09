import React, { Component } from 'react';
import './App.css';

/*const divStyle = {
  marginTop: '50px',
  padding: '20px',
  width: 'fit',
  border: '2px solid Black'
};*/

class App extends Component {
 constructor(props){
   super(props);

   this.state = {
     State: '',
     Crime: ''
   }
   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleChange = this.handleChange.bind(this);
   this.handleCrimeChange = this.handleCrimeChange.bind(this);
 }

 handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
})
 }
 handleCrimeChange(e){
  this.setState({
    [e.target.name]: e.target.value
})
 }

 handleSubmit(){
   console.log(this.state.Crime)
   console.log(this.state.State)
  console.log('http://localhost:4000/State/'+ this.state.State + "/" + this.state.Crime)
   fetch('http://localhost:4000/State/'+ this.state.State + "/" + this.state.Crime)
   .then((response) => {
    return response.json()
   }
    .then(response => {
      console.log(response)
    })
  }



 
  render() {
    return (
<div>
        <div className="col-md-3"> State
        <select value={this.state.State} onChange={this.handleChange} name="State" form="Inputform">
          <option value="All">All States</option>
          <option value="Alabama">Alabama</option>
          <option value="Alaska">Alaska</option>
          <option value="Arizona">Arizona</option>
          <option value="Arkansas">Arkansas</option>
          <option value="California">California</option>
          <option value="Colorado">Colorado</option>
          <option value="Connecticut">Connecticut</option>
          <option value="Delaware">Delaware</option>
          <option value="Florida">Florida</option>
          <option value="Georgia">Georgia</option>
          <option value="Hawaii">Hawaii</option>
          <option value="Idaho">Idaho</option>
          <option value="Illinois">Illinois</option>
          <option value="Indiana">Indiana</option>
          <option value="Iowa">Iowa</option>
          <option value="Kansas">Kansas</option>
          <option value="Kentucky">Kentucky</option>
          <option value="Louisiana">Louisiana</option>
          <option value="Maine">Maine</option>
          <option value="Maryland">Maryland</option>
          <option value="Massachusetts">Massachusetts</option>
          <option value="Michigan">Michigan</option>
          <option value="Minnesota">Minnesota</option>
          <option value="Mississippi">Mississippi</option>
          <option value="Missouri">Missouri</option>
          <option value="Montana">Montana</option>
          <option value="Nebraska">Nebraska</option>
          <option value="Nevada">Nevada</option>
          <option value="New Hampshire">New Hampshire</option>
          <option value="New Jersey">New Jersey</option>
          <option value="New Mexico">New Mexico</option>
          <option value="New York">New York</option>
          <option value="North Carolina">North Carolina</option>
          <option value="North Dakota">North Dakota</option>
          <option value="Ohio">Ohio</option>
          <option value="Oklahoma">Oklahoma</option>
          <option value="Oregon">Oregon</option>
          <option value="Pennsylvania">Pennsylvania</option>
          <option value="Rhode Island">Rhode Island</option>
          <option value="South Carolina">South Carolina</option>
          <option value="South Dakota">South Dakota</option>
          <option value="Tennessee">Tennessee</option>
          <option value="Texas">Texas</option>
          <option value="Utah">Utah</option>
          <option value="Vermont">Vermont</option>
          <option value="Virginia">Virginia</option>
          <option value="Washington">Washington</option>
          <option value="West Virginia">West Virginia</option>
          <option value="Wisconsin">Wisconsin</option>
          <option value="Wyoming">Wyoming</option>
        </select>
      </div>
          <div className="col-md-3"> Crime
        <select value={this.state.Crime} onChange={this.handleChange} name="Crime" form="Inputform">
          <option value="All Crime">All Crime</option>
          <option value="ViolentCrime">Violent Crime</option>
          <option value="MurderManslaughter">Murder/Manslaughter</option>
          <option value="Rape">Rape</option>
          <option value="Robbery">Robbery</option>
          <option value="Assault">Assault</option>
          <option value="PropertyCrime">Property Crime</option>
          <option value="Burglary">Burglary</option>
          <option value="Theft">Theft</option>
          <option value="MotorTheft">Motor Theft</option>
          <option value="Arson">Arson</option>
        </select>		
      </div>

      <form id="Inputform" onSubmit={this.handleSubmit}>
        <input type="submit" value="Submit"/>
      </form>

</div>
    );
  }
}

export default App;
