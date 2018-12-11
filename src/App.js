import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: 'Testing',
    }
  }
  render() {
    return (
      <div className="App">
        <CalcDisplay disResult={this.state.result} />
        <CalcButton buttonId="clear" buttonDesc="CA" />
        <CalcButton buttonId="multiply" buttonDesc="X" />
        <CalcButton buttonId="divide" buttonDesc="/" />
        <CalcButton buttonId="one" buttonDesc="1" />
        <CalcButton buttonId="two" buttonDesc="2" />
        <CalcButton buttonId="three" buttonDesc="3" />
        <CalcButton buttonId="subtract" buttonDesc="-" />
        <CalcButton buttonId="four" buttonDesc="4" />
        <CalcButton buttonId="five" buttonDesc="5" />
        <CalcButton buttonId="six" buttonDesc="6" />
        <CalcButton buttonId="add" buttonDesc="+" />
        <CalcButton buttonId="seven" buttonDesc="7" />
        <CalcButton buttonId="eight" buttonDesc="8" />
        <CalcButton buttonId="nine" buttonDesc="9" />
        <CalcButton buttonId="equals" buttonDesc="="/>
        <CalcButton buttonId="zero" buttonDesc="0" />
        <CalcButton buttonId="decimal" buttonDesc="." />
      </div>
    );
  }
}

class CalcDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <React.Fragment>
        <div class="index__displayCal">{this.props.disResult}</div>
      </React.Fragment>
    )
  }
}

const CalcButton = (props) => {
  return (
    <React.Fragment>
      <div id={props.buttonId} class="index__buttonBorder">{props.buttonDesc}</div>
    </React.Fragment>  
  )
}

export default App;
