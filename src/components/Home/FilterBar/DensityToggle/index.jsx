import React, {useState} from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';

import './index.scss'

const DensityToggle = (props) => {
    const {setProductDisplay} = props
    const [view, setView] = useState('quilt');

    const handleChange = (event, nextView) => {
        setView(nextView);
    };

    return (
        <ToggleButtonGroup
            value={view}
            exclusive
            onChange={handleChange}>
            <ToggleButton
                onClick={()=>{setProductDisplay(true)}}
                value="module" aria-label="module" className='densityToggleOption'>
                <ViewModuleIcon/>
            </ToggleButton>
            <ToggleButton
                onClick={() => {setProductDisplay(false)}}
                value="quilt" aria-label="quilt" className='densityToggleOption'>
                <ViewComfyIcon/>
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

export default DensityToggle
