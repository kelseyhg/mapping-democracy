import React, { Component } from 'react';
import './App.css';



class HouseBubbleChart extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }
  componentDidMount() {

  }
  
  render() {


		return(
			<div className="section">
			
  			<h2> Value: {this.props.value}</h2>
				
				<br /> <br />
				<svg width="350" height="500"> 
					<circle cx="60" cy="60" r="56.1"  fill="DeepPink"></circle>
					<text x="55" y="55" fill="white">MT</text>
					<circle cx="170" cy="60" r="40.9"  fill="DeepSkyBlue"></circle>
					<text x="165" y="63" fill="white">RI</text>
					<circle cx="290" cy="60" r="53.5"  fill="DeepSkyBlue"></circle>
					<text x="285" y="60" fill="white">DL</text>

					<circle cx="57" cy="170" r="42.35"  fill="DeepSkyBlue"></circle>
					<text x="57" y="170" fill="white">WY</text>
					<circle cx="170" cy="170" r="48"  fill="DeepSkyBlue"></circle>
					<text x="170" y="160" fill="white">KY</text>
					<circle cx="295" cy="175" r="46.9"  fill="DeepPink"></circle>
					<text x="295" y="170" fill="white">GA</text>

					<circle cx="60" cy="280" r="47.4"  fill="Indigo"></circle>
					<text x="58" y="285" fill="white">PA</text>
					<circle cx="169" cy="286" r="50.9"  fill="Indigo"></circle>
					<text x="160" y="283" fill="white">SD</text>
					<circle cx="295" cy="280" r="47.5"  fill="DeepSkyBlue"></circle>
					<text x="295" y="280" fill="white">AK</text>

					<text x="0" y="400" fill="black">Larger bubbles = more people per representative </text>


		

			</svg>
			</div>
	)}
}





export default HouseBubbleChart;


