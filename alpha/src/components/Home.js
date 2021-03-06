import React, { Component } from 'react';
import '../styles/Home.css';
// import '../styles/animations/homeAnimation.js';
import TakeControl from './TakeControl';
import Shipping from './Shipping';
import Popular from './Popular';
import Social from './Social';
import Mwa from './Mwa';



class Home extends Component {
  render() {
    return (
      <div className="Home">
        <TakeControl className="tCon"/>
        <Shipping />
        <Mwa />
        <Popular />
        <Social />
      </div>
    );
  }
}

export default Home;
