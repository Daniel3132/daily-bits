import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Login.css';
import GoogleLogin from 'react-google-login'
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {

    //para cambiar de ruta desde codigo
    const navigate = useNavigate()

    const responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj.imageUrl) //datos del usuario estan en profileObj
        //session storage es temporal
        sessionStorage.setItem('imagen',response.profileObj.imageUrl)
        sessionStorage.setItem('nombre',response.profileObj.name)
        sessionStorage.setItem('email',response.profileObj.email)
        navigate('/home')
    }

    return (
        <>
            <div id='login'>
                <img id='imgLogin' src='https://res.cloudinary.com/dcyn2bjb9/image/upload/v1648426707/samples/daily-bits/iconpurple_sgov9n.png' alt='' />
                <h1> Iniciar sesión </h1>
                <GoogleLogin //npm install react-google-login
                    //se genera el id desde google cloud platform y se asignan las url disponibles
                    clientId="284784067134-blr6he4uh0aflsf7vt7udlucvsetaocu.apps.googleusercontent.com" 
                    render={renderProps => ( //para poder crear el boton
                       <button onClick={renderProps.onClick } disabled={renderProps.disabled}><GoogleIcon/> Iniciar sesión con Google</button>
                    )}
                    buttonText="Login" //para el boton predeterminado de google pero aqui usamos custom button
                    onSuccess={responseGoogle} // funcion a ejecutar
                    onFailure={responseGoogle}
                    isSignedIn={false}
                    cookiePolicy={'single_host_origin'}
                />
                <label> O </label>
                <label> Correo Electronico </label>
                <input type='email' placeholder='Inserte su Correo Electronico' />
                <Link to="/Login" > ¿Se te olvido tu contraseña ? </Link>
            </div>
        </>
    )
}

export default Login