import React from 'react'
import { PageHeader } from '../../components/PageHeader'

import './style.css'
export function TeacherForm() {
    return (
        <>
            <div id="page-teacher-form">
                <PageHeader title="Que incrivel que você quer dar aulas"
                    description="O primeiro passo é preencher esse formulário de inscrição"
                />
                <main>
                    <fieldset>
                        <legend>Meus Dados   </legend>
                            <div className="input-block">
                                <label htmlFor="name">Nome Completo</label>
                                <input type="text" id="name" />
                            </div>

                            <div className="input-block">
                                <label htmlFor="avatar">Avatar</label>
                                <input type="text" id="avatar" />
                            </div>

                            <div className="input-block">
                                <label htmlFor="whatsapp ">Whatsapp</label>
                                <input type="text" id="whatsapp" />
                            </div>
                      

                    </fieldset>
                </main>
            </div>
        </>
    )
}