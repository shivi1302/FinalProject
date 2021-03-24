
import types from "../types"


export const AddToCart=(value)  => {
    return({
        type : types.ADDTOCART,
        payload: value
    }
    )
}

export const DeleteFromCart =(id)=>{
    return({
        type:types.DELETEFROMCART,
        payload:id
    })
}