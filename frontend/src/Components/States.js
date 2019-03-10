import React, { Component } from 'react';
import '../App.css';
import Alabama from './images/Alabama.png';
import Oregon from './images/Oregon.png';

var State_Img = "All States";

class States extends Component {
 constructor(props){
   super(props);

   //These are the react state variables we are using.
   this.state = {
     State: 'Crime',
     Crime: '',
     Stat: []
   }; 

  //Binding our functions to work with the current react state.
   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleChange = this.handleChange.bind(this);
   this.getObjectName = this.getObjectName.bind(this);
 }
//Changing the objects currently held in the react state to whatever the user selects for example if State = Arizona and a user then changes their choice to Alaska, this function makes State=Alaska.
 handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  })
 }

getStateImage(State_Name){
  switch (State_Name) {
    case '/State/Alabama': 
	console.log("Test");
	return Alabama;
    default: break;
  }
}

//This is the submit handler that is called when a user submits their inputs.
handleSubmit(e){
	var State_Name = this.state.State;
	switch (State_Name) {
		case '/State/Alabama': 
			State_Img = Alabama;
		case '/State/Oregon': 
			State_Img = Oregon;
		default:
			break;
	}


	//Don't allow blank submits
	e.preventDefault();
	//Grab the State City and Crime that the user wants to submit will look like this localhost:4000/State/City/Crime
	fetch(this.state.State  +  '/' + this.state.Crime)
	//Get the response from the server
	.then(res => res.json())
	//Set our Stat array to the response which was returned from the API
	.then(Stat => this.setState({Stat}, () => console.log('Crime fetched', Stat)));
}

//All I am doing with this function is grabbing the name that correlates with each peice of the JSON object for example if I get the statistics for Violent Crime this will return ViolentCrime.
getObjectName(obj, index){
  var name = Object.keys(obj)[index];
  return name;
}

 

render() {
    return (
	<body>
		<div className="toprow"> 
			<div className="columntop">
			{/*This is where the user will select the State */}
				<div className="StateSelect">      
					<p>Select The State: </p>
				{/* this.state.State is making it so our react state variable "State" is set to the value currently selected, this.handleChange ensures the changes happen. */}
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
			</div>
			<div className="columntop">
			
				{/*Here is a input for the user to select a crime, the value for the react state value "Crime" is set the same as above.  */}
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
			</div>
			<div className="columntop">
				
				{/*Here is our actual form that holds everything as well as the submit button, notice on the form it has a "onSubmit" which will trigger our handleSubmit function.*/}
				<div className="SubmitButton">
					<br/>
					<form id="Inputform" onSubmit={this.handleSubmit} >
						<input type="submit" value="Submit" />
					</form>
				</div>
			</div>
		</div>
		<div className="bottomrow">
			<div className="columnbottom">
				<div className="InfoDisplay">
					<img className="StateImgDiv" src={State_Img}/>
				</div>
			</div>
			<div className="columnbottom">
			Bottom Half
			{/* This is where the reponse from the API which is grabbed by our handleSubmit function is displayed.*/}
				<table className="DisplayStats">
					<div>
						{/* This "map" is a for loop that will loop through our react state object "Stat" which is an object that holds and array of JSON objects, this will display all JSON held in our reponse. */}
						{this.state.Stat.map(Stat => 
						<tr key={Stat._id}>
							{/* On the left we call the getObjectName to get the Name of the Statistic for example MurderManSlaughter, on the right we are grabbing the actual statistic for example 206.
							Together these would display as MurderManSlaughter 206*/}
							<tr><th>{this.getObjectName(Stat, 1)} {Stat.ViolentCrime} </th></tr>
							<tr><th>{this.getObjectName(Stat, 2)} {Stat.MurderManslaughter} </th></tr>
							<tr><th>{this.getObjectName(Stat, 3)} {Stat.Rape} </th></tr>
							<tr><th>{this.getObjectName(Stat, 4)} {Stat.Robbery} </th></tr>
							<tr><th>{this.getObjectName(Stat, 5)} {Stat.Assault} </th></tr>
							<tr><th>{this.getObjectName(Stat, 6)} {Stat.PropertyCrime} </th></tr>
							<tr><th>{this.getObjectName(Stat, 7)} {Stat.Burglary} </th></tr>
							<tr><th>{this.getObjectName(Stat, 8)} {Stat.Theft} </th></tr>
							<tr><th>{this.getObjectName(Stat, 9)} {Stat.MotorTheft} </th></tr>
							<tr><th>{this.getObjectName(Stat, 10)}  {Stat.Arson} </th></tr>
						</tr>
						)}
					</div>
				</table>
			
			</div>
		</div>
	</body>
    );
  }
}


export default States;
