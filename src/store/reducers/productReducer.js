import {PRICE_FILTER, SEARCH_KEYWORD, SORTING, UPDATE_PRODUCT_LIST} from "../Const";
import {keywordFilter, priceFilter} from "../functions/filter";
import {sortByString} from "../functions/sort";

const initState = {
    products: [], //store original product list
    renderedProducts: [], //store product list to be rendered
    sortBy: '', //store current sort string
    checkboxArr: [] //store user filter selection
}

const productStoreReducer = (prevState = initState, action) => {
    switch (action.type) {
        case UPDATE_PRODUCT_LIST:
            return {...prevState, products: action?.payload, renderedProducts: action?.payload}

        case SEARCH_KEYWORD:
            const keyword = action?.payload
            const keywordList = keywordFilter(prevState.products, keyword)

            return {...prevState, renderedProducts: keywordList, checkboxArr: []}

        case PRICE_FILTER:
            const range = action?.payload //expecting array of id [1, 3, 5]
            let filteredProducts = [...prevState.products]
            //filter
            filteredProducts = priceFilter(filteredProducts, range)
            //sort
            filteredProducts = sortByString(prevState.sortBy, filteredProducts)

            return {...prevState, renderedProducts: [...filteredProducts], checkboxArr: range}

        case SORTING:
            const sortString = action?.payload //expecting 'name a to z'
            let sortedProducts = [...prevState.renderedProducts]
            sortedProducts = sortByString(sortString, sortedProducts)

            return {...prevState, renderedProducts: sortedProducts, sortBy: sortString}

        default:
            return prevState
    }
}
export default productStoreReducer