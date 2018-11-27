import React, { Component } from 'react';
import './App.css';



class BubbleSenateMap extends React.Component {

	render() {
		return(
			<div className="section">
			<br />
			<h2> Where is your vote worth more? </h2>
			<h3>Traditional maps show state outlines, but a state's size is not correlated with population. One way to evaluate the senate map is to consider how disproportionate representation is based on population. In this chart, each bubble's area corresponds to the value of a voter's vote. The larger the state's bubble, the more impact a single vote carries in that state's senate races. </h3>
				
				<br /> <br />
				<svg width="940" height="650"> 
					<circle cx="67" cy="67" r="66"  fill="DeepPink"></circle>
					<text x="67" y="67" fill="white">AK</text>
					<circle cx="150" cy="150" r="21"  fill="DeepSkyBlue"></circle>
					<text x="135" y="153" fill="white">WA</text>
					<circle cx="157" cy="240" r="27.9"  fill="DeepSkyBlue"></circle>
					<text x="150" y="240" fill="white">OR</text>
					<circle cx="177" cy="295" r="11"  fill="DeepSkyBlue"></circle>
					<text x="167" y="302" fill="white">CA</text>
					<circle cx="50" cy="470" r="47"  fill="DeepSkyBlue"></circle>
					<text x="40" y="460" fill="white">HI</text>

					<circle cx="205" cy="185" r="43.2"  fill="DeepPink"></circle>
					<text x="205" y="200" fill="white">ID</text>
					<circle cx="215" cy="260" r="32"  fill="DeepSkyBlue"></circle>
					<text x="215" y="260" fill="white">NV</text>
					<circle cx="210" cy="380" r="21.2"  fill="Indigo"></circle>
					<text x="198" y="385" fill="white">AZ</text>
					<circle cx="299" cy="156" r="55"  fill="Indigo"></circle>
					<text x="300" y="143" fill="white">MT</text>
					<circle cx="320" cy="285" r="75"  fill="DeepPink"></circle>
					<text x="299" y="300" fill="white">WY</text>

					<circle cx="210" cy="325" r="31.9"  fill="DeepPink"></circle>
					<text x="200" y="320" fill="white">UT</text>	
					<circle cx="270" cy="390" r="39"  fill="DeepSkyBlue"></circle>
					<text x="270" y="390" fill="white">NM</text>
					<circle cx="370" cy="370" r="23.9"  fill="Indigo"></circle>
					<text x="360" y="370" fill="white">CO</text>
					<circle cx="410" cy="110" r="64.8"  fill="DeepPink"></circle>
					<text x="430" y="110" fill="white">ND</text>
					<circle cx="450" cy="230" r="60"  fill="DeepPink"></circle>
					<text x="420" y="240" fill="white">SD</text>
					<circle cx="430" cy="330" r="41"  fill="DeepPink"></circle>
					<text x="430" y="320" fill="white">NE</text>
					<circle cx="510" cy="315" r="33"  fill="DeepPink"></circle>
					<text x="510" y="323" fill="white">KS</text>
					<circle cx="480" cy="375" r="28.5"  fill="DeepPink"></circle>
					<text x="480" y="370" fill="white">OK</text>
					<circle cx="480" cy="415" r="12"  fill="DeepPink"></circle>
					<text x="472" y="420" fill="white">TX</text>

					<circle cx="490" cy="156" r="24"  fill="DeepSkyBlue"></circle>
					<text x="480" y="158" fill="white">MN</text>
					<circle cx="550" cy="220" r="31.9"  fill="DeepPink"></circle>
					<text x="550" y="220" fill="white">IA</text>
					<circle cx="570" cy="310" r="22.6"  fill="DeepPink"></circle>
					<text x="562" y="310" fill="white">MO</text>
					<circle cx="540" cy="375" r="32.4"  fill="DeepPink"></circle>
					<text x="540" y="370" fill="white">AR</text>
					<circle cx="540" cy="435" r="25.8"  fill="DeepPink"></circle>
					<text x="533" y="440" fill="white">LA</text>

					<circle cx="538" cy="152" r="23.3"  fill="Indigo"></circle>
					<text x="537" y="155" fill="white">WI</text>
					<circle cx="600" cy="220" r="15.7"  fill="DeepSkyBlue"></circle>
					<text x="595" y="220" fill="white">IL</text>
					<circle cx="575" cy="175" r="17.8"  fill="DeepSkyBlue"></circle>
					<text x="569" y="179" fill="white">MI</text>
					<circle cx="600" cy="400" r="32.6"  fill="DeepPink"></circle>
					<text x="598" y="400" fill="white">MS</text>
					<circle cx="640" cy="235" r="21.2"  fill="DeepPink"></circle>
					<text x="633" y="237" fill="white">IN</text>
					<circle cx="620" cy="290" r="26.76"  fill="DeepPink"></circle>
					<text x="612" y="290" fill="white">KY</text>

					<circle cx="610" cy="340" r="21.8"  fill="DeepPink"></circle>
					<text x="600" y="344" fill="white">TN</text>
					<circle cx="655" cy="418" r="25.6"  fill="Indigo"></circle>
					<text x="650" y="418" fill="white">AL</text>
					<circle cx="680" cy="240" r="16.6"  fill="Indigo"></circle>
					<text x="670" y="245" fill="white">OH</text>
					<circle cx="672" cy="278" r="21.2"  fill="Indigo"></circle>
					<text x="664" y="280" fill="white">WV</text>

					<circle cx="690" cy="200" r="12.7"  fill="DeepSkyBlue"></circle>
					<text x="680" y="207" fill="white">NY</text>
					<circle cx="710" cy="220" r="15.78"  fill="Indigo"></circle>
					<text x="705" y="225" fill="white">PA</text>
					<circle cx="712" cy="310" r="23"  fill="DeepSkyBlue"></circle>
					<text x="707" y="315" fill="white">MD</text>
					<circle cx="662" cy="320" r="19.4"  fill="DeepSkyBlue"></circle>
					<text x="654" y="320" fill="white">VA</text>	
					<circle cx="700" cy="351" r="17.7"  fill="DeepPink"></circle>
					<text x="695" y="354" fill="white">NC</text>
					<circle cx="655" cy="367" r="25.3"  fill="DeepPink"></circle>
					<text x="654" y="367" fill="white">SC</text>
					<circle cx="692" cy="392" r="17.6"  fill="DeepPink"></circle>
					<text x="684" y="399" fill="white">GA</text>
					<circle cx="670" cy="455" r="12.4"  fill="DeepPink"></circle>
					<text x="664" y="459" fill="white">FL</text>

					<circle cx="819" cy="105" r="48.9"  fill="Indigo"></circle>
					<text x="814" y="95" fill="white">ME</text>
					<circle cx="767" cy="190" r="48"  fill="DeepSkyBlue"></circle>
					<text x="762" y="189" fill="white">NH</text>
					<circle cx="700" cy="90" r="71.4"  fill="DeepSkyBlue"></circle>
					<text x="695" y="80" fill="white">VT</text>
					<circle cx="735" cy="262" r="29.8"  fill="DeepSkyBlue"></circle>
					<text x="730" y="267" fill="white">CT</text>
					<circle cx="840" cy="195" r="21.6"  fill="DeepSkyBlue"></circle>
					<text x="835" y="200" fill="white">MA</text>
					<circle cx="822" cy="272" r="54.9"  fill="DeepSkyBlue"></circle>
					<text x="828" y="277" fill="white">RI</text>
					<circle cx="755" cy="307" r="18.9"  fill="DeepSkyBlue"></circle>
					<text x="750" y="312" fill="white">NJ</text>
					<circle cx="770" cy="385" r="57.8"  fill="DeepSkyBlue"></circle>
					<text x="765" y="389" fill="white">DE</text>


			</svg>
			</div>
	)}
}





export default BubbleSenateMap;