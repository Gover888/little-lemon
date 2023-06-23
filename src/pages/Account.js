import React from 'react';

import SignIn from "../components/Account/SignIn";
import Register from "../components/Account/Register";
import CategoryNav from "../components/Util/CategoryNav";

import './Account.scss'

const accountNavData = ['Office', 'Account']

const Account = () => {

    return (
        <div className='account-container'>
            <CategoryNav categoryNavData={accountNavData}/>

            <h1 className='title'>Sign In or Register</h1>
            <a className='track' href='http://localhost:3000'>Track Your Order</a>

            <div className='forms' >
                <SignIn/>
                <Register/>
            </div>
        </div>
    );
};

export default Account;
