import {LOG_IN, LOG_OUT, SAVE_ADDRESS} from "../Const";
// import {retrieveStoredToken} from "../functions/auth";
// import {logout} from "../actions/auhAction";

let initToken
let initUserInfo
// export const tokenData = retrieveStoredToken()
const tokenData = localStorage.getItem('token')
const userInfoData = JSON.parse(localStorage.getItem('userInfo'))

//check token when user refresh, set init token and update token expiration time
if (tokenData && userInfoData) {
    initToken = tokenData || ''
    initUserInfo = userInfoData || []
    // setTimeout(logout, tokenData.remainingTime)
}

const initState = {
    token: initToken,
    userInfo: initUserInfo,
    addressInfo: {},
    isLoggedIn: !!initToken, //boolean, if init token exists
}

const authReducer = (prevState = initState, action) => {
    switch (action.type){
        case LOG_IN:
            const loginData = action?.payload
            return {...prevState, token: loginData.token, isLoggedIn: true, userInfo: loginData}

        case LOG_OUT:
            return {...prevState, token: action?.payload, isLoggedIn: false}

        case SAVE_ADDRESS:
            return {...prevState, addressInfo: action?.payload}

        default:
            return prevState
    }
}

export default authReducer