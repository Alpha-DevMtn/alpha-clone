import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendToStore } from '../redux/red1';
import { Link } from 'react-router';

const bord = {
   borderStyle: 'solid',
   width: '210px',
   height: '210px',
   margin: '100px',
   float: 'left'
}

const imgStyle = {
  width: '200px'
}

class CartSlide extends Component {

  constructor(props){
    super(props);

    this.state = {
      id: '',
      qty: ''
    }


    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  handleChange (event) {
    this.setState({
      qty: event.target.value
    })
  }

  handleClick () {
    this.props.sendToStore(this.state.qty);
    console.log('this.props: ', this.props);
  }

  render() {
    return (
      <div style={bord} onLoad={this.getCart}>
        <Link to="/customer"><p>CUSTOMER</p></Link>
        <h3>{this.props.newInput}</h3>
        <input onChange={this.handleChange} value={this.state.qty}/>
        <button type="button" onClick={this.handleClick}>Add</button>
      </div>
    );
  }

  componentDidMount(){
    var temp = localStorage.getItem("my-cart");
    this.state.id = temp;
  }
}


function mapStateToProps(state) {
  return {
    newInput: state.red1.newPayload
  }
}

const mapDispatchToActionProviders = {
  sendToStore: sendToStore
}

export default connect(mapStateToProps, mapDispatchToActionProviders)(CartSlide);
