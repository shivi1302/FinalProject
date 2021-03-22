import types from './types';

const initialState = {
  cardArray: [],
  counter:0
};
export default function (state = initialState, action) {
  const {cardArray}=state
  switch (action.type) {
    case types.ADDTOCART: {
      return {
        ...state,
        cardArray: [...cardArray, action.payload],
        counter:cardArray.length+1
        
      };
    }
    default:
      return {
        ...state,
      };
  }
}
