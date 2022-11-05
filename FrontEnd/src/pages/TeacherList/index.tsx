import React from 'react'
import { Input } from '../../components/Input'
import { PageHeader } from '../../components/PageHeader'
import { Select } from '../../components/Select'
import { TeacherItem } from '../../components/TeacherItem'
import './style.css'

export function TeacherList() {
    return (
        <div id="page-teacher-list">
            <PageHeader title=" Estes são os proffys disponíveis.">
                <form action="" id="search-teachers">
                <Select name="subject" label="Matéria " 
                        options={[
                            {value:'Artes',label:'Artes'},
                            {value:'Biologia',label:'Biologia'},
                            {value:'Matemática',label:'Matemática'},
                            {value:'Portugues',label:'Portugues'},
                            {value:'Física',label:'Física'},
                            {value:'História',label:'História'},
                            {value:'Química',label:'Química'},
                            {value:'Geografia',label:'Geografia'}
                        ]}
                        />
                        <Select name="week_day" label="Dia da Semana" 
                                options={[
                                    {value:'0',label:'Segunda-Feira'},
                                    {value:'1',label:'Terça-Feira'},
                                    {value:'2',label:'Quarta-Feira'},
                                    {value:'3',label:'Quinta-Feira'},
                                    {value:'4',label:'Sexta-Feira'},
                                    {value:'5',label:'Sábado'},
                                ]}
                        />
                    
                    <Input type="time" name="time" label="Hora" />


                </form>
            </PageHeader>

            <main>
                <TeacherItem />
            </main>
        </div>
    )
}
