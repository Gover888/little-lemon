import React from 'react';
import "./OrderItem.scss"

const OrderItem = ({orderItem}) => {
    const {productDetail, price} = orderItem
    const detail = JSON.parse(productDetail)
    // console.log(detail)

    return (
        <div className='order-item-container'>
            <img src={detail.media} alt=""/>
            <div className='product-name'>
                <h2>{detail.name}</h2>
                <p>{detail.Armpad},
                    {detail.Arms},
                    {detail['Back Support']},
                    {detail.Caster},
                    {detail['Frame / Base']},
                    {detail.Size},
                    {detail.Tilt}</p>
                <h3>CDN$ {price}</h3>
            </div>
        </div>
    );
};

export default OrderItem;
