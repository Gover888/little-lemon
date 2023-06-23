import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {SEED_MATERIAL_DATA, SEED_PRICE_DATA} from "../../../../store/Const";
import {toggleId} from "../../../../store/functions/filter";
import {priceFilterByRange} from "../../../../store/actions/productAction";

import "./index.scss"

const FilterMobile = ({totalProduct, currProduct}) => {
    const dispatch = useDispatch()
    const checkedIdArr = useSelector(state => state.productReducer?.checkboxArr)

    const checkboxChangeHandler = (id) => {
        const newArr = toggleId(checkedIdArr, id)
        dispatch(priceFilterByRange(newArr))
    }

    const idArrChecked = (id) => {
        return checkedIdArr && !!checkedIdArr.find(c => c === id)
    }

    return (
        <div className='filter-mobile-container'>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls={`filter-content`} id={`filter-header`}>
                    <div>Filter By</div>
                </AccordionSummary>
                <AccordionDetails>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls={`price-content`} id={`price-header`}>
                            <div>Price</div>
                        </AccordionSummary>
                        <AccordionDetails>
                            {SEED_PRICE_DATA.map(item =>
                                <FormControlLabel
                                    checked={idArrChecked(item.id)}
                                    onChange={() => checkboxChangeHandler(item.id)}
                                    control={<Checkbox value={item.value}/>}
                                    label={item.label}
                                    key={item.label}
                                />)}
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls={`material-content`} id={`material-header`}>
                            <div>Material</div>
                        </AccordionSummary>
                        <AccordionDetails>
                            {SEED_MATERIAL_DATA.map(item =>
                                <FormControlLabel
                                    control={<Checkbox value={item.value}/>}
                                    label={item.label}
                                    key={item.label}
                                />)}
                        </AccordionDetails>
                    </Accordion>
                </AccordionDetails>
            </Accordion>
            <div className='show-info'>
                <div>Showing {currProduct} products of {totalProduct}</div>
            </div>
        </div>
    );
};

export default FilterMobile;
