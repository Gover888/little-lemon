import React from 'react';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

import {FOOTER_FOLLOWLIST} from "../../store/Const";
import "./FooterFollowList.scss"

const FooterFollowList = () => {
    return (
        <div>
            <div className="follow-list">
                {FOOTER_FOLLOWLIST.map(data=>
                <div
                    key={data}
                    className="follow-title">{data}</div>)}
                <div className="follow-icons">
                    <div className="a"><FacebookIcon/></div>
                    <div className="a"><TwitterIcon/></div>
                    <div className="a"><GoogleIcon/></div>
                    <div className="a"><PhotoCameraIcon/></div>
                </div>
            </div>
        </div>
    );
};

export default FooterFollowList;