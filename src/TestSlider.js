
import React, {Component} from 'react';
import HouseBubbleChart from './HouseBubbleChart.js';
import './App.css';

class TestSlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sliderAmt: 435,
      slidersWeights: []
    };
  }
  componentDidMount() {
  	var value = 12
  }

  render() {
    return (
      <div>
      <h1>The House </h1>
			<h2> Where is your vote worth more? </h2>
			<h3>Even in the House, where representation reflects state population, representation is unequal because of the limits of a 435-representative chamber. </h3>
			<h3> Very small states are still over-represented, while states that are just below the population threshhold for an additional representative are under-represented. </h3>
			<h3> Some activists have called for increasing the number of representatives in the House in order to lessen this disparity. Within reason, the "optimal" number of seats is 930, with roughly 330,000 people per representative.</h3>

			<h3> Adjust the slider to see how people per representative changes based on the number of seats in the House: the larger the bubble, the more people per representative. </h3>
        <div style={{ marginTop: "2px", marginBottom: "20px" }}>
          <input
          class="slider"
            id={"houseSlider"}
            type="range"
            defaultValue="435"
            min="435"
            max="1024"
            onChange={this.handleSliderChange.bind(this)}
            step="5"
          />

        </div>
        <span> Total Seats: {this.state.sliderAmt} </span>
        <HouseBubbleChart value={this.state.sliderAmt} />
      </div>
    );
  }

  handleSliderChange(event) {
    console.log(event.target.value, " ", event.target.id);
    var value = event.target.value;
    var sliderAmt = event.target.value;
    this.setState({ sliderAmt });
  }
}

export default TestSlider;
