import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

import {logout} from "../store/actions/authAction";
import Order from "../components/Account/Order";
import CategoryNav from "../components/Util/CategoryNav";

import "./Profile.scss"

const profileNavData = ['Account', 'Profile']

const Profile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.authReducer.userInfo)
    const [switchContent, setSwitchContent] = useState(true)

    const logoutHandler = () => {
        dispatch(logout())
        navigate('/', {replace: true})
    }
    return (
        <div className='profile-container'>
            <CategoryNav categoryNavData={profileNavData}/>
            <div className='content'>
                <ul className='left'>
                    <li className={switchContent ? "selected" : ''} onClick={()=> setSwitchContent(true)}>Dashboard</li>
                    <li className={switchContent ? '' : "selected"} onClick={()=> setSwitchContent(false)}>Order History</li>
                    <li>Favorite List</li>
                    <li>Account Setting</li>
                    <li onClick={logoutHandler}>Sign Out</li>
                </ul>
                <div className='right'>
                    {
                        switchContent
                            ?
                            <>
                                <h1>Welcome back, {user.firstName}</h1>
                                <h2>Thank you for choosing Herman Miller</h2>
                                <Link className='dashboard-text' to='/'>Continue Shopping</Link>
                                <Link className='dashboard-text' to='/cart'>Back to Cart</Link>
                            </>
                            : <Order/>
                    }
                </div>
            </div>
        </div>
    );
};

export default Profile;
