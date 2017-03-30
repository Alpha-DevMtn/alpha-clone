const CUSTOMER = "checkout/CUSTOMER";
const SHIPPING = "checkout/SHIPPING";

const initialState = {
  email: ""
  , firstName: ""
  , lastName: ""
  , company: ""
  , address: ""
  , apt: ""
  , city: ""
  , country: ""
  , usstate: ""
  , zip: ""
  , phone: ""
  , shipping: ""
  , saveInfo: ""
}

export default function reducer(state=initialState, action) {
  switch(action.type) {

    case CUSTOMER:
    console.log('action.customerInfo: ', action.customerInfo);
      return {
        ...state,
      email: action.customerInfo.email
      ,  firstName: action.customerInfo.firstName
      , lastName: action.customerInfo.lastName
      , company: action.customerInfo.company
      , address: action.customerInfo.address
      , apt: action.customerInfo.apt
      , city: action.customerInfo.city
      , country: action.customerInfo.country
      , usstate: action.customerInfo.usstate
      , zip: action.customerInfo.zip
      , phone: action.customerInfo.phone
      };

    case SHIPPING:
    return {
      ...state,
      shipping: action.shippingInfo.shipping
    , saveInfo: action.shippingInfo.saveInfo
    };

    default:
      return state;
  }
}

export function gatherInfo( customerInfo ) {
    return { type: CUSTOMER, customerInfo };
}

export function ship( shippingInfo ) {
    return { type: SHIPPING, shippingInfo };
}
