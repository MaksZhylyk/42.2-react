import React from 'react';
import './input.css';

function Input({name, type, placeholder, label}){
    return(
        <div className='main'>
            <label className='label'>{label}</label>
            <input calssName="input-container" name={name} type={type} placeholder={placeholder}  />
        </div>
    );
}

export default Input;
