const CUSTOMER = "checkout/CUSTOMER";
const SHIPPING = "checkout/SHIPPING";

const initialState = {
  firstName: ""
, lastName: ""
, shipping: ""
, saveInfo: ""
}

export default function reducer(state=initialState, action) {
  console.log('action: ', action);
  switch(action.type) {

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
