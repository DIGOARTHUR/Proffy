import React, { useState } from 'react'
import { Input } from '../../components/Input'
import { PageHeader } from '../../components/PageHeader'
import { Textarea } from '../../components/Textarea'
import { Select } from '../../components/Select'
import warningIcon from '../../assets/images/icons/warning.svg'
import './style.css'

export function TeacherForm() {
    
    { /* Tipagem */ }
    interface interfaceScheduleItem{ 
        week_day: number;
        from:string;
        to:string;
    }

    const [scheduleItem, setScheduleItem]=useState<interfaceScheduleItem[]>([
        {week_day:1,from:'8:00 AM', to:'4:00 PM'}
        
    ])
    { /* Funçao para adicionar mais opções de horários*/ }
    function addNewScheduleItem(){
        setScheduleItem([
            ...scheduleItem,{
                week_day:1,from:' ', to:' '
            }
        ])
    }
    return (
        <>
            <div id="page-teacher-form">
                <PageHeader title="Que incrivel que você quer dar aulas"
                    description="O primeiro passo é preencher esse formulário de inscrição"
                />
                <main>
                    <fieldset>
                        <legend>Seus Dados  </legend>

                        <Input name="name" label="Nome Completo" />
                        <Input name="avatar" label="Avatar" />
                        <Input name="whatsapp" label="Whatsapp" />
                        <Textarea name='bio' label='Biografia' />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula  </legend>

                        <Select name="subject" label="Matéria "
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Portugues', label: 'Portugues' },
                                { value: 'Física', label: 'Física' },
                                { value: 'História', label: 'História' },
                                { value: 'Química', label: 'Química' },
                                { value: 'Geografia', label: 'Geografia' }
                            ]}
                        />
                        <Input name="cost" label="Custo da sua hora por aula" />


                    </fieldset>

                    <fieldset>
                        <legend>Horários disponíveis
                            <button type='button' onClick={addNewScheduleItem}>
                                + Novo Horário
                            </button>
                        </legend>

                         {
                             scheduleItem.map(scheduleItem=>{
                                 return(
                                    <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select name="week_day" label="Dia da Semana"
                                        options={[
                                            { value: '0', label: 'Segunda-Feira' },
                                            { value: '1', label: 'Terça-Feira' },
                                            { value: '2', label: 'Quarta-Feira' },
                                            { value: '3', label: 'Quinta-Feira' },
                                            { value: '4', label: 'Sexta-Feira' },
                                            { value: '5', label: 'Sábado' },
                                        ]}
                                    />
                                    <Input name="from" label="Das" type="time" />
                                    <Input name="to" label="Até" type="time" />
                                </div>
                                 )
                             })
                         }
                      

                    </fieldset>


                    <footer>
                        <p>
                            <img src={warningIcon} alt='Aviso importante'></img>
                            Importante <br />
                            Preencha os dados!
                        </p>
                        <button type="button"> Salvar Cadastro</button>


                    </footer>
                </main>
            </div>
        </>
    )
}