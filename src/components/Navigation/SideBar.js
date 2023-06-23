import React from 'react';
import {Link} from "react-router-dom";

import {CATEGORIES} from "../../store/Const";
import SideBarSub from "./SideBarSub";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import './SideBar.scss'

const SideBar = ({setIsSideBar}) => {
    return (
        <div className='side-bar-container'>
            <div className="side-bar">
                <ul>
                    {CATEGORIES.map((cate, index) =>
                        <SideBarSub key={index} cate={cate}/>)}
                    <li className='cate-menu account'>
                        <Link to='/account' onClick={() => setIsSideBar(false)}>Account</Link>
                        <ArrowForwardIosRoundedIcon/>
                    </li>
                </ul>
            </div>
            <div className='modal' onClick={() => setIsSideBar(false)}></div>
        </div>
    );
};

export default SideBar;
