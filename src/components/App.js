/*Finish the operation where if the no two decimals can be in the same number
 * * Going to need to check the string for the last operator
 *   get that string
 *   check for a decimal
 * 
 *       if (this.state.result.charAt(this.state.result.length - 1) === '*' || this.state.result.charAt(this.state.result.length - 1) === '/' || this.state.result.charAt(this.state.result.length - 1) === '-' || this.state.result.charAt(this.state.result.length - 1) === '+')){

 */
import React, { Component } from 'react';
import '../App.css';
import CalcButton from './CalcButton'
import CalcDisplay from './CalcDisplay'

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

      //Validate that if arithmetic operation is input cannot add a zero after it
      if (this.state.result.length > 1 && (setVal === '0')) {
        if ((this.state.result.charAt(this.state.result.length - 1) === '*') || (this.state.result.charAt(this.state.result.length - 1) === '/') || (this.state.result.charAt(this.state.result.length - 1) === '-') || (this.state.result.charAt(this.state.result.length - 1) === '+')) {
          setVal = '';
          return this.state.result;
        }
      }

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
             //Validate that a decimal can not be pressed twice and registered.
        let newStr = this.state.result;
        // console.log('newStr: ' + newStr); 

      // Finding the last operation position in the string
       let chkplus = newStr.lastIndexOf('+');
       let chkminus = newStr.lastIndexOf('-');
       let chkdivide = newStr.lastIndexOf('/');
       let chkmultiple = newStr.lastIndexOf('*');

        let chkVal = chkplus;
        if (chkminus > chkVal) {
          chkVal = chkminus;
        }
        if (chkdivide > chkVal) {
          chkVal = chkdivide;
        }
        if (chkmultiple > chkVal) {
          chkVal = chkmultiple;
        }
        console.log('check string: ' + newStr.slice(chkVal))
        //Get the last string from the last operation
        let chkStr = newStr.slice(chkVal);
        let ckDoubleDec = false;
        //Check to see if the last string already has a decimal and if so make a switch
        console.log("chkStr: " + chkStr.search(/['.']/))
        if (chkStr.search(/['.']/) !== -1) {
          ckDoubleDec = true;
        }

        if (ckDoubleDec === true) {
          setVal = '';
        }

        if (setVal === '.') {
          if ((this.state.result.charAt(this.state.result.length - 1) === '*') || (this.state.result.charAt(this.state.result.length - 1) === '/') || (this.state.result.charAt(this.state.result.length - 1) === '-') || (this.state.result.charAt(this.state.result.length - 1) === '+')) {
            this.setState({
              result: this.state.result + '0.'
            })
          } else {
            this.setState({
              result: this.state.result + setVal
            })

          }
        }
      }
    }

  render() {
     return (
       <div className="App">
         <h1 className="calcTitle">React Calculator</h1>
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



export default App;
