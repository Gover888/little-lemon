import React, {useState} from 'react';

import ProductList from "../components/Home/ProductList";
import FilterBar from "../components/Home/FilterBar";
import CategoryNav from "../components/Util/CategoryNav";

import './Home.scss'

const officeNavData = ['Home', 'Office', 'Office Chairs', "Table Saw"]
const officeChairTitle = 'Office Chair'

const Home = () => {
    const [productDisplay, setProductDisplay] = useState(false) //true : 3, false : 4
    return (
        <div className='home-container'>
            <CategoryNav categoryNavData={officeNavData}/>
            <h1>{officeChairTitle}</h1>
            <FilterBar setProductDisplay={setProductDisplay}/>
            <ProductList productDisplay={productDisplay}/>
        </div>
    );
};

export default Home;
