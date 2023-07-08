import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { GoogleLogout } from 'react-google-login';
import profileAvatar from "../assets/profile-avatar.png";

const Perfil = () => {

    const nombrePerfil = sessionStorage.getItem('nombre')
    const emailPerfil = sessionStorage.getItem('email') !== "" ? sessionStorage.getItem('email') : ""
    const imgPerfil = sessionStorage.getItem('imagen') !== "" ? sessionStorage.getItem('imagen') : profileAvatar 

    const logOut = () => {
        sessionStorage.setItem('imagen', '')
        sessionStorage.setItem('nombre', '')
        sessionStorage.setItem('email', '')
    }

    return (
        <>
            <div className='perfil'>
                <h2>Perfil</h2>
                <div className='infoPerfil'>
                    <img src={imgPerfil} width={50} style={{backgroundColor: "white"}} alt='' />
                    <h3>{nombrePerfil}</h3>
                    <p>{emailPerfil}</p>
                </div>
                <center>
                    <Link to="/login" className='btnLogout'>
                        <GoogleLogout
                            className='btnLogOut'
                            clientId="284784067134-blr6he4uh0aflsf7vt7udlucvsetaocu.apps.googleusercontent.com"
                            isSignedIn={false}
                            onLogoutSuccess={logOut}
                        >
                           <strong>Cerrar sesión</strong> 
                        </GoogleLogout>
                    </Link>
                </center>
            </div>
            <Footer />
        </>
    )
}

export default Perfil