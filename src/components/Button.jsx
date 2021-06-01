import React from 'react'
import './Button.css';

const isOperetor =value=>{
    return !isNaN(value)  ||  value==="."   ||  value==="=";
}


const Button = (props) => {
    return (
        <div className={`button-wrapper ${isOperetor(props.children) ? null : "operator"}`}>
            {props.children}
        </div>
    )
}
    
export default Button;
