import React, { Component } from 'react';
import '../styles/App.css';
import header from '../images/image1.JPG';
import TakeControl from './TakeControl';
import Shipping from './Shipping';
import Popular from './Popular';
import Social from './Social';
import Mwa from './Mwa';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TakeControl/>
        <Shipping />
        <Mwa />
        <Popular />
        <Social />
      </div>
    );
  }
}

export default App;
