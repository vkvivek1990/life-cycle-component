import React, { Component } from 'react';
import './App.css';
import Child from './child';

class App extends Component {
  //Call One time on Initial Stage
  //Here best Practise Initial state
  constructor(){
    super();
    this.state = {
      name:"Vivek"
    };
    console.log('Constructor');
  }
  //after the Constructor Calling Method is componentwillMount
  componentWillMount(){
    if(window.innerWidth < 500){
      this.setState({innerWidth:window.innerWidth});
    }
    console.log('componentWillMount');
  }
  componentDidMount(){
    console.log("componentdidMount");
  }
  componentWillReceiveProps(){
    console.log("componentWillReceiveProps");
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate");
    return true;
  }
  componentWillUpdate(){
    console.log("componentWillUpdate");
  }
  componentDidUpdate(){
    console.log('Component Did Update')
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  changeState(e){
    e.preventDefault();
    this.setState({name:'Kumar'})
  }
  removeComponent(e){
    e.preventDefault();
    this.setState({name:'remove'});
  }
  render() {
    console.log("Render");
    if(this.state.name === "remove"){
      return <div/>;
    }
    return (
      <div className="App">
         Name : {this.state.name} 
         innerWidth : {this.state.innerWidth}
         <Child name={this.state.name} />
         <button onClick={this.changeState.bind(this)}>Change State</button>
         <button onClick={this.removeComponent.bind(this)}>UnMount</button>
      </div>
    );
  }
}

export default App;
