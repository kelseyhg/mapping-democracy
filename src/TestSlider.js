
import React, {Component} from 'react';
import HouseBubbleChart from './HouseBubbleChart.js';


class TestSlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sliderAmt: 534,
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
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <input
            id={"A"}
            type="range"
            defaultValue="530"
            min="534"
            max="1024"
            className="slider"
            onChange={this.handleSliderChange.bind(this)}
            step="10"
          />

        </div>
        <span> Total Seats: {this.state.sliderAmt} </span>
        <HouseBubbleChart value={this.state.sliderAmt} />
      </div>
    );
  }

  handleSliderChange(event) {
    console.log(event.target.value, " ", event.target.id);
    var id = event.target.id;
    var value = event.target.value;
    const slidersWeights = this.state.slidersWeights;
    slidersWeights[id] = parseInt(value);
    var sliderAmt = event.target.value;
    const slidersLabels = this.state.slidersLabels;
    this.setState({ slidersWeights, sliderAmt });
  }
}

export default TestSlider;