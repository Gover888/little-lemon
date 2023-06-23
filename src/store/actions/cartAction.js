import {
    CLEAR_ALL_ITEM,
    EDIT_CART_QTY,
    REMOVE_CART_ITEM,
    UPDATE_CART_LIST
} from "../Const";

export const updateCartList = (productInfo, quantity) => {
    return {
        type: UPDATE_CART_LIST,
        payload: {
            productInfo,
            qty: Number(quantity),
            createdAt: new Date()
        }
    }
}

export const editCartQty = (quantity, targetProduct) => {
    return {
        type: EDIT_CART_QTY,
        payload: {
            qty: Number(quantity),
            targetProduct
        },
    }
}

export const removeCart = (productInfo) => {
    return {
        type: REMOVE_CART_ITEM,
        payload: productInfo,
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_ALL_ITEM,
        payload: []
    }
}