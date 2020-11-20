import {axios} from "../services/APIService"


const login = (email, password) => {
    return axios.post(`/auth/login`, {email, password})
}

const forgotPassword = (email) => {
    return axios.post('/auth/forgotPassword', {email})
}

const resetPassword = (userId, token, newPassword) => {
    return axios.patch('/auth/resetPassword', {userId, token, password: newPassword})
}

export {login, forgotPassword, resetPassword}
