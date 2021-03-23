import { LOGIN } from '../config/urls'
import { apiDelete, apiGet, apiPost, apiPut } from '../utils/utils'
 
export function getUserProfile(query) {
    return apiGet(LOGIN+query);
}
