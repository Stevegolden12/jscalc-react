import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <CalcDisplay />
        <CalcButton buttonId="clear" buttonDesc="CA" />
        <CalcButton buttonId="multiply" buttonDesc="X" />
        <CalcButton buttonId="divide" buttonDesc="/" />
        <CalcButton buttonId="one" buttonDesc="/" />
        <CalcButton buttonId="two" buttonDesc="/" />
        <CalcButton buttonId="three" buttonDesc="/" />
        <CalcButton buttonId="subtract" buttonDesc="/" />
        <CalcButton buttonId="four" buttonDesc="/" />
        <CalcButton buttonId="five" buttonDesc="/" />
        <CalcButton buttonId="six" buttonDesc="/" />
        <CalcButton buttonId="add" buttonDesc="/" />
        <CalcButton buttonId="seven" buttonDesc="/" />
        <CalcButton buttonId="eight" buttonDesc="/" />
        <CalcButton buttonId="nine" buttonDesc="/" />
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
        <div class="index__buttonBorder">Display</div>
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
