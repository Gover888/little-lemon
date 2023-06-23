import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import {SEED_SORT_BY_ARR} from "../../../../store/Const";
import {productOrderBy} from "../../../../store/actions/productAction";
import {FormControl, Select, MenuItem, InputLabel} from "@mui/material";

import './index.scss'

const Sort = () => {
    const dispatch = useDispatch()
    const [choi, setChoi] = useState('')

    const handleChange = (event) => {
        setChoi(event.target.value);
        //pass in target value (string)
        dispatch(productOrderBy(event.target.value))
    };

    return (
        <div className='sort'>
            Sort By:
            <FormControl sx={{m: 1, minWidth: 200}}>
                <InputLabel id="demo-simple-select-label">Featured Product</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={choi}
                    onChange={handleChange}
                    autoWidth
                    label="Age">
                    <MenuItem value=""><em>None</em></MenuItem>
                    {SEED_SORT_BY_ARR.map((item) => <MenuItem key={Math.random()} value={item.value}>{item.option}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    );
}

export default Sort;