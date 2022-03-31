import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { GoogleLogout } from 'react-google-login';
import { TitleLogOut } from '../styles/StyledComponents';

const Perfil = () => {

    const imgPerfil = sessionStorage.getItem('imagen')
    const nombrePerfil = sessionStorage.getItem('nombre')
    const emailPerfil = sessionStorage.getItem('email')

    const logOut = () => {
        sessionStorage.setItem('imagen', '')
        sessionStorage.setItem('nombre', '')
        sessionStorage.setItem('email', '')
    }

    return (

        <>
            <div className='perfil'>
                <p>Perfil</p>
                <div className='infoPerfil'>
                    <img src={imgPerfil} alt='' />
                    <h4>{nombrePerfil}</h4>
                    <p>{emailPerfil}</p>
                </div>
                <center>
                    <Link to="/login" className='btnLogout'>
                        <GoogleLogout
                            className='btnLogOut'
                            clientId="284784067134-blr6he4uh0aflsf7vt7udlucvsetaocu.apps.googleusercontent.com"
                            isSignedIn={false}
                            onLogoutSuccess={logOut}
                        ><TitleLogOut>Cerrar sesión</TitleLogOut>
                        </GoogleLogout>
                    </Link>
                </center>
            </div>
            <Footer />
        </>
    )
}

export default Perfil