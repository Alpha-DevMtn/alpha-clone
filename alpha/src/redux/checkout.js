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
      return {
        ...state,
        firstName: action.customerInfo.firstName
      , lastName: action.customerInfo.lastName
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
