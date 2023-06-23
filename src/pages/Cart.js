import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import CartList from "../components/Cart/CartList";
import CategoryNav from "../components/Util/CategoryNav";

import "./Cart.scss"

const cartNavData = ['Office', 'Cart']

const Cart = () => {
    const carts = useSelector(state => state?.cartReducer?.carts)
    // console.log(carts)
    return (
        <div className="carts-container">
            <CategoryNav categoryNavData={cartNavData}/>
            <div className="cart-header">
                <h1>My Cart</h1>
                <div className="context-info">
                    <h2>For orders, questions or concerns:</h2>
                    <p>Please call <u>888 798 0202</u></p>
                </div>
            </div>
            {carts.length === 0
                ? <div className="cart-empty">
                        <h1>Your cart is empty, but it doesn't have to be.</h1>
                        <Link to="/">
                            Continue Shopping
                        </Link>
                    </div>
                : <CartList carts={carts}/>}
        </div>
    );
};

export default Cart;
