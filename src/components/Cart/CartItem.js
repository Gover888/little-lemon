import React, {Fragment, useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {editCartQty, removeCart} from "../../store/actions/cartAction";
import NativeSelectDemo from "./Count";
import Prompt from "../Util/Prompt";

import "./Cartitem.scss"

const CartItem = (props) => {
    const {product, qty, product: {name, stock, Size, Tilt, Arms, Armpad, Caster, sumPrice, media}} = props
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(qty)
    const [open, setOpen] = useState(false)

    const REMOVE_MESSAGE = `${name} would be removed form your shopping cart, click CONFIRM to continue.`

    const removeCancelHandler = () => {setOpen(false)}

    const removeConfirmHandler = () => {
        setOpen(false)

        //remove item
        dispatch(removeCart(product))
    }

    const qtyChangeHandler = (event, product) => {
        setQuantity(event.target.value)
        dispatch(editCartQty(event.target.value, product))
    }

    return (
        <Fragment>
            <tr>
                <td>
                    <div className="checkout-header">
                        <img src={`${media}`} alt=""/>
                        <div className="checkout-detail">
                            <p><b>{`${name}`}</b></p>
                            <p>Frame Base: {`${product['Frame / Base']}`}</p>
                            <p>Size: {`${Size}`}</p>
                            <p>Back Support: {`${product['Back Support']}`}</p>
                            <p>Tilt: {`${Tilt}`}</p>
                            <p>Arms: {`${Arms}`}</p>
                            <p>Armada: {`${Armpad}`}</p>
                            <p>Caster: {`${Caster}`}</p>


                            <Link to={false}>Edit Item</Link>
                            <Link to={false} onClick={()=>setOpen(true)}>Remove Item</Link>
                            {/*confirm to remove item*/}
                            {open && <Prompt
                                message={REMOVE_MESSAGE}
                                cancelHandler={removeCancelHandler}
                                confirmHandler={removeConfirmHandler}/>}
                        </div>
                    </div>
                </td>
                <td>{(stock < 1)
                    ? <p> Out of stock </p>
                    : <p> In stock</p>
                }</td>
                <td><p>${`${sumPrice}`}</p></td>
                <td><span>
                <NativeSelectDemo qty={quantity} product={product} qtyChangeHandler={qtyChangeHandler}/>
            </span></td>
                <td><p>${`${sumPrice * qty}`}</p></td>
            </tr>
        </Fragment>
    )
};

export default CartItem;
