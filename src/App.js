/*Finish the operation where if the last character is an arithmetic operator and the next input is also
 * an operator the input will replace the previous operator 
 * 
 * 
 *       if (this.state.result.charAt(this.state.result.length - 1) === '*' || this.state.result.charAt(this.state.result.length - 1) === '/' || this.state.result.charAt(this.state.result.length - 1) === '-' || this.state.result.charAt(this.state.result.length - 1) === '+')){

 */
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: '0',
      resetResult: false,
    }
    this.handleChange = this.handleChange.bind(this);
  }

    handleChange(setVal) {
      //Validate that if arithmetic operation is input consecutively than the last input replaces the previous operator
      if (this.state.result.length > 1 && (setVal === '*' || setVal === '/' || setVal === '-' || setVal === '+')) {

        if ((this.state.result.charAt(this.state.result.length - 1) === '*') || (this.state.result.charAt(this.state.result.length - 1) === '/') || (this.state.result.charAt(this.state.result.length - 1) === '-') || (this.state.result.charAt(this.state.result.length - 1) === '+')) {
          var resetVal = this.state.result.substr(0, this.state.result.length - 1) + setVal
          this.setState({
            result: resetVal
          })
          return this.state.result;
        } 
      }
     //Validates operation and decimals when there is only '0'
      if (this.state.result.length === 1 && this.state.result[0] === '0') {
        if (setVal === 'CA' || setVal === '*' || setVal === '/' || setVal === '-' || setVal === '+' || setVal === '=') {
          setVal = '0';
        } else if (setVal === '.') {
          setVal = '0.'
        }
        this.setState({
          result: setVal,
        })
      }//Check input and clear and enter and decmical differently
      else if (setVal !== 'CA' && setVal !== '=' && setVal !== '.') {
        this.setState({
          result: this.state.result + setVal,
        })
      } else if (setVal === '=') {
        if ((this.state.result.charAt(this.state.result.length - 1) === '*') || (this.state.result.charAt(this.state.result.length - 1) === '/') || (this.state.result.charAt(this.state.result.length - 1) === '-') || (this.state.result.charAt(this.state.result.length - 1) === '+')) {
          this.setState({
            result: eval(this.state.result.substr(0, this.state.result.length - 1)),
            resetResult: true,
          })
          return this.state.result;
        }

        this.setState({
          result: eval(this.state.result),
          resetResult: true,
        })
      } else if (setVal === 'CA') {
        this.setState({
          result: '0'
        })
      } else if (setVal === '.') {
        this.setState({
          result: this.state.result + '0.'
        })
      }
    }

  render() {
     return (
       <div className="App">
         <div className ="calcBody">
           <div className="calcWrapper">
             <CalcDisplay disResult={this.state.result} />
              <CalcButton buttonId="clear" buttonDesc="CA" hChange={this.handleChange} />
              <CalcButton buttonId="divide" buttonDesc="/" hChange={this.handleChange} />
              <CalcButton buttonId="multiply" buttonDesc="*" hChange={this.handleChange} />
              <CalcButton buttonId="one" buttonDesc="1" hChange={this.handleChange} />
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
              <CalcButton buttonId="decimal" buttonDesc="." hChange={this.handleChange} />
           </div>
         </div>
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
