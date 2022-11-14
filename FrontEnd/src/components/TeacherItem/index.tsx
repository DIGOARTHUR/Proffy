import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api';
import './style.css'


export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher;
}


export function TeacherItem(props: TeacherItemProps) {

    function createNewConnection(){
        api.post('connections',{
            user_id:props.teacher.id
        })
    }
    
    return (
        <>
            <article className="teacher-item">
                <header>
                    <img src={props.teacher.avatar} alt="Mario Souto" />
                    <div>
                        <strong>{props.teacher.name}</strong>
                        <span>{props.teacher.subject}</span>
                    </div>
                </header>
                <p>
                    {props.teacher.bio}
                </p>

                <footer>
                    <p>
                        Preço/Hora
                        <strong>R$ {props.teacher.cost}</strong>
                    </p>
                    <a target="_blank" onClick={createNewConnection} href={`https://wa.me/${props.teacher.whatsapp}`}>
                        <img src={whatsappIcon} alt="Whatsapp" />
                        Entrar em contato
                    </a>
                </footer>
            </article>


        </>
    )
}