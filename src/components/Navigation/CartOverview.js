import React from 'react';
import {useSelector} from "react-redux";

import './CartOverview.scss'

const CartOverview = () => {
    const carts = useSelector(state => state?.cartReducer.carts)

    return (
        <div className='cart-overview-contents'>
            {carts.length > 0 && <h4>Cart Contents</h4>}
            {carts.length === 0
                ? <h4>Empty Cart</h4>
                : carts.map(item => (
                    <div key={item.createdAt}>
                        <div className="cart-view">
                            <img src={item.productInfo.media} alt="" className="img"/>
                            <div className="right-column">
                                <p>Product: {item.productInfo.name}</p>
                                <p>Price: ${item.productInfo.sumPrice}</p>
                                <p>Qty: {item.qty}</p>
                            </div>
                        </div>
                    </div>
                ))}
        </div>

    );
};

export default CartOverview;