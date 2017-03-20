import React from 'react';
import {connect} from 'react-redux';
import { sendCustomerInfo, newPayload } from '../redux/red1';
class Customer extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      id: '',
      qty: '',
      stored: []
    }


    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {

    this.props.sendCustomerInfo('info for you');
    
  }

  render() {
    return(
      <div>
        <h3>{this.props.newPayload}</h3>
        <h3>{this.props.customerInfo}</h3>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <button type="button" onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  
  return {
    newInput: state.red1.newPayload,
    customerInfo: state.red1.customerInfo
  }
}

const mapDispatchToActionProviders = {
  sendCustomerInfo: sendCustomerInfo
}

export default connect(mapStateToProps, mapDispatchToActionProviders)(Customer);
