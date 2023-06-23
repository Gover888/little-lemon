import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import ProductImage from "../components/Product/ProductImage";
import AddToCart from "../components/Product/AddToCart";
import ProductModal from "../components/Product/ProductModal";
import ProductTopRight from "../components/Product/ProductTopRight";
import CategoryNav from "../components/Util/CategoryNav";
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import {KEY_FEATURES} from "../store/Const";

import './Product.scss'

const Product = () => {
    const products = useSelector(state => state?.productReducer?.renderedProducts)
    const params = useParams()
    const descriptionRef = useRef()

    let product = products.find(product => product.id === Number(params.id))

    const productNavData = ['Office', 'Office Chairs', `${product.name}`]

    const subtotal = product.profileCategories.reduce((prev, current) => prev + Number(current.profileItems[0].price), 0)

    const [sumPrice, setSumPrice] = useState(subtotal)
    const [isModal, setIsModal] = useState(false)

    // initialize price after mounting, one time
    useEffect(() => setSumPrice(prev => prev + parseFloat(product.price)), [])

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    }

    return (
        <div className='product-detail-container'>
            {/*product page modal, onclick to show two more image*/}
            <ProductModal product={product} isModal={isModal} setIsModal={setIsModal}/>

            <CategoryNav categoryNavData={productNavData}/>

            <div className='product-top-container'>
                <div className='product-content'>
                    <ProductImage product={product} setIsModal={setIsModal}/>
                    <div
                        className='dimension'
                        onClick={() => scrollToSection(descriptionRef)}>
                        <ErrorOutlineRoundedIcon fontSize='small'/> Dimension
                    </div>
                </div>
                <ProductTopRight
                    product={product}
                    sumPrice={sumPrice} setSumPrice={setSumPrice}/>
            </div>
            <hr/>

            {product && <div ref={descriptionRef} className='description-container'>
                <h1>Description</h1>
                <div className='description-content'>
                    <div className='description-product'>{product && product.description}</div>
                    <div className='description-features'>
                        <h3>Key Features</h3>
                        <ul>{KEY_FEATURES.map(feature => <li key={feature}>{feature}</li>)}</ul>
                    </div>
                </div>
            </div>}

            <AddToCart product={product} sumPrice={sumPrice}/>
        </div>
    );
};

export default Product;
