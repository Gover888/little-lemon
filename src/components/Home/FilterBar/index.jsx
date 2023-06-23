import React from 'react';
import {useSelector} from "react-redux";

import DensityToggle from "./DensityToggle"
import Filter from './Filter'
import Sort from './Sort'
import FilterMobile from "./FilterMobile";

import "./index.scss"

const FilterBar = ({setProductDisplay}) => {
    const products = useSelector(state => state?.productReducer?.products)
    const renderedProducts = useSelector(state => state?.productReducer?.renderedProducts)

    return (
        <div className='headProductList'>
            {/*mobile*/}
            <FilterMobile
                totalProduct={products.length}
                currProduct={renderedProducts.length}/>

            {/*web filter and sort bar*/}
            <div className='optionNavContainer'>
                <div className='options'>
                    <Filter filterBy='Price'/>
                    <Filter filterBy='Material'/>
                    <Sort/>
                </div>
                <div className='infoRightSide'>
                    <div>Showing {renderedProducts.length} products of {products.length}</div>
                    <DensityToggle setProductDisplay={setProductDisplay} />
                </div>
            </div>
        </div>
    );
}

export default FilterBar
