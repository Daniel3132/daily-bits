/* import React from 'react'
import { UserContext } from '../useContext.js/UserContext'
import AppRoutes from './containers'

const Main = ({pregunta}) => {

    const {score, wrong, totalAnsw} = pregunta

    console.log(score, wrong, totalAnsw)

    return (
        // podemos enviar cualquier cosa, si se requiere cambiar globalmente usar States
        <UserContext.Provider value={{ score }}>
            <AppRoutes />
        </UserContext.Provider>
    )//todo lo que contiene AppRoutes tiene permiso usando useContext
}

export default Main */