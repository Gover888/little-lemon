import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {postSignInRequest} from "../../store/actions/authAction";
import useInput from "../../hooks/useInput";

import '../../pages/Account.scss'

const SignIn = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.authReducer?.isLoggedIn)

    //initial form data
    const {
        value: emailInput,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: emailReset
    } = useInput(value => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value))

    const {
        value: passwordInput,
        isValid: passwordIsValid,
        hasError: passwordHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: passwordReset
    } = useInput(value => value.trim().length > 6)

    let formIsValid = false

    if (emailIsValid && passwordIsValid) {
        formIsValid = true
    }

    const submitHandler = (event) => {
        event.preventDefault()

        if (formIsValid) {
            //post sign in request
            dispatch(postSignInRequest(emailInput, passwordInput))
            //navigate to cart page
            isLoggedIn && navigate('/cart', {replace: true})
        }

        emailReset()
        passwordReset()
    }

    return (
        <form onSubmit={submitHandler} noValidate autoComplete='off'>
            <div className={`control ${emailHasError ? 'invalid' : ''}`}>
                <label htmlFor='loginEmail'>Email*</label>
                <input
                    type='email' name='email' required
                    onChange={emailChangeHandler} onBlur={emailBlurHandler} value={emailInput}/>
                {emailHasError && <p>Please enter a validate email address!</p>}
            </div>
            <div className={`control ${passwordHasError ? 'invalid' : ''}`}>
                <label htmlFor='loginPassword'>Password*</label>
                <input
                    type='password' name='password' required
                    onChange={passwordChangeHandler} onBlur={passwordBlurHandler} value={passwordInput}/>
                {passwordHasError && <p>Please enter a validate password!</p>}
            </div>
            <div className='action'>
                <button disabled={!formIsValid}>SIGN IN</button>
            </div>
        </form>
    );
};

export default SignIn;
