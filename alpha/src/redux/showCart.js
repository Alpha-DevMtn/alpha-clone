const SHOWCART = "checkout/SHOWCART";
const FULLCART = "checkout/FULLCART";
const THECART = "checkout/THECART";
const QUANTITY = "checkout/QUANTITY";

const initialState = {
  display: 'none-cs',
  fullCart: [],
  theCart: [],
  quant: 0
}

export default function reducer(state=initialState, action) {
  switch(action.type) {

    case SHOWCART:
      return {
        ...state,
        display: action.show.slide
      };

    case FULLCART:
      return {
        ...state,
        fullCart: action.full.fullCart,
        theCart: action.full.theCart,
        quant: action.full.quant
      };

    case THECART:
      return {
        ...state,
        theCart: action.cart.theCart
      };

    case QUANTITY:
      return {
        ...state,
        quant: action.quantity.quant
      };

    default:
      return state;
  }
}

export function visible( show ) {
    return { type: SHOWCART, show };
}

export function full( full ) {
    return { type: FULLCART, full };
}

export function localCart( cart ) {
    return { type: THECART, cart };
}

export function cartQuantity( quantity ) {
    return { type: QUANTITY, quantity };
}
