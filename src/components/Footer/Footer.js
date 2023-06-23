import React from 'react';

import NestedList from "./FooterList";
import FooterMailList from "./FooterMailList";
import FooterFollowList from "./FooterFollowList";
import {CANADA_FLAG_URL, FOOTER_DATA} from "../../store/Const";

import "./Footer.scss"

const Footer = () => {

    return (
        <div className="main-footer">
            {/*mobile footer*/}
            <div className="container">
                <div className="nested-list">
                    {FOOTER_DATA.map(data =>
                        <NestedList key={data.title} footerData={data}/>)}
                </div>

                <div className="row">
                    <div className="column-wrapper">
                        <div className="service-list">
                            {FOOTER_DATA.map(data =>
                                <div key={data.title} className="item-list">
                                    <div className="item-titles">{data.title}</div>
                                    <ul>
                                        {data.items.map(item =>
                                            <li key={item} className="item-items">{item}</li>)}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className='footer-bottom'>
                            <FooterMailList/>
                            <FooterFollowList/>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="copyright-left">
                        <div className="country">
                            <div className="country-flag"><img src={CANADA_FLAG_URL} alt=""/></div>
                            <div className="country-name">Canada</div>
                        </div>
                    </div>
                    <div className="copyright-right">
                        &copy;{new Date().getFullYear()} Herman Miller, Inc.
                    </div>
                </div>

            </div>
            <div className="common-brand">© Herman Miller Group Company</div>
        </div>
    );
};

export default Footer;
