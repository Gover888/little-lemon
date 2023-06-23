import React from 'react';
import {useSelector} from "react-redux";
import {Navigate, Route, Routes} from "react-router-dom";

import Loading from "../components/Util/Loading";
import Home from "./Home";
import Account from "./Account";
import Profile from "./Profile";
import Product from "./Product";
import Cart from "./Cart";
import Payment from "./Payment";
import OrderDetail from "./OrderDetail";

const RouterPage = () => {
    const products = useSelector(state => state?.productReducer?.products)
    const isLoggedIn = useSelector(state => state?.authReducer.isLoggedIn)
    return (
        <>
            {products.length === 0
                ? <Loading/>
                : <Routes>
                    <Route path='/' element={<Navigate to='/home'/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/product/:id' element={<Product/>}/>
                    <Route path='/cart' element={<Cart/>}/>

                    {/*page is render depends on whether user is logged in or not*/}
                    {!isLoggedIn && <Route path='/account' element={<Account/>}/>}

                    {isLoggedIn && <Route path='/profile' element={<Profile/>}/>}
                    {isLoggedIn && <Route path='/order/:orderNumber' element={<OrderDetail/>}/>}
                    {isLoggedIn && <Route path='/payment' element={<Payment/>}/>}

                    <Route path='*' element={<Navigate to='/home'/>}/>
                </Routes>}
        </>
    );
};

export default RouterPage;
