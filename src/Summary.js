import React, {Component} from 'react';
import './App.css';



class Summary extends Component {
	render() {
		return(
			<div>

				<h1> The Big Picture</h1>
				<h3> The American system of democracy has always systematically excluded people from voting, and weighted the votes of some people more heavily than others.</h3>

				<h3>All of these choices are deliberate and reflect the priorities of lawmakers and greater society. Should each state, regardless of size, have an equal voice in the Senate? Should citizens who have committed major crimes be barred from participating in civic decision-making? Should only citizens of US states be represented in the US legislature?  </h3>
				<h3> Whose voices do we value? How should Americans be represented at the highest levels of government?</h3>
				<br />

				<svg width="200" height="200">
  				<rect x="5" y="15" width="100" height="100" stroke-width="4" stroke="black" fill="none" />
  				<polyline id="check" points="120 0, 50 100, 0 50" stroke-width="9" fill="none" stroke="DeepSkyBlue" stroke-dasharray="40"/>
				</svg>

				<br /> <br /><br />



			</div>
	)}
}



export default Summary;