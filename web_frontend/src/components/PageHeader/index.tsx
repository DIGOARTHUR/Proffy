import React from 'react'
import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import './sytle.css'
interface PageHeaderProps{
    title:string;
    children?: React.ReactNode;
    description?:string
}

export function PageHeader (props:PageHeaderProps){
    return(
        <header className="page-header">
        <div className="top-bar-container">
            <Link to='/Proffy'>
                <img src={backIcon} alt='Volta'></img>
            </Link>
            <img src={logoImg} alt='Proffy'></img>
        </div>

        <div className="header-content">
            <strong>{props.title}</strong>
            {props.description && <p>{props.description}</p>}
            {props.children}
        </div>
    </header>
    )
}