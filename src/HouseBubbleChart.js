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
			<div >

				<svg width="350" height="500"> 
					<circle cx="60" cy="60" r={mtr}  fill="DeepPink"></circle>
					<text x="50" y="54" fill="white">MT</text>
					<text x="40" y="68" fill="white">{((mtp/1000)/mtreps).toFixed()}K</text>
					<text x="56" y="82" fill="white">{mtreps}</text>
					<circle cx="170" cy="60" r={rir}  fill="DeepSkyBlue"></circle>
					<text x="160" y="54" fill="white">RI</text>
					<text x="150" y="68" fill="white">{((rip/1000)/rireps).toFixed()}K</text>
					<text x="165" y="82" fill="white">{rireps}</text>
					<circle cx="290" cy="60" r={dlr}  fill="DeepSkyBlue"></circle>
					<text x="280" y="54" fill="white">DL</text>
					<text x="270" y="68" fill="white">{((dlp/1000)/dlreps).toFixed()}K</text>
					<text x="285" y="82" fill="white">{dlreps}</text>

					<circle cx="60" cy="170" r={wyr}  fill="DeepPink"></circle>
					<text x="47" y="165" fill="white">WY</text>
					<text x="40" y="178" fill="white">{((wyp/1000)/wyreps).toFixed()}K</text>
					<text x="56" y="191" fill="white">{wyreps}</text>
					<circle cx="170" cy="170" r={kyr}  fill="Indigo"></circle>
					<text x="158" y="160" fill="white">KY</text>
					<text x="150" y="173" fill="white">{((kyp/1000)/kyreps).toFixed()}K</text>
					<text x="162" y="186" fill="white">{kyreps}</text>
					<circle cx="295" cy="170" r={gar}  fill="Indigo"></circle>
					<text x="285" y="160" fill="white">GA</text>
					<text x="275" y="174" fill="white">{((gap/1000)/gareps).toFixed()}K</text>
					<text x="287" y="187" fill="white">{gareps}</text>

					<circle cx="60" cy="280" r={par}  fill="Indigo"></circle>
					<text x="50" y="275" fill="white">PA</text>
					<text x="42" y="288" fill="white">{((pap/1000)/pareps).toFixed()}K</text>
					<text x="51" y="301" fill="white">{pareps}</text>
					<circle cx="169" cy="280" r={sdr}  fill="DeepPink"></circle>
					<text x="158" y="275" fill="white">SD</text>
					<text x="150" y="288" fill="white">{((sdp/1000)/sdreps).toFixed()}K</text>
					<text x="164" y="302" fill="white">{sdreps}</text>
					<circle cx="295" cy="280" r={akr}  fill="DeepPink"></circle>
					<text x="282" y="272" fill="white">AK</text>
					<text x="275" y="286" fill="white">{((akp/1000)/akreps).toFixed()}K</text>
					<text x="285" y="299" fill="white">{akreps}</text>



		

			</svg>
			</div>
	)}
}





export default HouseBubbleChart;


