import axios from "axios";
import {ORDER_URL, CLEAR_ALL_ITEM, GET_LAST_YEAR_ORDERS, GET_OLDER_ORDERS, GET_RECENT_ORDERS} from "../Const";

export const postCheckoutRequest = (carts, userInfo, orderNumber) => {
    return async (dispatch) => {
        const checkoutRequest = async () => {
            const response = await axios.post(ORDER_URL, {
                carts,
                userInfo,
                orderNumber,
            })
            return response.data.data
        }
        try {
            const data = await checkoutRequest()
            // console.log(data)

            // if user created order, update key
            if (data) {
                await axios.get(`${ORDER_URL}/recent/${userInfo.token}`)
            }

            return dispatch({
                type: CLEAR_ALL_ITEM,
                payload: []
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getOneOrder = (orderNumber, setOrder) => {
    return async () => {
        const ordersRequest = async () => {
            const response = await axios.get(`${ORDER_URL}/${orderNumber}`)
            return response.data
        }
        try {
            let data = await ordersRequest()
            // console.log('get one order', data)
            if (data.code === 200) {
                data = data.data
            }
            setOrder(data)

        } catch (error) {
            console.log(error)
        }
    }
}


export const getOrdersRedis = (token) => {
    return async (dispatch) => {
        const ordersRequest = async () => {
            const response = await axios.get(`${ORDER_URL}/recent/${token}`)
            return response.data
        }
        try {
            let data = await ordersRequest()
            // console.log('recent orders', data)
            if (data.code === 200) {
                data = data.data
            }

            return dispatch({
                type: GET_RECENT_ORDERS,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getOrdersLastYear = (token) => {
    return async (dispatch) => {
        const ordersRequest = async () => {
            const response = await axios.get(`${ORDER_URL}/last-year/${token}`)
            return response.data.data
        }
        try {
            let data = await ordersRequest()
            // console.log('last year orders', data)

            return dispatch({
                type: GET_LAST_YEAR_ORDERS,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getOlderOrders = (token) => {
    return async (dispatch) => {
        const ordersRequest = async () => {
            const response = await axios.get(`${ORDER_URL}/old/${token}`)
            return response.data.data
        }
        try {
            let data = await ordersRequest()

            return dispatch({
                type: GET_OLDER_ORDERS,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteOrders = (orderNumber, token) => {
    return async () => {
        const deleteOrdersRequest = async () => {
            const response = await axios.delete(`${ORDER_URL}/${orderNumber}`, {
                data: {token}
            })
            return response.data
        }
        try {
            const data = await deleteOrdersRequest()
            // console.log('delete order', data)
            if (data.code === 200) {
                await axios.get(`${ORDER_URL}/recent/${token}`)
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const completeOrder = (token, orderNumber, setOrderNumber, navigate) => {
    return async () => {
        const completeOrderRequest = async () => {
            // console.log('complete order action', orderNumber)
            const response = await axios.put(`${ORDER_URL}/${orderNumber}`, {token: token})
            return response.data
        }
        try {
            const data = await completeOrderRequest()
            // console.log('completed order', 'reset order number')
            if (data.code === 200) {
                setOrderNumber('')
                await axios.get(`${ORDER_URL}/recent/${token}`)
                await axios.get(`${ORDER_URL}/${orderNumber}`)
                navigate('/profile')
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const switchTaxRate = (province) => {
    switch (province) {
        case "AB":
            return 1.05
        case "BC":
            return 1.12
        case "MB":
            return 1.12
        case "NB":
            return 1.15
        case "NL":
            return 1.15
        case "NT":
            return 1.05
        case "NS":
            return 1.15
        case "NU":
            return 1.05
        case "ON":
            return 1.13
        case "PE":
            return 1.15
        case "QC":
            return 1.15
        case "SK":
            return 1.11
        case "YT":
            return 1.05
        default:
            return 1.05
    }
}