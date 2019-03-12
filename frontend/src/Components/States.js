import React, { Component } from 'react';
import '../App.css';

import All_States from './images/All States.png';
import Alabama from './images/Alabama.png';
import Alaska from './images/Alaska.png';
import Arizona from './images/Arizona.png';
import Arkansas from './images/Arkansas.png';
import California from './images/California.png';
import Colorado from './images/Colorado.png';
import Connecticut from './images/Connecticut.png';
import Delaware from './images/Delaware.png';
import Florida from './images/Florida.png';
import Georgia from './images/Georgia.png';
import Hawaii from './images/Hawaii.png';
import Idaho from './images/Idaho.png';
import Illinois from './images/Illinois.png';
import Indiana from './images/Indiana.png';
import Iowa from './images/Iowa.png';
import Kansas from './images/Kansas.png';
import Kentucky from './images/Kentucky.png';
import Louisiana from './images/Louisiana.png';
import Maine from './images/Maine.png';
import Maryland from './images/Maryland.png';
import Massachusetts from './images/Massachusetts.png';
import Michigan from './images/Michigan.png';
import Minnesota from './images/Minnesota.png';
import Mississippi from './images/Mississippi.png';
import Missouri from './images/Missouri.png';
import Montana from './images/Montana.png';
import Nebraska from './images/Nebraska.png';
import Nevada from './images/Nevada.png';
import New_Hampshire from './images/New Hampshire.png';
import New_Jersey from './images/New Jersey.png';
import New_Mexico from './images/New Mexico.png';
import New_York from './images/New York.png';
import North_Carolina from './images/North Carolina.png';
import North_Dakota from './images/North Dakota.png';
import Ohio from './images/Ohio.png';
import Oklahoma from './images/Oklahoma.png';
import Oregon from './images/Oregon.png';
import Pennsylvania from './images/Pennsylvania.png';
import Rhode_Island from './images/Rhode Island.png';
import South_Carolina from './images/South Carolina.png';
import South_Dakota from './images/South Dakota.png';
import Tennessee from './images/Tennessee.png';
import Texas from './images/Texas.png';
import Utah from './images/Utah.png';
import Vermont from './images/Vermont.png';
import Virginia from './images/Virginia.png';
import Washington from './images/Washington.png';
import West_Virginia from './images/West Virginia.png';
import Wisconsin from './images/Wisconsin.png';
import Wyoming from './images/Wyoming.png';

