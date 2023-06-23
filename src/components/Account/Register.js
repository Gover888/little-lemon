import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import useInput from "../../hooks/useInput";
import {postRegisterRequest} from "../../store/actions/authAction";

import '../../pages/Account.scss'

const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    //initial form data
    const {
        value: firstNameInput,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: firstNameReset
    } = useInput(value => value.trim() !== '')

    const {
        value: lastNameInput,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: lastNameReset
    } = useInput(value => value.trim() !== '')

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

    const {
        value: confirmedPasswordInput,
        isValid: confirmedPasswordIsValid,
        hasError: confirmedPasswordHasError,
        valueChangeHandler: confirmedPasswordChangeHandler,
        inputBlurHandler: confirmedPasswordBlurHandler,
        reset: confirmedPasswordReset
    } = useInput(value => value === passwordInput)

    let formIsValid = false

    if (firstNameIsValid && lastNameIsValid && emailIsValid && passwordIsValid && confirmedPasswordIsValid) {
        formIsValid = true
    }

    const submitHandler = (event) => {
        event.preventDefault()

        if (formIsValid) {
            dispatch(postRegisterRequest(firstNameInput, lastNameInput, emailInput, passwordInput))
            navigate('/profile')
        }

        firstNameReset()
        lastNameReset()
        emailReset()
        passwordReset()
        confirmedPasswordReset()
    }
    return (
        <form onSubmit={submitHandler} noValidate autoComplete='off'>
            <div className={`control ${firstNameHasError ? 'invalid' : ''}`}>
                <label htmlFor='firstName'>First Name*</label>
                <input
                    type='firstName' name='firstName' required
                    onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} value={firstNameInput}/>
                {firstNameHasError && <p>Firstname must not be empty!</p>}
            </div>
            <div className={`control ${lastNameHasError ? 'invalid' : ''}`}>
                <label htmlFor='lastName'>Last Name*</label>
                <input
                    type='lastName' name='lastName' required
                    onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={lastNameInput}/>
                {lastNameHasError && <p>Lastname must not be empty!</p>}
            </div>
            <div className={`control ${emailHasError ? 'invalid' : ''}`}>
                <label htmlFor='registerEmail'>Email*</label>
                <input
                    type='email' name='email' required
                    onChange={emailChangeHandler} onBlur={emailBlurHandler} value={emailInput}/>
                {emailHasError && <p>Please enter a validate email address!</p>}
            </div>
            <div className={`control ${passwordHasError ? 'invalid' : ''}`}>
                <label htmlFor='password'>Password*</label>
                <input
                    type='password' name='password' required
                    onChange={passwordChangeHandler} onBlur={passwordBlurHandler} value={passwordInput}/>
                {passwordHasError && <p>Password must include six characters!</p>}
            </div>
            <div className={`control ${confirmedPasswordHasError ? 'invalid' : ''}`}>
                <label htmlFor='confirmedPassword'>Confirmed Password*</label>
                <input
                    type='password' name='confirmedPassword' required
                    onChange={confirmedPasswordChangeHandler} onBlur={confirmedPasswordBlurHandler}
                    value={confirmedPasswordInput}/>
                {confirmedPasswordHasError && <p>Confirmed password must be same as password!</p>}
            </div>
            <div className='action'>
                <button disabled={!formIsValid}>REGISTER</button>
            </div>
        </form>
    );
};

export default Register;
