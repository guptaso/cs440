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

class Cities extends Component {
	constructor(props){
		super(props);
	
		//These are the react state variables we are using.
		this.state = {
			State: 'Crime',
			Crime: '',
			City: '',
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
	
	//This is the submit handler that is called when a user submits their inputs.
	handleSubmit(e){
	
		var State_Name = this.state.State;
		switch (State_Name) {
			case '/City/Alabama': 
				State_Img = Alabama;
				break;
			case '/City/Alaska': 
				State_Img = Alaska;
				break;	
			case '/City/Arizona': 
				State_Img = Arizona;
				break;
			case '/City/Arkansas': 
				State_Img = Arkansas;
				break;
			case '/City/California': 
				State_Img = California;
				break;
			case '/City/Colorado': 
				State_Img = Colorado;
				break;
			case '/City/Connecticut': 
				State_Img = Connecticut;
				break;
			case '/City/Delaware': 
				State_Img = Delaware;
				break;
			case '/City/Florida': 
				State_Img = Florida;
				break;
			case '/City/Georgia': 
				State_Img = Georgia;
				break;
			case '/City/Hawaii': 
				State_Img = Hawaii;
				break;
			case '/City/Idaho': 
				State_Img = Idaho;
				break;
			case '/City/Illinois': 
				State_Img = Illinois;
				break;
			case '/City/Indiana': 
				State_Img = Indiana;
				break;
			case '/City/Iowa': 
				State_Img = Iowa;
				break;
			case '/City/Kansas': 
				State_Img = Kansas;
				break;
			case '/City/Kentucky': 
				State_Img = Kentucky;
				break;
			case '/City/Louisiana': 
				State_Img = Louisiana;
				break;
			case '/City/Maine': 
				State_Img = Maine;
				break;
			case '/City/Maryland': 
				State_Img = Maryland;
				break;
			case '/City/Massachusetts': 
				State_Img = Massachusetts;
				break;
			case '/City/Michigan': 
				State_Img = Michigan;
				break;
			case '/City/Minnesota': 
				State_Img = Minnesota;
				break;
			case '/City/Mississippi': 
				State_Img = Mississippi;
				break;
			case '/City/Missouri': 
				State_Img = Missouri;
				break;
			case '/City/Montana': 
				State_Img = Montana;
				break;
			case '/City/Nebraska': 
				State_Img = Nebraska;
				break;
			case '/City/Nevada': 
				State_Img = Nevada;
				break;
			case '/City/New Hampshire': 
				State_Img = New_Hampshire;
				break;
			case '/City/New Jersey': 
				State_Img = New_Jersey;
				break;
			case '/City/New Mexico': 
				State_Img = New_Mexico;
				break;
			case '/City/New York': 
				State_Img = New_York;
				break;
			case '/City/North Carolina': 
				State_Img = North_Carolina;
				break;
			case '/City/North Dakota': 
				State_Img = North_Dakota;
				break;
			case '/City/Ohio': 
				State_Img = Ohio;
				break;
			case '/City/Oklahoma': 
				State_Img = Oklahoma;
				break;
			case '/City/Oregon': 
				State_Img = Oregon;
				break;
			case '/City/Pennsylvania': 
				State_Img = Pennsylvania;
				break;
			case '/City/Rhode Island': 
				State_Img = Rhode_Island;
				break;
			case '/City/South Carolina': 
				State_Img = South_Carolina;
				break;
			case '/City/South Dakota': 
				State_Img = South_Dakota;
				break;
			case '/City/Tennessee': 
				State_Img = Tennessee;
				break;
			case '/City/Texas': 
				State_Img = Texas;
				break;
			case '/City/Utah': 
				State_Img = Utah;
				break;
			case '/City/Vermont': 
				State_Img = Vermont;
				break;
			case '/City/Virginia': 
				State_Img = Virginia;
				break;
			case '/City/Washington': 
				State_Img = Washington;
				break;
			case '/City/West Virginia': 
				State_Img = West_Virginia;
				break;
			case '/City/Wisconsin': 
				State_Img = Wisconsin;
				break;
			case '/City/Wyoming': 
				State_Img = Wyoming;
				break;
			default:
				State_Img = All_States;
				break;
		}

		//Don't allow blank submits
		e.preventDefault();
		//Grab the State City and Crime that the user wants to submit will look like this localhost:4000/City/City/Crime
		fetch(this.state.State + '/' + this.state.City  +  '/' + this.state.Crime)
		//Get the response from the server
		.then(res => res.json())
		//Set our Stat array to the response which was returned from the API
		.then(Stat => this.setState({Stat}, () => console.log('Crime fetched', Stat)));
	}

	//All I am doing with this function is grabbing the name that correlates with each peice of the JSON object for example if I get the statistics for Violent Crime this will return ViolentCrime.
	getObjectName(obj, index){
		var name = Object.keys(obj)[index];
		console.log(name);
		return name;
	}


	render() {
		return (
			<body>
				<div className="toprow"> 
					<div className="columnCrimetop">
						{/*This is where the user will select the State */}
						<div className="StateSelect" class="StateSelect">      
							<p>Select The State: </p>
							{/* this.state.State is making it so our react state variable "State" is set to the value currently selected, this.handleChange ensures the changes happen. */}
							<select value={this.state.State} onChange={this.handleChange} name="State" form="Inputform">
								<option value="">Select a State</option>
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
					</div>
					<div className="columnCrimetop">
						{/*Here is a textbox for the user to input a city into, the value for the react state value "City" is set the same as above.  */}
						<div class="input">
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
					</div>
					<div className="columnCrimetop">
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
					<div className="columnCrimetop">
						{/*Here is our actual form that holds everything as well as the submit button, notice on the form it has a "onSubmit" which will trigger our handleSubmit function.*/}
						<div className="SubmitButton">
							<form id="Inputform" onSubmit={this.handleSubmit} >
								<input class="input" type="submit" value="Submit" />
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
										{/* On the left we call the getObjectName to get the Name of the Statistic for example MurderManSlaughter, on the right we are grabbing the actual statistic for example 206. Together these would display as MurderManSlaughter 206*/}
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
											<tr><th>{this.getObjectName(Stat, 11)}</th></tr>
											<tr><th>{this.getObjectName(Stat, 12)}</th></tr>
										</tr>
									)}
								</table>
							</div>
							<div className="columnbottom">
				{/* This is where the reponse from the API which is grabbed by our handleSubmit function is displayed.*/}
								<table className="DisplayStats">
								{/* This "map" is a for loop that will loop through our react state object "Stat" which is an object that holds and array of JSON objects, this will display all JSON held in our reponse. */}
									{this.state.Stat.map(Stat => 
										<tr key={Stat._id}>
										{/* On the left we call the getObjectName to get the Name of the Statistic for example MurderManSlaughter, on the right we are grabbing the actual statistic for example 206. Together these would display as MurderManSlaughter 206*/}
											<tr><th>{Stat.City}</th></tr>
											<tr><th>{Stat.Population}</th></tr>
											<tr><th>{Stat.ViolentCrime}</th></tr>
											<tr><th>{Stat.MurderManslaughter} </th></tr>
											<tr><th>{Stat.Rape} </th></tr>
											<tr><th>{Stat.Robbery} </th></tr>
											<tr><th>{Stat.Assault} </th></tr>
											<tr><th>{Stat.PropertyCrime} </th></tr>
											<tr><th>{Stat.Burglary} </th></tr>
											<tr><th>{Stat.Theft} </th></tr>
											<tr><th>{Stat.MotorTheft} </th></tr>
											<tr><th>{Stat.Arson} </th></tr>
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

export default Cities;
