import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing } from './pages/Landing'
import { TeacherForm } from './pages/TeacherForm';
import { TeacherList } from './pages/TeacherList'


export function RoutesWeb() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='/' element={<Landing/>} />
                <Route path='/study' element={<TeacherList/>} />
                <Route path='/give-classes' element={<TeacherForm/>} />
            </Routes>
        </Router>





    )
}

