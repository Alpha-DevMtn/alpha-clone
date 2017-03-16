const INPUT_CHANGED = 'red1/INPUT_CHANGED';
const CUST_INFO = 'red1/CUST_INFO';

const initialState = {
  newPayload: '',
  customerInfo: 'BLANK INFO'
}

export default function reducer(state=initialState, action) {
  console.log('action: ', action);
  switch(action.type) {
    case INPUT_CHANGED:
    console.log('Input action.payload: ', action.payload);
      return {
        ...state,
        newPayload: action.payload
      }
    case CUST_INFO:
    console.log('CUST action.payload: ', action.payload);
      return {
        ...state,
        customerInfo: action.payload
      }
    default:
      return state;
  }
}

export function sendToStore(data) {
  return {
    type: INPUT_CHANGED,
    payload: data
  }
}

export function customerInfo(data) {
  return {
    type: CUST_INFO,
    payload: data
  }
}
