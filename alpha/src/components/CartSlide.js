import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendToStore } from '../redux/red1';

const bord = {
   borderStyle: 'solid',
   width: '210px',
   height: '310px',
   margin: '10px',
   float: 'left'
}

const imgStyle = {
  width: '200px'
}



class CartSlide extends Component {

  constructor(props){
    super(props);

    this.state = {
      id: ''
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.props.sendToStore(this.state.id);
    console.log('this.props: ', this.props);
  }

  render() {
    return (
      <div style={bord}>
      <p>each </p>
<h1>Input Value: {this.props.newInput}</h1>
      <h2>{this.props.item.title}</h2>
      <img src={this.props.item.image} alt="" style={imgStyle} />
      <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state: ', state);
  return {
    newInput: state.red1.old
  }
}

const mapDispatchToActionProviders = {
  sendToStore: sendToStore
}

export default connect(mapStateToProps, mapDispatchToActionProviders)(CartSlide);
