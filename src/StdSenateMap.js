import React, { Component } from 'react';
import './App.css';
import USMap from './Blank_US_Map.svg';



class StdSenateMap extends React.Component {

	render() {
		return(
			<div className="section">
			<br />
			<h1> The Senate </h1>
			<h3>This map illustrates the partisan makeup of the Senate as of Jan 2019. States are color-coded by the party affiliation of their senators: pink for Republican, blue for Democrat, and purple for split. </h3>
			<img width="900" src={USMap} alt="map" />
			</div>
	)}
}





export default StdSenateMap;