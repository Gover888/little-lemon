import {LOG_IN, LOG_OUT, USER_URL} from "../Const";
import axios from "axios";

export const postSignInRequest = (email, password) => {
    return async (dispatch) => {
        const signInRequest = async () => {
            const response = await axios.post(`${USER_URL}/login`, {
                email: email,
                password: password,
            })
            return response.data.data
        }
        try {
            const data = await signInRequest()
            // console.log(data)
            localStorage.setItem('token', data.token)
            localStorage.setItem('userInfo', JSON.stringify(data))
            return dispatch({
                type: LOG_IN,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const postRegisterRequest = (firstName, lastName, email, password) => {
    return async (dispatch) => {
        const signInRequest = async () => {
            const response = await axios.post(USER_URL, {
                firstName,
                lastName,
                email,
                password,
            })
            return response.data.data
        }
        try {
            const data = await signInRequest()
            // console.log(data)
            localStorage.setItem('token', data.token)
            localStorage.setItem('userInfo', JSON.stringify(data))
            return dispatch({
                type: LOG_IN,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')

    return {
        type: LOG_OUT,
        payload: ''
    }
}