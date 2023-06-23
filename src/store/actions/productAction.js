import axios from "axios"
import {PRODUCT_URL, PRICE_FILTER, SEARCH_KEYWORD, SORTING, UPDATE_PRODUCT_LIST} from "../Const";

export const fetchProductList = () => {
    return async (dispatch) => {
        const fetchProductData = async () => {
            const response = await axios.get(PRODUCT_URL)
            return response.data.data
        }

        try {
            const products = await fetchProductData()
            console.log(products)
            let data = products.map(product => ({
                ...product,
                media: product.media.split('|'),
                colorPalette: product.colorPalette.split('|')
            }))
            return dispatch({
                type: UPDATE_PRODUCT_LIST,
                payload: data
            })
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const priceFilterByRange = (range) => {
    return {
        type: PRICE_FILTER,
        payload: range
    }
}

export const productOrderBy = (sorting) => {
    return {
        type: SORTING,
        payload: sorting
    }
}

export const searchProductList = (keyword) => {
    return {
        type: SEARCH_KEYWORD,
        payload: keyword
    }
}