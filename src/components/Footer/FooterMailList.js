import React from 'react';

import {FOOTER_MAILLIST} from "../../store/Const";
import {FOOTER_MAILLIST_BUTTON} from "../../store/Const";

import "./FooterMailList.scss"

const FooterMailList = () => {
    return (
        <div>
            <div className="mail-list">
                {FOOTER_MAILLIST.map(data=>
                <div key={data} className="mail-title">{data}</div>)}
                <div className="mail-item">
                    <input
                        id={"form-email"} className={"input-text"} type={"text"} size={"20"}
                        placeholder={"Enter your email"}/>
                    {FOOTER_MAILLIST_BUTTON.map(data=>
                    <button key={data}>{data}</button>)}
                </div>
            </div>
        </div>
    );
};

export default FooterMailList;