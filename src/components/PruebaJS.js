import React, { useEffect, useState } from 'react'
import { questionJS } from '../data/Preguntas.js'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { InputRadio, OpcionesDiv, TituloPreguntaDiv } from '../styles/StyledComponents.js'
import { final } from '../helpers/Finalizar.js'


const PruebaJS = () => {

    const navigate = useNavigate() //para poner cambiar de ruta desde el codigo

    const [Changer, setChanger] = useState(0)
    const [Pregunta, setPregunta] = useState({})
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
        if (Respuesta === Pregunta.correct) {
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

    return (
        <>
            <div>
                <form id='myform' onSubmit={handleSubmit}>
                    {
                        Good + Wrong === questionJS.length
                            ? <button className='btnTerminar' onClick={() => { final(Good, Wrong, navigate) }} type='button'>Terminar</button>
                            : <>
                                <div id='preguntas'>
                                    <TituloPreguntaDiv>
                                        <img width={'20%'} src={Pregunta.d} alt='' />
                                        <h2>{Pregunta.question}</h2>
                                    </TituloPreguntaDiv>

                                    <OpcionesDiv>{/* capturar la seleccion con handleInputChange */}
                                        <InputRadio
                                            type="radio"
                                            name={`respuesta`}
                                            onClick={() => setRespuesta(Pregunta.a)}
                                        />
                                        <label>{Pregunta.a}</label>
                                    </OpcionesDiv>

                                    <OpcionesDiv>
                                        <InputRadio
                                            type="radio"
                                            name={`respuesta`}
                                            onClick={() => setRespuesta(Pregunta.b)}
                                        />
                                        <label>{Pregunta.b}</label>
                                    </OpcionesDiv>
                                    <OpcionesDiv>
                                        <InputRadio
                                            type="radio"
                                            name={`respuesta`}
                                            onClick={() => setRespuesta(Pregunta.c)}
                                        />
                                        <label>{Pregunta.c}</label>
                                    </OpcionesDiv>
                                </div>
                                <button variant="primary" type="submit">Continuar</button>
                                <h2>{Changer + 1}/{questionJS.length}</h2>
                            </>}
                </form>
            </div>
        </>
    )
}

export default PruebaJS