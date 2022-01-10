import React from 'react'
import { PageHeader } from '../../components/PageHeader'
import { TeacherItem } from '../../components/TeacherItem'
import './style.css'

export function TeacherList() {
    return (
        <div id="page-teacher-list">
            <PageHeader title=" Estes são os proffys disponíveis.">
                <form action="" id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="subject">Dia de Semana</label>
                        <input type="text" id="week_day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="subject">Hora</label>
                        <input type="text" id="Time" />
                    </div>

                </form>
            </PageHeader>

            <main>
              <TeacherItem/>
            </main>
        </div>
    )
}
