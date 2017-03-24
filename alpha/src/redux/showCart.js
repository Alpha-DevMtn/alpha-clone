const SHOWCART = "checkout/SHOWCART";

const initialState = {
  display: "none-cs"
}

export default function reducer(state=initialState, action) {
  switch(action.type) {

    case SHOWCART:
      return {
        ...state,
        display: action.show.slide
      };

    default:
      return state;
  }
}

export function visible( show ) {
    return { type: SHOWCART, show };
}
