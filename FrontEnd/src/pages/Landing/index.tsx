import React from 'react'
/*Importar CSS style*/
import './style.css'
/*Importando imagem logo*/
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import { Link } from 'react-router-dom'

export function Landing() {

    return (

        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">

                    <img src={logoImg} alt='Proffy'></img>
                    <h2>Sua plataforma de estudos Online</h2>
                </div>

                <img
                    src={landingImg}
                    alt="Plataformas de estudos" className="hero-image"
                />
                <div className="buttons-container">
                    <Link to="/Proffy/study" className="study">
                        <img src={studyIcon} alt='Estudar' />
                        Estudar
                    </Link>
                    <Link to="/Proffy/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt='Estudar' />
                        Dar Aulas
                    </Link>
                </div>
             <span className="total-connections">
                 Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt=''></img>
             </span>
            </div>

        </div>
    )
}