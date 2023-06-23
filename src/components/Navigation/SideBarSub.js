import React, {useState} from 'react';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

import "./SideBar.scss"

const SideBarSub = ({cate}) => {
    const [isSubMenu, setIsSubMenu] = useState(false)

    const subMenuHandler = () => {
        cate.subCategories.length > 0 && setIsSubMenu(true)
    }

    return (
        <>
            <li className='cate-menu' onClick={subMenuHandler}>{cate.cateName}
                {cate.subCategories.length > 0 && <ArrowForwardIosRoundedIcon onClick={subMenuHandler}/>}</li>
            {isSubMenu && <div className="side-bar">
                <ul className="sub-menu-items">
                    <li className='sub-menu-title' onClick={() => setIsSubMenu(false)}><ArrowBackIosNewRoundedIcon
                        onClick={() => setIsSubMenu(false)}/> {cate.cateName}</li>
                    {cate.subCategories && cate.subCategories.map((subCate, index) =>
                        <li key={index}>{subCate}</li>)}
                </ul>
            </div>}
        </>
    );
};

export default SideBarSub;