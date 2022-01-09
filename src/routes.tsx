import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing } from './pages/Landing'
import { TeacherForm } from './pages/TeacherForm';
import { TeacherList } from './pages/TeacherList'


export function RoutesWeb() {
    return (
        <Router>
            <Routes>
                <Route path='/Proffy---Platafoma-de-Aulas' element={<Landing/>} />
                <Route path='/Proffy---Platafoma-de-Aulas/study' element={<TeacherList/>} />
                <Route path='/Proffy---Platafoma-de-Aulas/give-classes' element={<TeacherForm/>} />
            </Routes>
        </Router>





    )
}

