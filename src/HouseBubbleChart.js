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

  	var n = 308000000;
  	var y = this.props.value;

  	var mtp = 989415;
  	var mtreps = Math.round(mtp/Math.round(n/y));
  	var mtr = Math.sqrt((mtp/mtreps)/3.14159)/10;

  	var rip = 1066667;
  	var rireps = Math.round(rip/Math.round(n/y));
  	var rir = Math.sqrt((rip/rireps)/3.14159)/10;

 	var dlp = 897934;
  	var dlreps = Math.round(dlp/Math.round(n/y));
  	var dlr = Math.sqrt((dlp/dlreps)/3.14159)/10;

  	var wyp = 563626;
  	var wyreps = Math.round(wyp/Math.round(n/y));
  	var wyr = Math.sqrt((wyp/wyreps)/3.14159)/10;

  	var kyp = 4339367;
  	var kyreps = Math.round(kyp/Math.round(n/y));
  	var kyr = Math.sqrt((kyp/kyreps)/3.14159)/10;

  	var gap = 9687653;
  	var gareps = Math.round(gap/Math.round(n/y));
  	var gar = Math.sqrt((gap/gareps)/3.14159)/10;

  	var pap = 9687653;
  	var pareps = Math.round(pap/Math.round(n/y));
  	var par = Math.sqrt((pap/pareps)/3.14159)/10;

  	var sdp = 563626;
  	var sdreps = Math.round(sdp/Math.round(n/y));
  	var sdr = Math.sqrt((sdp/sdreps)/3.14159)/10;

  	var akp = 4339367;
  	var akreps = Math.round(akp/Math.round(n/y));
  	var akr = Math.sqrt((akp/akreps)/3.14159)/10;




		return(
			<div className="section">

				<svg width="350" height="500"> 
					<circle cx="60" cy="60" r={mtr}  fill="DeepPink"></circle>
					<text x="55" y="55" fill="white">MT</text>
					<text x="45" y="68" fill="white">{((mtp/1000)/mtreps).toFixed()}K</text>
					<circle cx="170" cy="60" r={rir}  fill="DeepSkyBlue"></circle>
					<text x="165" y="63" fill="white">RI</text>
					<text x="155" y="75" fill="white">{((rip/1000)/rireps).toFixed()}K</text>
					<circle cx="290" cy="60" r={dlr}  fill="DeepSkyBlue"></circle>
					<text x="285" y="60" fill="white">DL</text>
					<text x="275" y="73" fill="white">{((dlp/1000)/dlreps).toFixed()}K</text>

					<circle cx="57" cy="170" r={wyr}  fill="DeepSkyBlue"></circle>
					<text x="57" y="170" fill="white">WY</text>
					<text x="47" y="183" fill="white">{((wyp/1000)/wyreps).toFixed()}K</text>
					<circle cx="170" cy="170" r={kyr}  fill="DeepSkyBlue"></circle>
					<text x="170" y="160" fill="white">KY</text>
					<text x="160" y="173" fill="white">{((kyp/1000)/kyreps).toFixed()}K</text>
					<circle cx="295" cy="175" r={gar}  fill="DeepPink"></circle>
					<text x="295" y="170" fill="white">GA</text>
					<text x="285" y="183" fill="white">{((gap/1000)/gareps).toFixed()}K</text>

					<circle cx="60" cy="280" r={par}  fill="Indigo"></circle>
					<text x="58" y="285" fill="white">PA</text>
					<text x="48" y="298" fill="white">{((pap/1000)/pareps).toFixed()}K</text>
					<circle cx="169" cy="286" r={sdr}  fill="Indigo"></circle>
					<text x="160" y="283" fill="white">SD</text>
					<text x="150" y="295" fill="white">{((sdp/1000)/sdreps).toFixed()}K</text>
					<circle cx="295" cy="280" r={akr}  fill="DeepSkyBlue"></circle>
					<text x="295" y="280" fill="white">AK</text>
					<text x="285" y="293" fill="white">{((akp/1000)/akreps).toFixed()}K</text>



		

			</svg>
			</div>
	)}
}





export default HouseBubbleChart;


