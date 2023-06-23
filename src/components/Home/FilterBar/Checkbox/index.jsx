import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {FormGroup, FormControlLabel, Checkbox, Button} from "@mui/material"
import {priceFilterByRange} from "../../../../store/actions/productAction";
import {toggleId} from "../../../../store/functions/filter";

import './index.scss'

const CheckBox = ({arr, ifShow, setIfShow}) => {
    const dispatch = useDispatch()
    const checkedIdArr = useSelector(state => state.productReducer?.checkboxArr)

    const submit = () => {setIfShow(false)}

    const checkboxChangeHandler = (id) => {
        const newArr = toggleId(checkedIdArr, id)
        dispatch(priceFilterByRange(newArr))
    }

    const idArrChecked = (id) => {
        return checkedIdArr && !!checkedIdArr.find(c => c === id)
    }
    return (
        <div className={`checkbox ${ifShow ? '' : 'checkbox-bottom'}`}>
            <FormGroup>
                {arr.map(item =>
                    <FormControlLabel
                        checked={idArrChecked(item.id)}
                        onChange={()=>checkboxChangeHandler(item.id)}
                        control={<Checkbox value={item.value}/>}
                        label={item.label}
                        key={item.label}
                    />)}
                <Button variant="text" onClick={submit} style={{color: "black", fontWeight: "800"}}>Close</Button>
            </FormGroup>
        </div>
    );
}

export default CheckBox;