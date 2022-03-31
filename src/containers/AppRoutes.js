import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Categorias from '../components/Categorias'
import Estadisticas from '../components/Estadisticas'
import Login from '../components/Login'
import Perfil from '../components/Perfil'
import PruebaJS from '../components/PruebaJS'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/home' element={<Categorias />} />
                <Route path='/pruebaJs' element={<PruebaJS />} />
                <Route path='/estadisticas' element={<Estadisticas />} />
                <Route path='/perfil' element={<Perfil />} />
                <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes