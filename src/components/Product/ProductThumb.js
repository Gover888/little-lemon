import React from 'react';
import "./ProductImage.scss"

const ProductThumb = (props) => {
    const {mediaUrl, index, setProductUrl, selectedIndex, setSelectedIndex} = props

    const thumbClickHandler = () => {
        setProductUrl(mediaUrl)
        setSelectedIndex(index)
    }
    return (
        <div
            onClick={thumbClickHandler}
            className={`product-thumb ${selectedIndex === index ? 'product-active' : ''}`}
            style={{backgroundImage: `url(${mediaUrl})`}}></div>
    );
};

export default ProductThumb;
