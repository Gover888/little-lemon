import React from 'react';

import BasicRating from "../BasicRating";
import {CARRIAGE_COLOR, THEME_COLOR} from "../../../../store/Const";

import "./index.scss"

const OutlineProductInfo = ({sumPrice, product:{productName, designer, currency, highlights, carriageExpense}}) => {

    return (
        <div className='outlineProductInfo'>
        <p className='productName'>{productName}</p>
        <p className='designer'>Designed by {designer}</p>
        <BasicRating color={THEME_COLOR}/>
        <span className='currency'>{currency}: </span>
        <span className='price'>{sumPrice.toFixed(2)}</span>
        <ul className='highlights'>{highlights.map((item, index) => <li key={index}>${item} </li>)}</ul>
        <p className='carriageExpense' style={{'color': CARRIAGE_COLOR}}>{carriageExpense !== '0' ? `Carriage' +
                        ' Expense: ${currency}: ${parseFloat(carriageExpense)}` : 'Free Shipping'}</p>
    </div>
    );
}

export default OutlineProductInfo;