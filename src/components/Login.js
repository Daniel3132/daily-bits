import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import GoogleLogin from 'react-google-login';
import GoogleIcon from '@mui/icons-material/Google';
import { useForm } from '../hooks/UseForm';

const Login = () => {
    const navigate = useNavigate();
    const [{ username }, handleInputChange] = useForm({ username: '' });

    const responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj.imageUrl);
        sessionStorage.setItem('imagen', response.profileObj.imageUrl);
        sessionStorage.setItem('nombre', response.profileObj.name);
        sessionStorage.setItem('email', response.profileObj.email);
        navigate('/home');
    };

    const setUsername = (e) => {
        e.preventDefault();
        sessionStorage.setItem('nombre', username);
        navigate('/home');
    };

    return (
        <>
            <div id="login">
                <img
                    id="imgLogin"
                    src="https://res.cloudinary.com/dcyn2bjb9/image/upload/v1648426707/samples/daily-bits/iconpurple_sgov9n.png"
                    alt=""
                />
                <h1> Iniciar sesión </h1>
                <GoogleLogin
                    clientId="284784067134-blr6he4uh0aflsf7vt7udlucvsetaocu.apps.googleusercontent.com"
                    render={(renderProps) => (
                        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                            <GoogleIcon /> Iniciar sesión con Google
                        </button>
                    )}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    isSignedIn={false}
                    cookiePolicy={'single_host_origin'}
                />
                <label> O </label>
                <label> Elige un nombre de usuario </label>
                <form onSubmit={setUsername}>
                    <div className='usernameForm'>
                        <input
                            type="text"
                            placeholder="Nombre de usuario"
                            name="username"
                            value={username}
                            onChange={handleInputChange}
                        />
                        <button className='confirmUsernameBtn' type="submit">Confirmar</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
