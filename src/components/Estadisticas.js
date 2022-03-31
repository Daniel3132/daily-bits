import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import axios from 'axios'
import { urlHeroku } from '../helpers/Url'

const Estadisticas = () => {

    const [Datos, setDatos] = useState([])

    //funcion para traer la data de heroku
    const getData = () => {
        axios.get(urlHeroku)
            .then(response => {
                setDatos(response.data) //asignar datos al estado Datos
            })
            .catch(error => {
                console.log(error)
            })
    }

    //se realiza cuando carga el componente
    useEffect(() => {
        getData()
    }, [])

    console.log(Datos)

    return (
        <>

            <div className='estadisticas'>

                <p>Estadísticas</p>

                <span>
                    <span>Los últimos </span>
                    <select>
                        <option> 7 dias</option>
                        <option> 14 dias</option>
                        <option> 30 dias</option>
                    </select>
                </span>
                {/* recorrer los datos con map (asignar key en el padre) */}
                {Datos.map(dato => (
                    <div key={dato.id} className='tablasCont'>

                        <div className='infoConts'>
                            <img src='https://res.cloudinary.com/dcyn2bjb9/image/upload/v1648427949/samples/daily-bits/Property_1_clock_c6qglf.svg' alt='' />
                            <p>Nombre</p>
                            <h4>{dato.nombre}</h4>
                        </div>
                        <div className='infoConts'>
                            <img src='https://res.cloudinary.com/dcyn2bjb9/image/upload/v1648427949/samples/daily-bits/Property_1_message-circle_ebdt3i.svg' alt='' />
                            <p>Respuestas</p>
                            <h4>{dato.totalAnsw}</h4>
                        </div>
                        <div className='infoConts'>
                            <img src='https://res.cloudinary.com/dcyn2bjb9/image/upload/v1648427949/samples/daily-bits/Property_1_message-circle_ebdt3i.svg' alt='' />
                            <p>Respuestas correctas</p>
                            <h4 className='correcta'>{dato.score}</h4>
                        </div>
                        <div className='infoConts'>
                            <img src='https://res.cloudinary.com/dcyn2bjb9/image/upload/v1648427949/samples/daily-bits/Property_1_message-circle_ebdt3i.svg' alt='' />
                            <p>Respuestas incorrectas</p>
                            <h4 className='incorrecta'>{dato.wrong}</h4>

                        </div>

                    </div>
                ))}
            </div>

            <Footer />

        </>
    )
}

export default Estadisticas