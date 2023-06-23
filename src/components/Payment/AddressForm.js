import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {useAutoComplete} from "../../hooks/useAutoComplete";
import {SAVE_ADDRESS} from "../../store/Const";

import "./AddressForm.scss"
import {switchTaxRate} from "../../store/actions/orderAction";

const formatString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

const AddressForm = ({setIsAddress}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state?.authReducer?.userInfo)

    // form input
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [searchValue, setSearchValue] = useState("")
    const [city, setCity] = useState('')
    const [province, setProvince] = useState('')
    const [country, setCountry] = useState('')

    // auto complete window control
    const [autoFill, setAutoFill] = useState(true)
    const predictions = useAutoComplete(searchValue)

    let formIsValid = false

    formIsValid = firstName.trim().length > 2 && lastName.trim().length > 0 && searchValue.trim().length > 6
        && city.trim().length > 3 && province.trim().length === 2 && country.trim().length > 3

    const handlePredictionSelection = (event, prediction) => {
        event.preventDefault()
        // console.log(prediction)
        setSearchValue(`${prediction.terms[0].value} ${prediction.terms[1].value}`)
        setCity(prediction.terms[2].value)
        setProvince(prediction.terms[3].value)
        setCountry(prediction.terms[4].value)
    }

    const confirmOrder = () => {
        // console.log('confirm order')
        // user input mailing address info
        const formattedFirstName = formatString(firstName)
        const formattedLastName = formatString(lastName)
        const taxRate = switchTaxRate(province)
        // console.log(taxRate)
        const addressInfo = {
            id: user.id,
            token: user.token,
            firstName: formattedFirstName,
            lastName: formattedLastName,
            address: searchValue,
            city,
            province,
            country,
            taxRate
        }

        //send carts with user address info to backend
        dispatch({
            type: SAVE_ADDRESS,
            payload: addressInfo
        })

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })

        // navigate to paypal
        navigate('/payment')
    }

    return (
        <div className='forms'>
            <h3>Mailing Address</h3>
            <form onSubmit={handlePredictionSelection} noValidate autoComplete='off'>
                <div className='control name-input'>
                    <label htmlFor='firstName'>First Name *</label>
                    <input
                        type='firstName' name='firstName' required
                        onChange={e => setFirstName(e.target.value)} value={firstName}/>
                </div>
                <div className='control name-input'>
                    <label htmlFor='lastName'>Last Name *</label>
                    <input
                        type='lastName' name='lastName' required
                        onChange={e => setLastName(e.target.value)} value={lastName}/>
                </div>
                <div className='control'>
                    <label htmlFor='street'>Street Address *</label>
                    <input
                        type='street' name='street' required
                        onChange={e => {
                            setSearchValue(e.target.value)
                            setAutoFill(true)
                        }} value={searchValue}/>
                </div>
                {autoFill && <ul className='form-autofill'>
                    {predictions?.map(prediction => (
                        <li key={prediction?.place_id}>
                            <button
                                onClick={e => {
                                    handlePredictionSelection(e, prediction)
                                    setAutoFill(false)
                                }}
                                onKeyDown={e => {
                                    handlePredictionSelection(e, prediction)
                                    setAutoFill(false)
                                }}
                            >
                                {`📍 ${prediction?.description}` || "Not found"}
                            </button>
                        </li>
                    ))}
                </ul>}
                <div className='control short-input'>
                    <label htmlFor='city'>City *</label>
                    <input
                        type='city' name='city' required
                        onChange={e => setCity(e.target.value)} value={city}/>
                </div>
                <div className='control short-input'>
                    <label htmlFor='province'>Province *</label>
                    <input
                        type='province' name='province' required
                        onChange={e => setProvince(e.target.value)} value={province}/>
                </div>
                <div className='control short-input'>
                    <label htmlFor='country'>Country *</label>
                    <input
                        type='country' name='country' required
                        onChange={e => setCountry(e.target.value)} value={country}/>
                </div>
                <div className='action'>
                    <button disabled={!formIsValid} type="submit" onClick={confirmOrder}>Confirm</button>
                    <button onClick={() => {setIsAddress(false)}}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default AddressForm;
