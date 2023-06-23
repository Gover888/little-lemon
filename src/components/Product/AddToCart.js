import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {updateCartList} from "../../store/actions/cartAction";

import "./AddToCart.scss"

let timer
const AddToCart = ({product, sumPrice}) => {
    const dispatch = useDispatch()
    const tempProductInfo = useSelector(state => state.tempSelectedReducer)
    const [quantity, setQuantity] = useState(1)
    const [isActive, setIsActive] = useState(false)

    const quantityChangeHandler = (event) => setQuantity(event.target.value)

    const addToCartHandler = () => {
        //check if value of null exists in temp selected object
        if (quantity > 0 && [tempProductInfo].every(x => !Object.values(x).includes(null))) {
            clearTimeout(timer)
            setIsActive(true)
            dispatch(updateCartList(tempProductInfo, quantity))
        }
        timer = setTimeout(()=> setIsActive(false), 1000)
    }

    return (
        <div className={`add-container ${isActive ? 'add-active' : ''}`}>
            <h2 className='add-product-name'>{product.name}</h2>
            {product && <div className='add-product-image' style={{backgroundImage: `url(${product.media[0]})`}}/>}
            <div className='add-content-container'>
                <div className='add-icon'><ShoppingCartIcon/></div>
                <p>In Stock</p>
                <p className='add-price'>CS $ {sumPrice}</p>
                <input type="number" min={1} value={quantity} onChange={quantityChangeHandler}/>
                <button onClick={addToCartHandler}>Add To Cart</button>
            </div>
        </div>
    );
};
export default AddToCart;
