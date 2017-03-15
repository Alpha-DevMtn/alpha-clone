import React, { Component } from 'react';
import '../styles/Home.css';
import TakeControl from './TakeControl';
import Shipping from './Shipping';
import Popular from './Popular';
import Social from './Social';
import Mwa from './Mwa';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <TakeControl className="control" />
        <Shipping />
        <Mwa />
        <Popular />
        <Social />
      </div>
    );
  }
}

export default Home;
