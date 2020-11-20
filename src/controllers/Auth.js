import {axios} from "../services/APIService"


const login = (email, password) => {
    return axios.post(`/auth/login`, {email, password})
}


export {login}
