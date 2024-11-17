import React from "react";
import './button.css';

function Button({name, type, onClick}){
    return(
        <div className='main-button'>
            <button className='button' type={type}>{name}</button>
        </div>
    );
}

export default Button;