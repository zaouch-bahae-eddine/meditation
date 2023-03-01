import axios from "axios"
const API_URL_AUTH = process.env.REACT_APP_API_URL + "/meditation/login"
const API_URL_REGISTER = process.env.REACT_APP_API_URL + "/meditation/register"

const login = (email: string, password: string) => {
    console.log(API_URL_AUTH)
    return axios.post(API_URL_AUTH, {
        email,
        password
    }).then(res => {
        if(res.data.token){
            localStorage.setItem('user', JSON.stringify(res.data))
        }
        return res.data
    })
}

const logout = () => {
    localStorage.removeItem("user");
}

const register = (email: string, password: string) => {
    return axios.post(API_URL_REGISTER, {
        email,
        password
    }).then(res => login(email, password))
}

const getCurrentUser = () => {
    const currentUser = localStorage.getItem("user")
    if(currentUser){
        return JSON.parse(currentUser)
    }
    return null
}

export { login, logout, register, getCurrentUser }
