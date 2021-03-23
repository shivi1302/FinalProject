import types from './types';

const initialState = {
  cardArray: [],
  counter:0,
  total:0
};
export default function (state = initialState, action) {
  const {cardArray}=state
  switch (action.type) {
    case types.ADDTOCART: {
      return {
        ...state,
        cardArray: [...cardArray, action.payload],
        counter:cardArray.length+1,
      };
    }
    case types.DELETEFROMCART:{
      return{
        ...state,
       cardArray:[
        ...cardArray.filter(cardArray=>cardArray.id!==action.payload)
       ], 
       counter:cardArray.length-1
      }
    }
 
    default:
      return {
        ...state,
      };
  }
}

