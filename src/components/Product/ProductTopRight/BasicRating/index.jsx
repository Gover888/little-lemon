import React, {useState} from 'react';
import Rating from '@mui/material/Rating';

const BasicRating = () => {
    const [value, setValue] = useState(4);
    return (
        <div className='basicRating'>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </div>
    );
}

export default BasicRating