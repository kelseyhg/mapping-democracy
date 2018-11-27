import React, { Component } from 'react';
import './App.css';



class Incarceration extends Component {
	render() {
		return(
			<div>

				<h2> Incarceration</h2>
				<svg>
				
				<g stroke="DeepSkyBlue" stroke-width="3" fill="none">
		 		<path  stroke-dasharray="310" id="ME" d="M75.8 91.9l1.5.4v-2.6l.8-5.5 2.6-4.7 1.5-4-1.9-2.4v-6l.8-1 .8-2.7-.2-1.5-.2-4.8 1.8-4.8 2.9-8.9 2.1-4.2h1.3l1.3.2v1.1l1.3 2.3 2.7.6.8-.8v-1l4-2.9 1.8-1.8 1.5.2 6 2.4 1.9 1 9.1 29.9h6l.8 1.9.2 4.8 2.9 2.3h.8l.2-.5-.5-1.1 2.8-.5 1.9 2.1 2.3 3.7V85l-2.1 4.7-1.9.6-3.4 3.1-4.8 5.5h-1.3c-.6 0-1-2.1-1-2.1l-1.8.2-1 1.5-2.4 1.5-1 1.5 1.6 1.5-.5.6-.5 2.7-1.9-.2v-1.6l-.3-1.3-1.5.3-1.8-3.2-2.1 1.3 1.3 1.5.3 1.1-.8 1.3.3 3.1.2 1.6-1.6 2.6-2.9.5-.3 2.9-5.3 3.1-1.3.5-1.6-1.5-3.1 3.6 1 3.2-1.5 1.3-.2 4.4-1.1 6.3-2.2-.9-.5-3.1-4-1.1-.2-2.5-11.7-37.43zm36.5 15.6l1.5-1.5 1.4 1.1.6 2.4-1.7.9zm6.7-5.9l1.8 1.9s1.3.1 1.3-.2c0-.3.2-2 .2-2l.9-.8-.8-1.8-2 .7z"/>
		 		 <path stroke-dasharray="180" id="NH" d="M221.7 121.3l1.1-3.2-2.7-1.2-.5-3.1-4.1-1.1-.3-3-11.7-37.48-.7.08-.6 1.6-.6-.5-1-1-1.5 1.9-.2 2.29.5 8.41 1.9 2.8v4.3l-3.9 4.8-2.4.9v.7l1.1 1.9v8.6l-.8 9.2-.2 4.7 1 1.4-.2 4.7-.5 1.5 1 1.1 5.1-1.2 13.8-3.5 1.7-2.9 4-1.9z"/>
		 		</g></svg>
				<h3> Only Maine and New Hampshire allow incarcerated people to vote. In every other state, people in prison are not able to cast a ballot.</h3>
				<h3> There are currently about 2.2 million people in prison in the US, and black and latino populations are disproportionally likely to be incarcerated.</h3>
				<br /><br />
				<h3> If the total incarcerated population was its own state, it would be larger than 15 US states. </h3>
				<svg className="prison-compare" width="600" height="200"> 
					<circle cx="57" cy="77" r="27.3"  fill="DeepSkyBlue"></circle>
					<text x="20" y="150" fill="black">Wyoming</text>
					<circle cx="142" cy="70" r="42.6"  fill="DeepSkyBlue"></circle>
					<text x="120" y="150" fill="black">Hawaii</text>
					<circle cx="250" cy="70" r="51.48"  fill="DeepSkyBlue"></circle>
					<text x="204" y="150" fill="black">New Mexico</text>
					<circle cx="370" cy="70" r="53.2"  fill="#d7d9dd"></circle>
					<text x="336" y="150" fill="black">Prisoners</text>
					<circle cx="500" cy="65" r="61.2"  fill="DeepSkyBlue"></circle>
					<text x="470" y="150" fill="black">Nevada</text>
				</svg>

				<h3> 38 states prohibit people on parole or probation from voting. 10 states prohibit some or all convicted felons from voting, even after they have served their sentence and completed parole.</h3>

				<svg width="500" height="150">
				
				<g stroke="DeepPink" stroke-width="3" fill="none">
				 <path id="FL" d="M350.2 25.2l-5.2-.7-.7.8 1.5 4.4-.4 5.2-4.1-1-.2-2.8H337l-5.3.7-32.4 1.9-8.2-.3-1.7-1.7-2.5-4.2H281l-6.6.5-35.4 4.2-.3 2.8 1.6 1.6 2.9 2 .3 8.4 3.3-.6 6-2.1 6-.5 4.4-.6 7.6 1.8 8.1 3.9 1.6 1.5 2.9 1.1 1.6 1.9.3 2.7 3.2-1.3h3.9l3.6-1.9 3.7-3.6 3.1.2.5-1.1-.8-1 .2-1.9 4-.8h2.6l2.9 1.5 4.2 1.5 2.4 3.7 2.7 1 1.1 3.4 3.4 1.6 1.6 2.6 1.9.6 5.2 1.3 1.3 3.1 3 3.7v9.5l-1.5 4.7.3 2.7 1.3 4.8 1.8 4 .8-.5 1.5-4.5-2.6-1-.3-.6 1.6-.6 4.5 1 .2 1.6-3.2 5.5-2.1 2.4 3.6 3.7 2.6 3.1 2.9 5.3 2.9 3.9 2.1 5 1.8.3 1.6-2.1 1.8 1.1 2.6 4 .6 3.6 3.1 4.4.8-1.3 3.9.3 3.6 2.3 3.4 5.2.8 3.4.3 2.9 1.1 1 1.3.5 2.4-1 1.5-1.6 3.9-.2 3.1-1.5 2.7-3.2-.5-1.9-.3-2.4.6-1.9-.3-1.9 2.4-1.3.3-3.4-.6-1.8-.5-12-1.3-7.6-4.5-8.2-3.6-5.8-2.6-5.3-2.9-2.9-2.9-7.4.7-1.4 1.1-1.3-1.6-2.9-4-3.7-4.8-5.5-3.7-6.3-5.3-9.4-3.7-9.7-2.3-7.3zm17.7 132.7l2.4-.6 1.3-.2 1.5-2.3 2.3-1.6 1.3.5 1.7.3.4 1.1-3.5 1.2-4.2 1.5-2.3 1.2zm13.5-5l1.2 1.1 2.7-2.1 5.3-4.2 3.7-3.9 2.5-6.6 1-1.7.2-3.4-.7.5-1 2.8-1.5 4.6-3.2 5.3-4.4 4.2-3.4 1.9z"/>
				  <path id="VA" d="M162.7 65.2l-.2 2.8-2.9 3.8-.4 4.6.5 3.4-1.8 5-2.2 1.9-1.5-4.6.4-5.4 1.6-4.2.7-3.3-.1-1.7zm-60.3 44.6l-38.6 5.6-4.8-.1-2.2-.3-2.5 1.9-7.3.1-10.3 1.6-6.7.6 4.1-2.6 4.1-2.3v-2.1l5.7-7.3 4.1-3.7 2.2-2.5 3.6 4.3 3.8.9 2.7-1 2-1.5 2.4 1.2 4.6-1.3 1.7-4.4 2.4.7 3.2-2.3 1.6.4 2.8-3.2.2-2.7-.8-1.2 4.8-10.5 1.8-5.2.5-4.7.7-.2 1.1 1.7 1.5 1.2 3.9-.2 1.7-8.1 3-.6.8-2.6 2.8-2.2 1.1-2.1 1.8-4.3.1-4.6 3.6 1.4 6.6 3.1.3-5.2 3.4 1.2-.6 2.9 8.6 3.1 1.4 1.8-.8 3.3-1.3 1.3-.5 1.7.5 2.4 2 1.3 3.9 1.4 2.9 1 4.9.9 2.2 2.1 3.2.4.9 1.2-.4 4.7 1.4 1.1-.5 1.9 1.2.8-.2 1.4-2.7-.1.1 1.6 2.3 1.5.1 1.4 1.8 1.8.5 2.5-2.6 1.4 1.6 1.5 5.8-1.7 3.7 6.2z"/>
				  </g>
				  </svg>
				<h3> In Virginia and Florida, people convicted of a felony must appeal for clemency in order to regain their right to vote. Both states are working to reform the system.  </h3>
				<h3> In November 2018, Florida voters passed Amendemnt 4, which restores voting rights to people convicted of felonies other than murder or sex crimes who have completed their sentence.</h3>

				<svg viewBox="0 0 64 64" class="pie">
  				<circle r="25%" cx="50%" cy="50%" stroke-dasharray="90.8 100"> </circle></svg>

  				<h3> Currently, an estimated 9.2% of Florida's voting-age population is unable to vote because of a felony conviction. </h3><br /><br />

			</div>
	)}
}



export default Incarceration;