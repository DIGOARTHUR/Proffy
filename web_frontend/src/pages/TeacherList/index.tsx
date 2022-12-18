import React, { FormEvent, useState } from 'react'
import { Input } from '../../components/Input'
import { PageHeader } from '../../components/PageHeader'
import { Select } from '../../components/Select'
import { TeacherItem, Teacher  } from '../../components/TeacherItem'
import api from '../../services/api'
import './style.css'

export function TeacherList() {


    
    const [teachers, setTeachers] = useState([]);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });
      
        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Educação física', label: 'Educação física' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'História', label: 'História' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Química', label: 'Química' },
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        value={week_day}
                        onChange={(e) => { setWeekDay(e.target.value) }}
                        options={[
                            { value: 'Domingo', label: 'Domingo' },
                            { value: 'Segunda-feira', label: 'Segunda-feira' },
                            { value: 'Terça-feira', label: 'Terça-feira' },
                            { value: 'Quarta-feira', label: 'Quarta-feira' },
                            { value: 'Quinta-feira', label: 'Quinta-feira' },
                            { value: 'Sexta-feira', label: 'Sexta-feira' },
                            { value: 'Sábado', label: 'Sábado' },
                        ]}
                    />
                    <Input
                        type="time"
                        name="time"
                        label="Hora"
                        value={time}
                        onChange={(e) => { setTime(e.target.value) }}
                    />

                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher:Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />;
                })}
            </main>
        </div>
    )
}