var State_Img = All_States;

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
/*
getStateImage(State_Name){
  switch (State_Name) {
    case '/State/Alabama': 
	console.log("Test");
	break;
	return Alabama;
    default: break;
  }
}
*/
//This is the submit handler that is called when a user submits their inputs.
handleSubmit(e){
	var State_Name = this.state.State;
	switch (State_Name) {
		case '/State/Alabama': 
			State_Img = Alabama;
			break;
		case '/State/Alaska': 
			State_Img = Alaska;
			break;	
		case '/State/Arizona': 
			State_Img = Arizona;
			break;
		case '/State/Arkansas': 
			State_Img = Arkansas;
			break;
		case '/State/California': 
			State_Img = California;
			break;
		case '/State/Colorado': 
			State_Img = Colorado;
			break;
		case '/State/Connecticut': 
			State_Img = Connecticut;
			break;
		case '/State/Delaware': 
			State_Img = Delaware;
			break;
		case '/State/Florida': 
			State_Img = Florida;
			break;
		case '/State/Georgia': 
			State_Img = Georgia;
			break;
		case '/State/Hawaii': 
			State_Img = Hawaii;
			break;
		case '/State/Idaho': 
			State_Img = Idaho;
			break;
		case '/State/Illinois': 
			State_Img = Illinois;
			break;
		case '/State/Indiana': 
			State_Img = Indiana;
			break;
		case '/State/Iowa': 
			State_Img = Iowa;
			break;
		case '/State/Kansas': 
			State_Img = Kansas;
			break;
		case '/State/Kentucky': 
			State_Img = Kentucky;
			break;
		case '/State/Louisiana': 
			State_Img = Louisiana;
			break;
		case '/State/Maine': 
			State_Img = Maine;
			break;
		case '/State/Maryland': 
			State_Img = Maryland;
			break;
		case '/State/Massachusetts': 
			State_Img = Massachusetts;
			break;
		case '/State/Michigan': 
			State_Img = Michigan;
			break;
		case '/State/Minnesota': 
			State_Img = Minnesota;
			break;
		case '/State/Mississippi': 
			State_Img = Mississippi;
			break;
		case '/State/Missouri': 
			State_Img = Missouri;
			break;
		case '/State/Montana': 
			State_Img = Montana;
			break;
		case '/State/Nebraska': 
			State_Img = Nebraska;
			break;
		case '/State/Nevada': 
			State_Img = Nevada;
			break;
		case '/State/New Hampshire': 
			State_Img = New_Hampshire;
			break;
		case '/State/New Jersey': 
			State_Img = New_Jersey;
			break;
		case '/State/New Mexico': 
			State_Img = New_Mexico;
			break;
		case '/State/New York': 
			State_Img = New_York;
			break;
		case '/State/North Carolina': 
			State_Img = North_Carolina;
			break;
		case '/State/North Dakota': 
			State_Img = North_Dakota;
			break;
		case '/State/Ohio': 
			State_Img = Ohio;
			break;
		case '/State/Oklahoma': 
			State_Img = Oklahoma;
			break;
		case '/State/Oregon': 
			State_Img = Oregon;
			break;
		case '/State/Pennsylvania': 
			State_Img = Pennsylvania;
			break;
		case '/State/Rhode Island': 
			State_Img = Rhode_Island;
			break;
		case '/State/South Carolina': 
			State_Img = South_Carolina;
			break;
		case '/State/South Dakota': 
			State_Img = South_Dakota;
			break;
		case '/State/Tennessee': 
			State_Img = Tennessee;
			break;
		case '/State/Texas': 
			State_Img = Texas;
			break;
		case '/State/Utah': 
			State_Img = Utah;
			break;
		case '/State/Vermont': 
			State_Img = Vermont;
			break;
		case '/State/Virginia': 
			State_Img = Virginia;
			break;
		case '/State/Washington': 
			State_Img = Washington;
			break;
		case '/State/West Virginia': 
			State_Img = West_Virginia;
			break;
		case '/State/Wisconsin': 
			State_Img = Wisconsin;
			break;
		case '/State/Wyoming': 
			State_Img = Wyoming;
			break;
		default:
			State_Img = All_States;
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
				<div className="StateSelect" class="StateSelect">      
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
					<form id="Inputform" onSubmit={this.handleSubmit} >
						<input class="input" type="submit" value="Submit"/>
					</form>
				</div>
			</div>
		</div>
		<div className="bottomrow">
			<div className="columnbottom">
				<div className="InfoDisplay" class="b_border">
					<img className="StateImgDiv" src={State_Img} alt="" />
				</div>
			</div>
			<div className="columnbottom">
				<div className="toprow">
					<div className="columnbottom">
					{/* This is where the reponse from the API which is grabbed by our handleSubmit function is displayed.*/}
						<table className="DisplayStats-red">
								{/* This "map" is a for loop that will loop through our react state object "Stat" which is an object that holds and array of JSON objects, this will display all JSON held in our reponse. */}
							{this.state.Stat.map(Stat => 
							<tr key={Stat._id}>
								{/* On the left we call the getObjectName to get the Name of the Statistic for example MurderManSlaughter, on the right we are grabbing the actual statistic for example 206.
								Together these would display as MurderManSlaughter 206*/}
								<tr><th>{this.getObjectName(Stat, 1)}</th></tr>
								<tr><th>{this.getObjectName(Stat, 2)}</th></tr>
								<tr><th>{this.getObjectName(Stat, 3)}</th></tr>
								<tr><th>{this.getObjectName(Stat, 4)}</th></tr>
								<tr><th>{this.getObjectName(Stat, 5)}</th></tr>
								<tr><th>{this.getObjectName(Stat, 6)}</th></tr>
								<tr><th>{this.getObjectName(Stat, 7)}</th></tr>
								<tr><th>{this.getObjectName(Stat, 8)}</th></tr>
								<tr><th>{this.getObjectName(Stat, 9)}</th></tr>
								<tr><th>{this.getObjectName(Stat, 10)}</th></tr>
							</tr>
							)}
						</table>
					</div>
					<div className="columnbottom">
						<table className="DisplayStats">
							{/* This "map" is a for loop that will loop through our react state object "Stat" which is an object that holds and array of JSON objects, this will display all JSON held in our reponse. */}
							{this.state.Stat.map(Stat => 
							<tr key={Stat._id}>
								{/* On the left we call the getObjectName to get the Name of the Statistic for example MurderManSlaughter, on the right we are grabbing the actual statistic for example 206.
								Together these would display as MurderManSlaughter 206*/}
								<tr><th>{Stat.ViolentCrime}</th></tr>
								<tr><th>{Stat.MurderManslaughter}</th></tr>
								<tr><th>{Stat.Rape}</th></tr>
								<tr><th>{Stat.Robbery}</th></tr>
								<tr><th>{Stat.Assault}</th></tr>
								<tr><th>{Stat.PropertyCrime}</th></tr>
								<tr><th>{Stat.Burglary}</th></tr>
								<tr><th>{Stat.Theft}</th></tr>
								<tr><th>{Stat.MotorTheft}</th></tr>
								<tr><th>{Stat.Arson}</th></tr>
							</tr>
							)}
						</table>						
					</div>
				</div>
			</div>
		</div>
	</body>
    );
  }
}

export default States;
