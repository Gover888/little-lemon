import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import CartItem from "./CartItem";

import "./CartList.scss"
import AddressForm from "../Payment/AddressForm";

const CartList = ({carts}) => {
    const navigate = useNavigate()
    const isLoggedIn = useSelector(state => state.authReducer?.isLoggedIn)
    const [isAddress, setIsAddress] = useState(false)

    const checkoutConfirmHandler = () => {
        if (!isLoggedIn) {
            //navigate to login page
            navigate('/account')
        } else {
            setIsAddress(true)
        }
    }

    return (
        <div className='cart-list-container'>
            <table>
                <thead>
                <tr>
                    <th className='th-product-info'>Product Information</th>
                    <th>Availability</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                    {carts && carts.map(item =>
                        <CartItem
                            key={item.createdAt}
                            product={item.productInfo}
                            qty={item.qty}
                        />
                    )}
                </tbody>
            </table>

            {isAddress
                ? <AddressForm setIsAddress={setIsAddress}/>
                : <div className="checkout-btnline">
                    <button className="checkout-btn" onClick={checkoutConfirmHandler}>Checkout</button>
                </div>
            }
        </div>
    );
};

export default CartList;
