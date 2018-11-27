import React, { Component } from 'react';
import './App.css';


class Unrepresented extends Component {
	render() {
		return(
			<div>

				<h2> Locations without Representation</h2>
				<h3>Millions of American citizens live in territories that do not have voting representatives in Congress. </h3>
				<h3> Each bubble in the map is sized based on population. Areas without voting members in Congress are shaded gray.</h3>
				<h3> Washington, DC has a larger population than both Wyoming and Vermont. Puerto Rico has a larger population than 20 US states. Other disenfranchised US territories include Guam, the US Vigin Islands, and American Samoa, and have a total population of more than 350,000 people.</h3>
				<br /><br />

				<svg className="pop-map" width="1200" height="680"> 
					<circle cx="67" cy="67" r="15.4"  fill="DeepPink"></circle>
					<text x="60" y="72" fill="white">AK</text>
					<circle cx="150" cy="130" r="48.06"  fill="DeepSkyBlue"></circle>
					<text x="135" y="123" fill="white">WA</text>
					<circle cx="147" cy="216" r="36"  fill="DeepSkyBlue"></circle>
					<text x="143" y="230" fill="white">OR</text>
					<circle cx="157" cy="365" r="111.78"  fill="DeepSkyBlue"></circle>
					<text x="147" y="372" fill="white">CA</text>
					<circle cx="50" cy="470" r="21.3"  fill="DeepSkyBlue"></circle>
					<text x="40" y="480" fill="white">HI</text>

					<circle cx="196" cy="185" r="23.1"  fill="DeepPink"></circle>
					<text x="190" y="193" fill="white">ID</text>
					<circle cx="225" cy="240" r="30.6"  fill="DeepSkyBlue"></circle>
					<text x="225" y="240" fill="white">NV</text>
					<circle cx="315" cy="350" r="47"  fill="Indigo"></circle>
					<text x="315" y="350" fill="white">AZ</text>
					<circle cx="239" cy="156" r="18.2"  fill="Indigo"></circle>
					<text x="232" y="159" fill="white">MT</text>
					<circle cx="234" cy="190" r="13.65"  fill="DeepPink"></circle>
					<text x="223" y="194" fill="white">WY</text>

					<circle cx="270" cy="280" r="31.2"  fill="DeepPink"></circle>
					<text x="250" y="280" fill="white">UT</text>	
					<circle cx="330" cy="422" r="25.74"  fill="DeepSkyBlue"></circle>
					<text x="320" y="422" fill="white">NM</text>
					<circle cx="290" cy="204" r="42"  fill="Indigo"></circle>
					<text x="290" y="206" fill="white">CO</text>
					<circle cx="345" cy="136" r="15.5"  fill="DeepPink"></circle>
					<text x="337" y="143" fill="white">ND</text>
					<circle cx="335" cy="168" r="16.6"  fill="DeepPink"></circle>
					<text x="330" y="173" fill="white">SD</text>
					<circle cx="360" cy="205" r="24.6"  fill="DeepPink"></circle>
					<text x="360" y="200" fill="white">NE</text>
					<circle cx="330" cy="265" r="30.4"  fill="DeepPink"></circle>
					<text x="333" y="265" fill="white">KS</text>
					<circle cx="390" cy="290" r="35.3"  fill="DeepPink"></circle>
					<text x="390" y="290" fill="white">OK</text>
					<circle cx="450" cy="400" r="94.2"  fill="DeepPink"></circle>
					<text x="446" y="397" fill="white">TX</text>

					<circle cx="401" cy="152" r="41.9"  fill="DeepSkyBlue"></circle>
					<text x="390" y="154" fill="white">MN</text>
					<circle cx="420" cy="230" r="31.8"  fill="DeepPink"></circle>
					<text x="420" y="230" fill="white">IA</text>
					<circle cx="486" cy="267" r="44"  fill="DeepPink"></circle>
					<text x="488" y="270" fill="white">MO</text>
					<circle cx="540" cy="315" r="30.8"  fill="DeepPink"></circle>
					<text x="540" y="310" fill="white">AR</text>
					<circle cx="550" cy="485" r="38.6"  fill="DeepPink"></circle>
					<text x="560" y="490" fill="white">LA</text>

					<circle cx="484" cy="177" r="42.9"  fill="Indigo"></circle>
					<text x="480" y="185" fill="white">WI</text>
					<circle cx="585" cy="220" r="63.87"  fill="DeepSkyBlue"></circle>
					<text x="585" y="220" fill="white">IL</text>
					<circle cx="565" cy="102" r="56.2"  fill="DeepSkyBlue"></circle>
					<text x="560" y="109" fill="white">MI</text>
					<circle cx="590" cy="540" r="30.8"  fill="DeepPink"></circle>
					<text x="590" y="540" fill="white">MS</text>
					<circle cx="740" cy="305" r="46"  fill="DeepPink"></circle>
					<text x="743" y="307" fill="white">IN</text>
					<circle cx="579" cy="415" r="37.6"  fill="DeepPink"></circle>
					<text x="579" y="415" fill="white">KY</text>

					<circle cx="706" cy="442" r="46"  fill="DeepPink"></circle>
					<text x="706" y="437" fill="white">TN</text>
					<circle cx="630" cy="484" r="39.3"  fill="Indigo"></circle>
					<text x="625" y="478" fill="white">AL</text>
					<circle cx="635" cy="333" r="60.7"  fill="Indigo"></circle>
					<text x="640" y="340" fill="white">OH</text>
					<circle cx="722" cy="374" r="24.1"  fill="Indigo"></circle>
					<text x="720" y="375" fill="white">WV</text>

					<circle cx="855" cy="190" r="79.3"  fill="DeepSkyBlue"></circle>
					<text x="855" y="207" fill="white">NY</text>
					<circle cx="710" cy="198" r="63.78"  fill="Indigo"></circle>
					<text x="705" y="195" fill="white">PA</text>
					<circle cx="995" cy="370" r="43.76"  fill="DeepSkyBlue"></circle>
					<text x="997" y="385" fill="white">MD</text>
					<circle cx="842" cy="320" r="51.87"  fill="DeepSkyBlue"></circle>
					<text x="844" y="320" fill="white">VA</text>	
					<circle cx="900" cy="420" r="56.9"  fill="DeepPink"></circle>
					<text x="889" y="420" fill="white">NC</text>
					<circle cx="785" cy="400" r="39.7"  fill="DeepPink"></circle>
					<text x="790" y="400" fill="white">SC</text>
					<circle cx="817" cy="495" r="57.2"  fill="DeepPink"></circle>
					<text x="817" y="495" fill="white">GA</text>
					<circle cx="700" cy="588" r="81"  fill="DeepPink"></circle>
					<text x="700" y="594" fill="white">FL</text>

					<circle cx="937" cy="133" r="20.6"  fill="Indigo"></circle>
					<text x="925" y="140" fill="white">ME</text>
					<circle cx="767" cy="136" r="20.6"  fill="DeepSkyBlue"></circle>
					<text x="755" y="137" fill="white">NH</text>
					<circle cx="797" cy="117" r="14.1"  fill="DeepSkyBlue"></circle>
					<text x="788" y="120" fill="white">VT</text>
					<circle cx="1026" cy="248" r="33.7"  fill="DeepSkyBlue"></circle>
					<text x="1020" y="248" fill="white">CT</text>
					<circle cx="990" cy="175" r="46.6"  fill="DeepSkyBlue"></circle>
					<text x="985" y="180" fill="white">MA</text>
					<circle cx="1051" cy="202" r="18.3"  fill="DeepSkyBlue"></circle>
					<text x="1046" y="202" fill="white">RI</text>
					<circle cx="947" cy="287" r="53.3"  fill="DeepSkyBlue"></circle>
					<text x="937" y="295" fill="white">NJ</text>
					<circle cx="907" cy="344" r="17.4"  fill="DeepSkyBlue"></circle>
					<text x="895" y="350" fill="white">DE</text>

					<circle cx="1005" cy="555" r="32.9"  fill="#d7d9dd" stroke="black" stroke-width="1"></circle>
					<text x="970" y="606" fill="black">Puerto Rico</text>
					<circle cx="1018" cy="297" r="14.7"  fill="#d7d9dd" stroke="black" stroke-width="1"></circle>
					<text x="1005" y="328" fill="black">DC</text>
					<circle cx="250" cy="510" r="11"  fill="#d7d9dd" stroke="black" stroke-width="1"></circle>
					<text x="230" y="538" fill="black">Other</text>

			</svg>

			</div>
		
	)}
}



export default Unrepresented;