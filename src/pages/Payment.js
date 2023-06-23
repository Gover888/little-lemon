import React, {useState} from 'react';

import CategoryNav from "../components/Util/CategoryNav";
import OrderOverview from "../components/Payment/OrderOverview";
import AddressOverview from "../components/Payment/AddressOverview";
import "./Payment.scss"
import {PayPalBtn} from "../components/Payment/PayPalBtn";

const paymentNavData = ['Account', 'Payment']

const Payment = () => {
    const [isPaypal, setIsPaypal] = useState(false)
    const [orderNumber, setOrderNumber] = useState('')
    return (
        <div className='payment-container'>
            <CategoryNav categoryNavData={paymentNavData}/>
            {
                isPaypal
                    ? <div className='paypal-container'><PayPalBtn orderNumber={orderNumber} setOrderNumber={setOrderNumber}/></div>
                    : <div className='detail-container'>
                        <OrderOverview/>
                        <AddressOverview setIsPaypal={setIsPaypal} setOrderNumber={setOrderNumber}/>
                    </div>
            }
        </div>
    );
};

export default Payment;
