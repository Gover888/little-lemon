import React from 'react';
import {useSelector} from "react-redux";
import ProductItem from "./ProductItem";

import './ProductList.scss'

const ProductList = (props) => {
    const {productDisplay} = props
    const products = useSelector(state => state?.productReducer?.renderedProducts)

    return (
        <div className='product-list-container'>
            {products.length === 0
                ? <h1>No Product Founded..</h1>
                : products.map((product, index) => <ProductItem
                    key={product.id}
                    index={index}
                    productDisplay={productDisplay}
                    product={product}/>
                    )}
        </div>
    );
};

export default ProductList;
