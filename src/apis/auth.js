import { LOGIN } from "../config/urls";
import {apiDelete,apiGet,apiPost,apiPut} from "../uttils/utils"
export function Login(data ={}) {
    return apiPost(LOGIN,data);
}