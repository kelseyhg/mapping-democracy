import React, { Component } from 'react';
import './App.css';
import Outline from "./US-outline.svg";


class Splash extends Component {
	render() {
		return(
			<div>
				<div className="titles">
					<h1> Mapping Democracy</h1>
					<h3> What does representation look like in a representative democracy?</h3>
				</div>
				
				<img id="splash-map" alt="pic" src={Outline} />
			</div>
	)}
}



export default Splash;