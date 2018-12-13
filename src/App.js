/* 12/12/2018 1am Trying to pass the correct information to state.result when the CalcButton is clicked
   Look at the stackoverflow question:
   https://stackoverflow.com/questions/38394015/how-to-pass-data-from-child-component-to-its-parent-in-reactjs

https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17

https://codepen.io/et10man/pen/xXrwOQ?editors=0010
 */

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: '0',
    }
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(setVal) {
    // do not forget to bind getData in constructor
    if (setVal !== 'CA' && setVal !== '=') {
      this.setState({
        result: this.state.result + setVal,
      })
    } else if (setVal === '=') {
      console.log('testing =')
      console.log(Number(this.state.result));
      this.setState({
        result: '='
      })
    } else {
      this.setState({
        result: '0'
      })
    }
  }

  render() {
    console.log(1 + 3)
     return (
      <div className="App">
        <CalcDisplay disResult={this.state.result} />
         <CalcButton buttonId="clear" buttonDesc="CA" hChange={this.handleChange} />
         <CalcButton buttonId="multiply" buttonDesc="X" hChange={this.handleChange} />
         <CalcButton buttonId="divide" buttonDesc="/" hChange={this.handleChange} />
        <CalcButton buttonId="one" buttonDesc="1" hChange={this.handleChange}/>
        <CalcButton buttonId="two" buttonDesc="2" hChange={this.handleChange}/>
        <CalcButton buttonId="three" buttonDesc="3"  hChange={this.handleChange}/>
        <CalcButton buttonId="subtract" buttonDesc="-" hChange={this.handleChange}/>
        <CalcButton buttonId="four" buttonDesc="4" hChange={this.handleChange}/>
        <CalcButton buttonId="five" buttonDesc="5" hChange={this.handleChange}/>
        <CalcButton buttonId="six" buttonDesc="6" hChange={this.handleChange}/>
        <CalcButton buttonId="add" buttonDesc="+" hChange={this.handleChange}/>
        <CalcButton buttonId="seven" buttonDesc="7" hChange={this.handleChange} />
        <CalcButton buttonId="eight" buttonDesc="8" hChange={this.handleChange} />
        <CalcButton buttonId="nine" buttonDesc="9" hChange={this.handleChange}/>
        <CalcButton buttonId="equals" buttonDesc="=" hChange={this.handleChange}/>
        <CalcButton buttonId="zero" buttonDesc="0" hChange={this.handleChange}/>
        <CalcButton buttonId="decimal" buttonDesc="." hChange={this.handleChange}/>
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
        <div className="index__displayCal">{this.props.disResult}</div>
      </React.Fragment>
    )
  }
}

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
        <div id={this.props.buttonId} className="index__buttonBorder" onClick={this.handleChange}>{this.props.buttonDesc}</div>
      </React.Fragment>
    )
  }
}

export default App;
