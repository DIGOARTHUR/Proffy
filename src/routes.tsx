import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing } from './pages/Landing'
import { TeacherForm } from './pages/TeacherForm';
import { TeacherList } from './pages/TeacherList'


export function RoutesWeb() {
    return (
        <Router>
            <Routes>
                <Route path='Proffy/' element={<Landing/>} />
                <Route path='/Proffy/study' element={<TeacherList/>} />
                <Route path='/Proffy/give-classes' element={<TeacherForm/>} />
            </Routes>
        </Router>





    )
}

