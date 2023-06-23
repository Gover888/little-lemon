import React from 'react';
import {useSelector} from "react-redux";
import "./OrderOverview.scss"

const OrderOverview = () => {
    const carts = useSelector(state => state.cartReducer?.carts)
    const addressInfo = useSelector(state => state.authReducer?.addressInfo)
    console.log(addressInfo)
    const summaryPrice = carts.reduce((prev, current) => Number(prev) + Number(current.productInfo.sumPrice), 0).toFixed(2)
    let tableElement
    if (addressInfo) {
        const estimatedTax = (summaryPrice * (addressInfo.taxRate - 1)).toFixed(2)
        const totalPrice = (summaryPrice * (addressInfo.taxRate)).toFixed(2)
        tableElement =
            <table>
                <tbody>
                <tr>
                    <td className='left-column'>Item(s) Subtotal:</td>
                    <td className='right-column'>CDN$ {summaryPrice}</td>
                </tr>
                <tr>
                    <td className='left-column'>Estimated Tax:</td>
                    <td className='right-column'>CDN$ {estimatedTax}</td>
                </tr>
                <tr>
                    <td className='left-column'>Total Price:</td>
                    <td className='right-column'>CDN$ {totalPrice}</td>
                </tr>
                </tbody>
            </table>
    }

    return (
        <div className='overview-container'>
            <h3>Order</h3>
            {carts && carts.map(item => <div className='overview-item' key={item.createdAt}>
                <img src={item.productInfo.media} alt=""/>
                <div className='product-name'>
                    <h2>{item.productInfo.name}</h2>
                    <p>{item.productInfo.Armpad},
                        {item.productInfo.Arms},
                        {item.productInfo['Back Support']},
                        {item.productInfo.Caster},
                        {item.productInfo['Frame / Base']},
                        {item.productInfo.Size},
                        {item.productInfo.Tilt}</p>
                </div>
                <div className='price'>$ {item.productInfo.sumPrice}</div>
            </div>)
            }
            <h3>Summary</h3>
            <div className='summary'>{tableElement}</div>
        </div>
    );
};

export default OrderOverview;
