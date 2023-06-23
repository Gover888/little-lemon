import {CLEAR_ALL_ITEM, EDIT_CART_QTY, REMOVE_CART_ITEM, UPDATE_CART_LIST} from "../Const";
import {editCartByQuantity, removeCartItem, updateCarts} from "../functions/compareHash";


const cartsLocalStorage = JSON.parse(localStorage.getItem('cartArr'))

const initCarts = {
    carts: cartsLocalStorage || [] //[ {productInfo: {}, qty: Number, createdAt: new Date()} ]
}

const cartReducer = (prevState = initCarts, action) => {
    switch (action.type) {
        case UPDATE_CART_LIST:
            const order = action?.payload
            const updatedCarts = updateCarts(prevState.carts, order, order.qty)

            localStorage.setItem('cartArr', JSON.stringify(updatedCarts))
            return {...prevState, carts: updatedCarts}

        case EDIT_CART_QTY:
            const newQty = action?.payload.qty
            const targetProduct = action?.payload.targetProduct
            const editedList = editCartByQuantity(prevState.carts, targetProduct, newQty)

            localStorage.setItem('cartArr', JSON.stringify(editedList))
            return {...prevState, carts: editedList}

        case REMOVE_CART_ITEM:
            const product = action?.payload
            const removedList = removeCartItem(prevState.carts, product)

            localStorage.setItem('cartArr', JSON.stringify(removedList))
            return {...prevState, carts: removedList}

        case CLEAR_ALL_ITEM:
            localStorage.removeItem('cartArr')

            return {...prevState, carts: action?.payload}

        default:
            return prevState
    }
}
export default cartReducer