import types from "./types";
const initialState={
    cardArray:[]
}
export default function (state=initialState,action) {
    const {cardArray} = state
    switch(action.type){
        case types.ADDTOCART:
            return{
                ...state,
                cardArray:[...cardArray,]
            }
    }
}