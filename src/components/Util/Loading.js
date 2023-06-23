import React from 'react';
import "./Loading.scss"

const Loading = () => {
    return (
        <div className="loading">
            {/*<div className='modal'></div>*/}
            <div className="loader">
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
            <div className="text">
                <h1 className="word">LOADING...</h1>
            </div>
        </div>
    );
};

export default Loading;