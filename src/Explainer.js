import React, { Component } from 'react';
import './App.css';
import HouseIcon from "./house-icon.svg";
import SenateIcon from "./senate-icon.svg";
import IneligibleIcon from "./ineligible-icon.svg";


class Splash extends Component {
	render() {
		return(
			<div>

				<h2> Where Representation isn't Representative</h2>
				<h3> Many factors contribute to unequal representation of Americans in the federal government. First, we will look at the famously unequal Senate, where each state has two Senators regardless of population. Then we consider the House, where each state is assigned a number of seats based on population. Finally, we look at Americans who are disenfranchised and unable to vote for congressional representatives for a variety of reasons.</h3><br /><br />

				<div className="flexy">
					<div className="intro-icons">
						<img className="icons" alt="pic" src={HouseIcon} />
						<h3> House </h3>
					</div>
					<div className="intro-icons">
						<img className="icons" alt="pic" src={SenateIcon} />
						<h3> Senate </h3>
					</div>
					<div className="intro-icons">
						<img className="icons" alt="pic" src={IneligibleIcon} />
						<h3> Disenfranchisement </h3>
					</div>
				</div>
			</div>
	)}
}



export default Splash;