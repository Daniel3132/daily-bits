import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div>
                <Link to="/home" > <img src="https://res.cloudinary.com/dcyn2bjb9/image/upload/v1648427951/samples/daily-bits/property_1_home_z1juqh.svg" alt='' /> </Link>
                <label>Home</label>
            </div>

            <div>
                <Link to="/estadisticas" > <img src="https://res.cloudinary.com/dcyn2bjb9/image/upload/v1648427949/samples/daily-bits/property_1_activity_rluuto.svg" alt='' /> </Link>
                <label>Estadisticas</label>
            </div>

            <div>
                <Link to="/perfil" > <img src="https://res.cloudinary.com/dcyn2bjb9/image/upload/v1648427950/samples/daily-bits/property_1_user_ozjdep.svg" alt='' /> </Link>
                <label>Perfil</label>
            </div>
        </footer>
    )
}

export default Footer