import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {saveAs} from "file-saver"

import {deleteOrders, getOneOrder} from "../store/actions/orderAction";
import CategoryNav from "../components/Util/CategoryNav";
import Loading from "../components/Util/Loading";
import OrderItem from "../components/Account/OrderItem";

import "./OrderDetail.scss"
import {ORDER_URL} from "../store/Const";

const formatDate = (dateString) => {
    return new Date(dateString.slice(0, 10)).toDateString()
}

const OrderDetail = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.authReducer?.userInfo)

    const {orderNumber} = useParams()
    const orderNavData = ['Account', 'Order History', orderNumber]

    const [order, setOrder] = useState({})
    // console.log(order)

    useEffect(() => {
        dispatch(getOneOrder(orderNumber, setOrder))
    }, [])

    const deleteHandler = () => {
        dispatch(deleteOrders(orderNumber, user.token))
        navigate('/profile', {replace: true})
    }

    const downloadHandler = async () => {
        const generatePdf = async () => {
            // console.log('generate pdf')
            const response = await axios.post(`${ORDER_URL}/create-pdf`, {order})
            return response
        }
        try {
            const data = await generatePdf()
            // console.log('generate pdf result', data)
            if (data.status === 200) {
                const response = await axios.get(`${ORDER_URL}/fetch-pdf/${orderNumber}`, {responseType: "blob"})
                const pdfBlob = await new Blob([response.data], {type: "application/pdf"})
                await saveAs(pdfBlob, `${orderNumber}-receipt.pdf`)
            }
        } catch (error) {
            console.log(error)
        }
    }

    let orderDetail
    if (order) {
        const {
            firstName,
            lastName,
            address,
            city,
            province,
            country,
            createdAt,
            orderNumber,
            isComplete,
            orderItems
        } = order
        if (orderItems) {
            let createDate = formatDate(createdAt)
            const summaryPrice = orderItems.reduce((prev, current) => Number(prev) + Number(current.price), 0).toFixed(2)
            const estimatedTax = (summaryPrice * (orderItems[0].taxRate - 1)).toFixed(2)
            const totalPrice = (summaryPrice * orderItems[0].taxRate).toFixed(2)
            orderDetail =
                <>
                    <p>Order on {createDate} | Order# {orderNumber}</p>
                    <p>Order Status: {isComplete ? 'Completed ✔' : 'Closed ❌'}</p>
                    <button className='button-weak' onClick={deleteHandler}>Delete Record</button>
                    <button onClick={downloadHandler}>Download Invoice</button>
                    <div className='first-box'>
                        <div className='address'>
                            <h4>Shipping Address</h4>
                            <p>{firstName} {lastName}</p>
                            <p>{address},</p>
                            <p>{city}, {province}, {country}</p>
                        </div>
                        <div className='summary'>
                            <h4>Order Summary</h4>
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
                        </div>
                    </div>
                    <div className='order-items'>
                        {orderItems.length > 1 && <div className='top-line'>{orderItems.length} Shipments</div>}
                        {orderItems.map(item => <OrderItem key={item.id} orderItem={item}/>)}
                    </div>
                </>
        }
    }

    return (
        <div className='order-detail-container'>
            <CategoryNav categoryNavData={orderNavData}/>
            <div className='detail'>
                <h1>Order Detail</h1>
                {
                    order
                        ? orderDetail
                        : <Loading/>
                }
            </div>
        </div>
    );
};

export default OrderDetail;