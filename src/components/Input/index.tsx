import React,{InputHTMLAttributes} from 'react'

import './style.css'

interface propsInput extends InputHTMLAttributes<HTMLInputElement>{
    label:string,
    name:string,
}

export function Input(props: propsInput) {
    return (

        <div className="input-block">
            <label htmlFor={props.name}>{props.label}</label>
            <input  type="text" id={props.name} {...props}/>
        </div>
    )
}