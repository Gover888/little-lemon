import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux"
import {Radio, RadioGroup, FormControlLabel, FormControl, FormLabel} from '@mui/material';
import {ADD_TO_TEMP_SELECTED} from "../../../../store/Const";

import './index.scss'

const ControlledRadioButtonsGroup = ({profileCategory, setSumPrice}) => {
    const [profileCategoryPrice, setProfileCategoryPrice] = useState(profileCategory.profileItems[0].price);
    const dispatch = useDispatch()
    const {name: profileCategoryName, profileItems} = profileCategory ? profileCategory : {}

    useEffect(() => {
        // initialize all profile categories after mounting, one time
        dispatch({
            'type': ADD_TO_TEMP_SELECTED,
            'payload': {
                [profileCategoryName]: profileItems[0].name,
                [`${profileCategoryName}-price`]: profileItems[0].price
            }
        })
    }, [])

    const radioGroupHandler = (e) => {
        let arr = e.target.value.split(',')
        // sum price = sum price - prev radio value + new radio value
        setSumPrice(prevSumPrice => prevSumPrice - parseFloat(profileCategoryPrice) + parseFloat(arr[0]))
        setProfileCategoryPrice(arr[0])

        // synchronize profile category info and profile price in Redux while certain profile category is chosen or modified
        dispatch({
            'type': ADD_TO_TEMP_SELECTED,
            'payload': {[profileCategoryName]: arr[1], [`${profileCategoryName}-price`]: arr[0]}
        })
    }

    const [checkedIndex, setCheckedIndex] = useState(0)
    const checkedChangeHandler = (event, index) => {
        // console.log(event.target)
        setCheckedIndex(index)
    }

    return (
        <div className='radio-group'>
            <FormControl>
                <FormLabel className='category-name'>{profileCategoryName}</FormLabel>
                <RadioGroup className='radio-content' onChange={radioGroupHandler}>
                    {profileItems.map((profileItem, index) =>
                        <FormControlLabel
                            className='radio'
                            key={profileItem?.id}
                            value={[profileItem?.price, profileItem?.name].toString()}
                            control={<Radio/>}
                            checked={index === checkedIndex}
                            onChange={(e) => checkedChangeHandler(e, index)}
                            label={`$${profileItem?.price} ${profileItem?.name}`}
                        />
                    )}
                </RadioGroup>
            </FormControl>
        </div>
    );
}

export default ControlledRadioButtonsGroup