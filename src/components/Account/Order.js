import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {getOlderOrders, getOrdersLastYear, getOrdersRedis} from "../../store/actions/orderAction";
import OrderList from "./OrderList";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./Order.scss"

const Order = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.authReducer?.userInfo)
    const recentOrders = useSelector(state => state.orderReducer?.recentOrders)
    const lastYearOrders = useSelector(state => state.orderReducer?.lastYearOrders)
    const olderOrders = useSelector(state => state.orderReducer?.olderOrders)

    const recentHandler = () => {
        dispatch(getOrdersRedis(user.token))
    }

    const lastYearHandler = () => {
        dispatch(getOrdersLastYear(user.token))
    }

    const olderOrdersHandler = () => {
        dispatch(getOlderOrders(user.token))
    }

    return (
        <div className='order-container'>
            <div className='order-content'>
                <Accordion onClick={recentHandler}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls='recent-content' id='recent-header'>
                        <div>Recent Orders (This Year)</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        {recentOrders.length === 0
                            ? <h3>No Recent Order Founded.</h3>
                            : recentOrders.map(order => <OrderList key={order.id} order={order} token={user.token}/>)
                        }
                    </AccordionDetails>
                </Accordion>
                <Accordion onClick={lastYearHandler}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls='last-year-content' id='last-year-header'>
                        <div>Recent Orders (Year 2021)</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        {lastYearOrders.length === 0
                            ? <h3>No Recent Order Founded.</h3>
                            : lastYearOrders.map(order => <OrderList key={order.id} order={order} token={user.token}/>)
                        }
                    </AccordionDetails>
                </Accordion>
                <Accordion onClick={olderOrdersHandler}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls='old-content' id='old-header'>
                        <div>Previous Orders (Year 2020 and before)</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        {olderOrders.length === 0
                            ? <h3>No Recent Order Founded.</h3>
                            : olderOrders.map(order => <OrderList key={order.id} order={order} token={user.token}/>)
                        }
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};

export default Order;
