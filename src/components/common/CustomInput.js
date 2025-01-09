import React from 'react';

function CustomInput({
    title, 
    value, 
    onChange = () => {}, 
}) {
    return (
        <div className='input-container'>
            <label>{title}</label>
            <input value={value} onChange={onChange}></input>
        </div>
    );
}

export default CustomInput;
