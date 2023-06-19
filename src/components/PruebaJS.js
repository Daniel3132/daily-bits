import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { questionJS } from '../data/Preguntas.js'
import { final } from '../helpers/Finalizar.js'


const PruebaJS = () => {

    const navigate = useNavigate()

    const [Changer, setChanger] = useState(0)
    const [Pregunta, setPregunta] = useState({ options: [] })
    const [Respuesta, setRespuesta] = useState('')
    const [Good, setGood] = useState(0)
    const [Wrong, setWrong] = useState(0)

    useEffect(() => {
        setPregunta(questionJS[Changer])
    }, [Changer])

    const handleSubmit = e => {
        e.preventDefault()
        checkAnswer()
        if (Changer + 1 < questionJS.length) {
            setChanger(Changer + 1)
        }
        setRespuesta('')
        document.getElementById('myform').reset();
    }

    const checkAnswer = () => {
        if (Respuesta === Pregunta?.correct) {
            setGood(Good + 1)
            Swal.fire({
                position: 'bottom',
                icon: 'success',
                title: 'Buen trabajo',
                showConfirmButton: false,
                timer: 1000
            })
        } else {
            setWrong(Wrong + 1)
            Swal.fire({
                position: 'bottom',
                icon: 'error',
                title: 'Sigue intentando',
                showConfirmButton: false,
                timer: 1000
            })
        }
    }

    const renderOptions = (options) => {
        return options.map((option, index) =>
            <div className="opcionesDiv" key={index}>
                <label>{option}</label>
                <input
                    type="radio"
                    name={`respuesta`}
                    onClick={() => setRespuesta(option)}
                />
            </div>
        )
    }

    return (
        <>
            <div>
                <form id='myform' onSubmit={handleSubmit}>
                    {Good + Wrong === questionJS.length
                        ? <button className='btnTerminar' onClick={() => { final(Good, Wrong, navigate) }} type='button'>Terminar</button>
                        : <section>
                            <div id='preguntas'>
                                <div className="tituloPregunta">
                                    <img src={Pregunta?.img} alt='' />
                                    <h2>{Pregunta?.question}</h2>
                                </div>

                                {renderOptions(Pregunta.options)}
                            </div>
                            <button variant="primary" type="submit">Continuar</button>
                            <h2>{Changer + 1}/{questionJS.length}</h2>
                        </section>}
                </form>
            </div>
        </>
    )
}

export default PruebaJS