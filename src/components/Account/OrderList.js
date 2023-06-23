import React from 'react';
import {Link} from "react-router-dom";
import "./OrderList.scss"

const OrderList = ({order}) => {
    const {orderNumber, isComplete} = order

    return (
        <div className='order-list-container'>
            <div className='title'>
                <div className='order-number'>Order# {orderNumber}</div>
                <div className='is-complete'>Status: {isComplete ? 'Complete' : 'Closed'}</div>
                <Link to={`/order/${orderNumber}`}><button>View Detail</button></Link>
            </div>
        </div>
    );
};

export default OrderList;
