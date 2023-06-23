import React, {useState} from 'react';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Checkbox from "../Checkbox"
import {SEED_PRICE_DATA, SEED_MATERIAL_DATA} from "../../../../store/Const";

import './index.scss'

const Filter = ({data, filterBy}) => {
    data = filterBy === 'Price' ? SEED_PRICE_DATA : SEED_MATERIAL_DATA

    const [ifShow, setIfShow] = useState(false)

    return (
        <div className='filter' onMouseLeave={() => setIfShow(false)}>
            <div className='descFilter' onClickCapture={() => setIfShow(true)}>
                {filterBy}
                <ArrowDropDownIcon className='arrowDropDownIcon'/>
            </div>
            {<Checkbox arr={data} ifShow={ifShow} setIfShow={setIfShow}/>}
        </div>
    );
}

export default Filter
