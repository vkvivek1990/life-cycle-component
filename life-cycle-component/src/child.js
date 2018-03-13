import React, { Component } from 'react';
import './App.css';

class Child extends Component {
  //Call One time on Initial Stage
  //Here best Practise Initial state
  constructor(){
    super();  
    console.log('Child Constructor');
  }
  //after the Constructor Calling Method is componentwillMount
  componentWillMount(){
   
    console.log('Child componentWillMount');
  }
  componentDidMount(){
    console.log("Child componentdidMount");
  }
  componentWillReceiveProps(){
    console.log("Child componentWillReceiveProps");
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log(nextProps,nextState,"Child shouldComponentUpdate");
    return true;
  }
  componentWillUpdate(){
    console.log("Child componentWillUpdate");
  }
  componentDidUpdate(){
      console.log('Child Component Did Update')
  }
  componentWillUnmount(){
    console.log('Child componentWillUnmount')
  }
  render() {
    console.log("Child Render");
    return (
      <div className="App">
         Child Name : {this.props.name}
      </div>
    );
  }
}

export default Child;
