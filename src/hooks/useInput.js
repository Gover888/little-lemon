import {useState} from "react";

const useInput = (validateFunction) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    // validate entered value, expecting boolean
    const valueIsValid = validateFunction(enteredValue)
    // if entered value is not valid and user has touched input area => has error = true
    const hasError = !valueIsValid && isTouched

    //onChange handler => get user input value => set entered value
    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value)
    }

    //if user touched input, set isTouched to true
    const inputBlurHandler = () => {
        setIsTouched(true)
    }

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        setEnteredValue,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}

export default useInput