import React, { Component } from 'react';
import '../App.css';

class Cities extends Component {
 constructor(props){
   super(props);

   this.state = {
     State: 'Crime',
     Crime: '',
     City: '',
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
  console.log(this.state.City);
  console.log(this.state.State + '/' + this.state.City  +  '/' + this.state.Crime)
   fetch(this.state.State + '/' + this.state.City  +  '/' + this.state.Crime)
   .then(res => res.json())
   .then(Stat => this.setState({Stat}, () => console.log('Crime fetched', Stat)));
}

getObjectName(obj, index){
  var name = Object.keys(obj)[index];
  console.log(name);
  return name;
}

 
  render() {
    return (
<div> 
    <div className="StateSelect">      
      <p>Select The State: </p>
      <select value={this.state.State} onChange={this.handleChange} name="State" form="Inputform">
          <option value="/City/Alabama">Alabama</option>
          <option value="/City/Alaska">Alaska</option>
          <option value="/City/Arizona">Arizona</option>
          <option value="/City/Arkansas">Arkansas</option>
          <option value="/City/California">California</option>
          <option value="/City/Colorado">Colorado</option>
          <option value="/City/Connecticut">Connecticut</option>
          <option value="/City/Delaware">Delaware</option>
          <option value="/City/Florida">Florida</option>
          <option value="/City/Georgia">Georgia</option>
          <option value="/City/Hawaii">Hawaii</option>
          <option value="/City/Idaho">Idaho</option>
          <option value="/City/Illinois">Illinois</option>
          <option value="/City/Indiana">Indiana</option>
          <option value="/City/Iowa">Iowa</option>
          <option value="/City/Kansas">Kansas</option>
          <option value="/City/Kentucky">Kentucky</option>
          <option value="/City/Louisiana">Louisiana</option>
          <option value="/City/Maine">Maine</option>
          <option value="/City/Maryland">Maryland</option>
          <option value="/City/Massachusetts">Massachusetts</option>
          <option value="/City/Michigan">Michigan</option>
          <option value="/City/Minnesota">Minnesota</option>
          <option value="/City/Mississippi">Mississippi</option>
          <option value="/City/Missouri">Missouri</option>
          <option value="/City/Montana">Montana</option>
          <option value="/City/Nebraska">Nebraska</option>
          <option value="/City/Nevada">Nevada</option>
          <option value="/City/New Hampshire">New Hampshire</option>
          <option value="/City/New Jersey">New Jersey</option>
          <option value="/City/New Mexico">New Mexico</option>
          <option value="/City/New York">New York</option>
          <option value="/City/North Carolina">North Carolina</option>
          <option value="/City/North Dakota">North Dakota</option>
          <option value="/City/Ohio">Ohio</option>
          <option value="/City/Oklahoma">Oklahoma</option>
          <option value="/City/Oregon">Oregon</option>
          <option value="/City/Pennsylvania">Pennsylvania</option>
          <option value="/City/Rhode Island">Rhode Island</option>
          <option value="/City/South Carolina">South Carolina</option>
          <option value="/City/South Dakota">South Dakota</option>
          <option value="/City/Tennessee">Tennessee</option>
          <option value="/City/Texas">Texas</option>
          <option value="/City/Utah">Utah</option>
          <option value="/City/Vermont">Vermont</option>
          <option value="/City/Virginia">Virginia</option>
          <option value="/City/Washington">Washington</option>
          <option value="/City/West Virginia">West Virginia</option>
          <option value="/City/Wisconsin">Wisconsin</option>
          <option value="/City/Wyoming">Wyoming</option>
        </select>
      </div>

      <div>
        <p>Enter a Valid City:</p>
        <input 
        form="Inputform"
          type="text"
          placeholder="City"
          name="City"
          value={this.state.City}
          onChange={this.handleChange}
          required
        />
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
      
      <div className="FormWrap">
        <br/>
        <form id="Inputform" onSubmit={this.handleSubmit} >
          <input type="submit" value="Submit" />
        </form>
      </div>

      <table className="DisplayStats">
          <tbody>
            {this.state.Stat.map(Stat => 
              <tr key={Stat._id}>
                <th>{this.getObjectName(Stat, 1)} {Stat.City}</th>
                <th>{this.getObjectName(Stat, 2)} {Stat.Population}</th>                
                <th>{this.getObjectName(Stat, 3)} {Stat.ViolentCrime}</th>
                <th>{this.getObjectName(Stat, 4)} {Stat.MurderManslaughter} </th>
                <th>{this.getObjectName(Stat, 5)} {Stat.Rape} </th>
                <th>{this.getObjectName(Stat, 6)} {Stat.Robbery} </th>
                <th>{this.getObjectName(Stat, 7)} {Stat.Assault} </th>
                <th>{this.getObjectName(Stat, 8)} {Stat.PropertyCrime} </th>
                <th>{this.getObjectName(Stat, 9)} {Stat.Burglary} </th>
                <th>{this.getObjectName(Stat, 10)} {Stat.Theft} </th>
                <th>{this.getObjectName(Stat, 11)} {Stat.MotorTheft} </th>
                <th>{this.getObjectName(Stat, 12)}  {Stat.Arson} </th>
              </tr>
            )}
          </tbody>
      </table>
</div>
    );
  }
}

export default Cities;
