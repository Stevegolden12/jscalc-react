import React, { Component } from 'react';
import '../App.css';

class CalcButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.hChange(this.props.buttonDesc);
  }

  render() {

    return (
      <React.Fragment>
        <div id={this.props.buttonId} className="index__buttonBorder index__buttonClick" onClick={this.handleChange}>{this.props.buttonDesc}</div>
      </React.Fragment>
    )
  }
}

export default CalcButton;