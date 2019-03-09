import React, { Component } from 'react';
import '../App.css';

class States extends Component {
 constructor(props){
   super(props);

   this.state = {
     State: 'Crime',
     Crime: '',
     Stat: []
   }; 

   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleChange = this.handleChange.bind(this);
   this.getObjectName = this.getObjectName.bind(this);
 }

 handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  })
 }


handleSubmit(e){
  e.preventDefault();
  console.log(this.state.State  +  '/' + this.state.Crime)
   fetch(this.state.State  +  '/' + this.state.Crime)
   .then(res => res.json())
   .then(Stat => this.setState({Stat}, () => console.log('Crime fetched', Stat)));
}

getObjectName(obj, index){
  var name = Object.keys(obj)[index];
  return name;
}

 
  render() {
    return (
<div> 
    <div className="StateSelect">      
      <p>Select The State: </p>
      <select value={this.state.State} onChange={this.handleChange} name="State" form="Inputform">
          <option value="Crime/">All States</option>
          <option value="/State/Alabama">Alabama</option>
          <option value="/State/Alaska">Alaska</option>
          <option value="/State/Arizona">Arizona</option>
          <option value="/State/Arkansas">Arkansas</option>
          <option value="/State/California">California</option>
          <option value="/State/Colorado">Colorado</option>
          <option value="/State/Connecticut">Connecticut</option>
          <option value="/State/Delaware">Delaware</option>
          <option value="/State/Florida">Florida</option>
          <option value="/State/Georgia">Georgia</option>
          <option value="/State/Hawaii">Hawaii</option>
          <option value="/State/Idaho">Idaho</option>
          <option value="/State/Illinois">Illinois</option>
          <option value="/State/Indiana">Indiana</option>
          <option value="/State/Iowa">Iowa</option>
          <option value="/State/Kansas">Kansas</option>
          <option value="/State/Kentucky">Kentucky</option>
          <option value="/State/Louisiana">Louisiana</option>
          <option value="/State/Maine">Maine</option>
          <option value="/State/Maryland">Maryland</option>
          <option value="/State/Massachusetts">Massachusetts</option>
          <option value="/State/Michigan">Michigan</option>
          <option value="/State/Minnesota">Minnesota</option>
          <option value="/State/Mississippi">Mississippi</option>
          <option value="/State/Missouri">Missouri</option>
          <option value="/State/Montana">Montana</option>
          <option value="/State/Nebraska">Nebraska</option>
          <option value="/State/Nevada">Nevada</option>
          <option value="/State/New Hampshire">New Hampshire</option>
          <option value="/State/New Jersey">New Jersey</option>
          <option value="/State/New Mexico">New Mexico</option>
          <option value="/State/New York">New York</option>
          <option value="/State/North Carolina">North Carolina</option>
          <option value="/State/North Dakota">North Dakota</option>
          <option value="/State/Ohio">Ohio</option>
          <option value="/State/Oklahoma">Oklahoma</option>
          <option value="/State/Oregon">Oregon</option>
          <option value="/State/Pennsylvania">Pennsylvania</option>
          <option value="/State/Rhode Island">Rhode Island</option>
          <option value="/State/South Carolina">South Carolina</option>
          <option value="/State/South Dakota">South Dakota</option>
          <option value="/State/Tennessee">Tennessee</option>
          <option value="/State/Texas">Texas</option>
          <option value="/State/Utah">Utah</option>
          <option value="/State/Vermont">Vermont</option>
          <option value="/State/Virginia">Virginia</option>
          <option value="/State/Washington">Washington</option>
          <option value="/State/West Virginia">West Virginia</option>
          <option value="/State/Wisconsin">Wisconsin</option>
          <option value="/State/Wyoming">Wyoming</option>
        </select>
      </div>
  
      <div className="CrimeSelect">
        <p>Select The Crime: </p>
       <select value={this.state.Crime} onChange={this.handleChange} name="Crime" form="Inputform">
          <option value="">All Crime</option> 
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
      
      <div className="SubmitButton">
        <br/>
        <form id="Inputform" onSubmit={this.handleSubmit} >
          <input type="submit" value="Submit" />
        </form>
      </div>

      <table className="DisplayStats">
          <tbody>
            {this.state.Stat.map(Stat => 
              <tr key={Stat._id}>
                <th>{this.getObjectName(Stat, 1)} {Stat.ViolentCrime} </th>
                <th>{this.getObjectName(Stat, 2)} {Stat.MurderManslaughter} </th>
                <th>{this.getObjectName(Stat, 3)} {Stat.Rape} </th>
                <th>{this.getObjectName(Stat, 4)} {Stat.Robbery} </th>
                <th>{this.getObjectName(Stat, 5)} {Stat.Assault} </th>
                <th>{this.getObjectName(Stat, 6)} {Stat.PropertyCrime} </th>
                <th>{this.getObjectName(Stat, 7)} {Stat.Burglary} </th>
                <th>{this.getObjectName(Stat, 8)} {Stat.Theft} </th>
                <th>{this.getObjectName(Stat, 9)} {Stat.MotorTheft} </th>
                <th>{this.getObjectName(Stat, 10)}  {Stat.Arson} </th>
              </tr>
            )}
          </tbody>
      </table>
</div>
    );
  }
}

export default States;
