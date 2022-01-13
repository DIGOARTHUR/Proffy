import React from 'react'
import { Input } from '../../components/Input'
import { PageHeader } from '../../components/PageHeader'
import { TeacherItem } from '../../components/TeacherItem'
import './style.css'

export function TeacherList() {
    return (
        <div id="page-teacher-list">
            <PageHeader title=" Estes são os proffys disponíveis.">
                <form action="" id="search-teachers">

                    <Input name="subject" label="Matéria"/>
                    <Input name="week_day" label="Dia da Semana"/>
                    <Input type="time" name="time" label="Hora"/>

                </form>
            </PageHeader>

            <main>
              <TeacherItem/>
            </main>
        </div>
    )
}
