import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'


const Perfil = () => {

    const imgPerfil = sessionStorage.getItem('imagen')
    const nombrePerfil = sessionStorage.getItem('nombre')
    const emailPerfil = sessionStorage.getItem('email')


    return (

        <>
            <div className='perfil'>
                <p>Perfil</p>
                <div className='infoPerfil'>
                    <img src={imgPerfil} alt='' />
                    <h4>{nombrePerfil}</h4>
                    <p>{emailPerfil}</p>
                    <Link to="/login" onClick={() => {
                        sessionStorage.setItem('imagen', '')
                        sessionStorage.setItem('nombre', '')
                        sessionStorage.setItem('email', '')
                    }
                    }>Cerrar sesión</Link>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Perfil