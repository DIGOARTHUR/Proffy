import React, { SelectHTMLAttributes } from 'react'

import './style.css'

interface propsSelect extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string,
    name: string,
    options: Array<{
        value: string,
        label: string
    }>,
}

export function Select(props: propsSelect) {
    return (

        <div className="select-block">
            <label htmlFor={props.name}>{props.label}</label>
            <select id={props.name} {...props}>
            <option defaultValue="" value="" disabled  hidden >Selecione uma opção</option> {/* disable = desabilitar para escolha defaultValue= seleção padrão  hidden = para nao estar disponivel na listagem  */} 
            {props.options.map(option=>{
                return <option key={option.value} value={option.value}>{option.label}</option>
            })}
            </select>
        </div>
    )
}