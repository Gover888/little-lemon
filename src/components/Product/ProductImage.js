import React, {useState} from 'react';

import ProductThumb from "./ProductThumb";

import "./ProductImage.scss"

const ProductImage = ({product, setIsModal}) => {
    const [productUrl, setProductUrl] = useState('')
    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
            <div className='product-image-container'>
                <div className='product-gallery-container'>
                    {product.media.slice(0, 5).map((media, index) =>
                        <ProductThumb
                            key={media}
                            setProductUrl={setProductUrl}
                            index={index}
                            selectedIndex={selectedIndex}
                            setSelectedIndex={setSelectedIndex}
                            mediaUrl={media}/>)}

                    {/*onclick to open modal*/}
                    <div onClick={() => {
                        setIsModal(true)
                    }} className='product-thumb product-more'>+2 MORE
                    </div>
                </div>
                <div className='product-image'>
                    <img src={productUrl === '' ? product.media[0] : productUrl} alt=""/></div>
            </div>
    );
};

export default ProductImage;
