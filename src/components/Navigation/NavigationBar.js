import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CartOverview from "./CartOverview"
import {CATEGORIES, LOGO_IMG_SMALL_URL, LOGO_IMG_URL} from "../../store/Const";
import {searchProductList} from "../../store/actions/productAction";
import SideBar from "./SideBar";

import "./NavigationBar.scss"

const NavigationBar = ({setCheckedIdArr}) => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn)
    const user = useSelector(state => state.authReducer.userInfo)

    const [isInfoBarShow, setIsInfoBarShow] = useState(true)
    const [isCartShow, setIsCartShow] = useState(false)
    const [isSideBar, setIsSideBar] = useState(false)

    const searchInputHandler = (event) => {
        dispatch(searchProductList(event.target.value))
        setCheckedIdArr([])
    }

    return (
        <div className="header-container">
            {/*mobile side bar, click burger menu to open*/}
            {isSideBar && <SideBar setIsSideBar={setIsSideBar}/>}

            {/*cart overview, hover cart icon to open*/}
            {isCartShow && <CartOverview/>}

            {/*information bar, click icon to close*/}
            {isInfoBarShow && <div className="information-bar">
                <p>Enjoy Free Shopping on Office Chairs + 0% Financing Available</p>
                <button className="cancelBtn" onClick={() => setIsInfoBarShow(false)}><CloseIcon/></button>
            </div>}


            <div className="nav-bar">
                <div className='nav-btn-container'>
                    <Link to='/' className="nav-btn">Store</Link>
                    <Link to='/' className="nav-btn">Contact</Link>
                </div>
                <span>Customer Service 888 888 8888</span>
                <ul className="login-cart">
                    {isLoggedIn
                        ? <Link to='/profile'>Hello, {user.firstName}</Link>
                        : <Link to='/account' type='button'>Login</Link>}
                    <Link
                        to="/cart" type="button"
                        onMouseEnter={() => {
                            setIsCartShow(true)
                        }}
                        onMouseLeave={() => {
                            setIsCartShow(false)
                        }}
                    >Cart 🛒
                    </Link>
                </ul>
            </div>

            <div className="logo-cab">
                <div className="logo-burger-menu"><MenuRoundedIcon onClick={() => setIsSideBar(true)}/></div>
                <div className="logo"><Link to="/"><img src={LOGO_IMG_URL} alt=""/></Link></div>
                <div className="logo-small"><Link to="/"><img src={LOGO_IMG_SMALL_URL} alt=""/></Link></div>

                <div className="category">
                    {CATEGORIES.map(item =>
                        <NavLink
                            to={`${item.link}`} className={`cate-btn ${(navData) => navData.isActive ? 'active' : ''}`}
                            key={item.cateName}>{item.cateName}</NavLink>)}
                </div>

                <div className="search-input"><input placeholder="🔍Search" onChange={searchInputHandler}/></div>
                <div className="search-input2"><SearchIcon/></div>
            </div>
        </div>

    );
};

export default NavigationBar;