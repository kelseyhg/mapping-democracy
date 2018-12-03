import { Component } from 'react';
import Slider from 'react-rangeslider';
 
// inside render
<Slider
  min={Number}
  max={Number}
  step={Number}
  value={Number}
  orientation={String}
  reverse={Boolean}
  tooltip={Boolean}
  labels={Object}
  handleLabel={String}
  format={Function}
  onChangeStart={Function}
  onChange={Function}
  onChangeComplete={Function}
/>

export default Slider;