//filter related function

// filter target product list according to price range array (checkbox id array => to be switched to price range array)
export const priceFilter = (productList, idArr) => {
    let newList = []
    let result

    if (idArr.length === 0) {
        return newList = [...productList]
    } else {
        let priceRangeArr = switchRange(idArr)

        priceRangeArr.map(range => {
            result = productList.filter(product => product.price >= range[0] && product.price < range[1])
            return newList = [...newList, ...result]
        })
    }
    return newList
}

//switch checked box id array to price range array
export const switchRange = (rangeArr) => {
    let priceRangeArr = []
    rangeArr.map(range => {
        switch (range) {
            case 1:
                priceRangeArr = [...priceRangeArr, [0, 500]]
                break;
            case 2:
                priceRangeArr = [...priceRangeArr, [500, 1000]]
                break;
            case 3:
                priceRangeArr = [...priceRangeArr, [1000, 1500]]
                break;
            case 4:
                priceRangeArr = [...priceRangeArr, [1500, 2000]]
                break;
            case 5:
                priceRangeArr = [...priceRangeArr, [2000, 2500]]
                break;
            case 6:
                priceRangeArr = [...priceRangeArr, [2500, 9999]]
                break;
            default:
                break;
        }
        return priceRangeArr
    })
    return priceRangeArr
}

//filter target product list according to keyword (user input)
export const keywordFilter = (productList, keyword) => {
    keyword = keyword.toLowerCase()

    let newList = [...productList]
    newList = newList.filter(item => item.name.includes(keyword))

    return newList
}

// check if id is existing in the checkbox array
export const toggleId = (idArr, id) => {
    let newArr = [...idArr]
    //check id if exist in array
    let isExist = newArr.find(item => item === id)
    if (isExist) {
        newArr = newArr.filter(item => item !== id)
    } else {
        newArr = [...newArr, id]
    }
    return newArr
}