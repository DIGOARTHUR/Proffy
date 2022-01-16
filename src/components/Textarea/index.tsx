import React,{TextareaHTMLAttributes} from 'react'

import './style.css'

interface propsTextarea extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    label:string,
    name:string,
}

export function Textarea(props: propsTextarea) {
    return (

        <div className="textarea-block">
            <label htmlFor={props.name}>{props.label}</label>
            <textarea    id={props.name} {...props}/>
        </div>
    )
}