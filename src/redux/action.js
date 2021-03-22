
import types from "./types"


export const AddToCart=(value)  => {
    return({
        type : types.ADDTOCART,
        payload: value
    }
    )
}