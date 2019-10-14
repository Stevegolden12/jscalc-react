import React, { Component } from 'react';
import '../App.css';

class CalcDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="index__displayCal" id="display">{this.props.disResult}</div>
      </React.Fragment>
    )
  }
}


export default CalcDisplay;