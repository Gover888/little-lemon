import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {postCheckoutRequest} from "../../store/actions/orderAction";

import "./AddressOverview.scss"

const AddressOverview = ({setIsPaypal, setOrderNumber}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const addressInfo = useSelector(state => state.authReducer?.addressInfo)
    const carts = useSelector(state => state.cartReducer?.carts)

    const placeOrder = () => {
        let date = new Date()
        const newOrderNumber = `HERM${date.getTime()}`
        setOrderNumber(newOrderNumber)
        dispatch(postCheckoutRequest(carts, addressInfo, newOrderNumber))
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        setIsPaypal(true)
    }

    return (
        <div className='address-container'>
            <h3>Checkout</h3>
            <div className='address-content'>
                <h4>Mailing Address:</h4>
                <h4>{addressInfo.firstName} {addressInfo.lastName}</h4>
                <h4>{addressInfo.address}, {addressInfo.city}, {addressInfo.province}, {addressInfo.country}</h4>
                <button onClick={placeOrder}>Place Order</button>
                <button onClick={() => navigate('/cart')}>Cancel</button>
            </div>
        </div>
    );
};

export default AddressOverview;
