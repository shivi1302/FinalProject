import { LOGIN, SIGNUP } from "../config/urls";
import {apiDelete,apiGet,apiPost,apiPut} from "../uttils/utils"
export function Login(data ={}) {
    return apiPost(LOGIN,data);
}

export function SignUp(data={}) {
    return apiPost(SIGNUP,data)
}