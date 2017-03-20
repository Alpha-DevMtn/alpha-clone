import React, { Component } from 'react';
import Nav from './Nav';
// import '../styles/App.css';

class App extends Component {
  render(){
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
}

export default App
