import React from 'react';
import './Prompt.scss'

const Prompt = ({message, cancelHandler, confirmHandler}) => {
    return (
        <div className='prompt-container'>
            <div className='modal'></div>
            <div className='content'>
                <div className='action'>Attention!</div>
                <div className='message'>{message}</div>
                <div className='button-container'>
                    {/*to receive on cancel function*/}
                    <button className='button-cancel' onClick={cancelHandler}>Cancel</button>
                    {/*to receive on confirm function*/}
                    <button onClick={confirmHandler}>Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default Prompt;
