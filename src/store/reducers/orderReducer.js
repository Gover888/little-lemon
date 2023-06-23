import {GET_LAST_YEAR_ORDERS, GET_OLDER_ORDERS, GET_RECENT_ORDERS} from "../Const";

const initState = {
    recentOrders: [],
    lastYearOrders: [],
    olderOrders: []
}

const orderReducer = (prevState = initState, action) => {
    switch (action.type){
        case GET_RECENT_ORDERS:
            return {...prevState, recentOrders: action?.payload}

        case GET_LAST_YEAR_ORDERS:
            return {...prevState, lastYearOrders: action?.payload}

        case GET_OLDER_ORDERS:
            return {...prevState, olderOrders: action?.payload}

        default:
            return prevState
    }
}

export default orderReducer