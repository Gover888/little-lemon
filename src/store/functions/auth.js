// calculate token remaining expiration time
export const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime()
    const adjExpirationTime = new Date(expirationTime).getTime()

    return adjExpirationTime - currentTime
}

// retrieve local storage token, check if remain expiration time is less than 1 hour
export const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token')
    const storedExpirationTime = localStorage.getItem('expirationTime')

    const remainingTime = calculateRemainingTime(storedExpirationTime) //should be less than 1 hour

    if (remainingTime <= 10000) {
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')
        return null
    }
    return {
        token: storedToken,
        remainingTime,
    }
}