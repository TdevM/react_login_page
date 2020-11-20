import {axios} from "../services/APIService"


const login = (email, password) => {
    return axios.post(`/auth/login`, {email, password})
}

const forgotPassword = (email) => {
    return axios.post('/auth/forgotPassword', {email})
}

export {login, forgotPassword}
