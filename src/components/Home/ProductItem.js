import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Grow} from "@mui/material";

import './ProductItem.scss'

const ProductItem = (props) => {
    const {id, name, price, media, colorPalette} = props.product
    const {productDisplay, index} = props
    const [imgHover, setImgHover] = useState(true)
    const [colorIndex, setColorIndex] = useState(null)

    const mouseEnterHandler = () => {setImgHover(false)}
    const mouseLeaveHandler = () => {setImgHover(true)}

    return (
        <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...{timeout: 500 * index}}>
            <div className={`${productDisplay ? 'product-item-container-3' : ''} product-item-container`} id='product-item-container'>
                <Link to={`/product/${id}`}>
                    <img
                        onMouseEnter={mouseEnterHandler}
                        onMouseLeave={mouseLeaveHandler}
                        className={imgHover ? 'img-hover' : 'img-not-hover'} src={media[0]} alt=""/>
                    <img
                        onMouseEnter={mouseEnterHandler}
                        onMouseLeave={mouseLeaveHandler}
                        className={imgHover ? 'img-hover-1' : 'img-not-hover-1'} src={media[1]} alt=""/>
                </Link>
                <div className='content'>
                    <div className='name'>{name}</div>
                    <div className='price'>CA$ {price}</div>
                    <div className='swatch-container'>
                        <ul className='swatch-list'>
                            {colorPalette.map((color, index) =>
                                <li
                                    key={index}
                                    onClick={() => setColorIndex(index)}
                                    className={`swatch ${index === colorIndex ? 'swatch-active' : ''}`}>
                                    <div className='color-palette' style={{backgroundColor: color}}></div>
                                </li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </Grow>

    );
};

export default ProductItem;
