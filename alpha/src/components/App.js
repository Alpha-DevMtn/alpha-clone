import React, { Component } from 'react';
import '../styles/App.css';
import TakeControl from './TakeControl';
import Shipping from './Shipping';
import Popular from './Popular';
import Social from './Social';
import Mwa from './Mwa';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TakeControl className="control" />
        <Shipping />
        <Mwa />
        <Popular />
        <Social />
      </div>
    );
  }
}

export default App;
