import React from 'react';

import {Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./FooterList.scss"

export default function NestedList(props) {
    const {title, items} = props.footerData

    return (
        <Accordion className='nested-item'>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls={`${title}-content`}
                id={`${title}-header`}
            >
                <div className="list-title">{title}</div>
            </AccordionSummary>
            <AccordionDetails>
                <div className="list-items"> {items.map(item =>
                    <li key={Math.random()}
                        className="service-item">{item}</li>)}
                </div>
            </AccordionDetails>
        </Accordion>
    );
}