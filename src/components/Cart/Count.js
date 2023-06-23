import React from 'react';
import {Box, FormControl, NativeSelect} from '@mui/material';

export default function NativeSelectDemo({qty, product, qtyChangeHandler}) {

    return (
        <Box sx={{ minWidth: 60 }}>
            <FormControl fullWidth >
                <NativeSelect
                    defaultValue={qty}
                    onChange={(e)=>qtyChangeHandler(e, product)}
                    inputProps={{id: 'uncontrolled-native',}}>
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                </NativeSelect>
            </FormControl>
        </Box>
    );
}
