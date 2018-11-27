import React, { Component } from 'react';
import './App.css';
import Splash from './Splash.js';
import Explainer from './Explainer.js';
import BubbleSenateMap from './BubbleSenateMap.js';
import StdSenateMap from './StdSenateMap.js';
import Disenfranchisement from './Disenfranchisement.js';
import Incarceration from './Incarceration.js';
import Unrepresented from './Unrepresented.js';
import Summary from './Summary.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Splash />
        <Explainer />
        <StdSenateMap />
        <BubbleSenateMap />
        <Disenfranchisement />
        <Incarceration />
        <Unrepresented />
        <Summary />
      </div>
    );
  }
}

export default App;


