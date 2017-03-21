// const INPUT_CHANGED = 'checkout/INPUT_CHANGED';
// const CUST_INFO = 'checkout/CUST_INFO';
const CUSTOMER = "checkout/CUSTOMER";
// const LOGOUT = "checkout/LOGOUT";
const SHIPPING = "checkout/SHIPPING";

const initialState = {
  // newPayload: '',
  // customerInfo: 'BLANK INFO',
  firstName: ""
, lastName: ""
, shipping: ""
, saveInfo: ""
// , loggedIn: false
// , address: ""
}

export default function reducer(state=initialState, action) {
  console.log('action: ', action);
  switch(action.type) {
    // case INPUT_CHANGED:
    // console.log('Input action.payload: ', action.payload);
    //   return {
    //     ...state,
    //     newPayload: action.payload
    //   }
    // case CUST_INFO:
    // console.log('CUST action.payload: ', action.payload);
    //   return {
    //     ...state,
    //     customerInfo: action.payload
    //   }

    case CUSTOMER:
console.log('state from reducer: ', state);
      return {
        ...state,
        firstName: action.customerInfo.firstName
      , lastName: action.customerInfo.lastName
      };

    case SHIPPING:
    console.log('state from reducer: ', state);
    return {
      ...state,
      shipping: action.shippingInfo.shipping
    , saveInfo: action.shippingInfo.saveInfo
    };

    default:
      return state;
  }
}

export function login( customerInfo ) {
    return { type: CUSTOMER, customerInfo };
}

export function ship( shippingInfo ) {
    return { type: SHIPPING, shippingInfo };
}

// export function sendToStore(data) {
//   return {
//     type: INPUT_CHANGED,
//     payload: data
//   }
// }
//
// export function sendCustomerInfo(data) {
//   return {
//     type: CUST_INFO,
//     payload: data
//   }
// }
