import React, { useEffect, useState } from 'react'
import { questionJS } from '../data/Preguntas.js'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { InputRadio, OpcionesDiv, TituloPreguntaDiv } from '../styles/StyledComponents.js'
import EnviarData from '../helpers/EnviarData.js'
//import Main from '../containers/Main.js'


const PruebaJS = () => {

    const navigate = useNavigate() //para poner cambiar de componente desde el codigo
    const nombrePerfil = sessionStorage.getItem('nombre')

    //state estadisticas
    const [stats, setStats] = useState({
        nombre: nombrePerfil,
        score: 0,
        wrong: 0,
        totalAnsw: 0
    })

    //state preguntas
    const [pregunta, setPregunta] = useState({
        numberQuestion: 0,
        question: {
            question: '',
            a: '',
            b: '',
            c: '',
            d: '',
            correct: '',
        },
        answerSelect: ''
    })

    //accion que se realiza cuando carga el componente
    useEffect(() => {
        const currentQuizData = questionJS[pregunta.numberQuestion]
        setPregunta({
            ...pregunta,
            question: {
                question: currentQuizData.question,
                a: currentQuizData.a,
                b: currentQuizData.b,
                c: currentQuizData.c,
                d: currentQuizData.d,
                correct: currentQuizData.correct
            }
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stats.score, stats.wrong]) //parametros que al cambiar van a realizar de nuevo el useEffect

    //capturar la respuesta seleccionada
    const handleOnchange = e => {
        console.log(e.target.value)
        setPregunta({
            ...pregunta,
            answerSelect: e.currentTarget.value
        })
    }

    //funcion para sumar preguntas contestadas, correctas e incorrectas
    const modificar = () => {
        setStats({
            ...stats,
            totalAnsw: stats.totalAnsw++
        })
        //respuesta correcta
        if (pregunta.answerSelect === pregunta.question.correct) {
            Swal.fire({
                position: 'bottom',
                icon: 'success',
                title: 'Buen trabajo',
                showConfirmButton: false,
                timer: 1000
            })
            setStats({
                ...stats,
                score: stats.score + 1
            })
        //respuesta incorrecta
        } else {
            Swal.fire({
                position: 'bottom',
                icon: 'error',
                title: 'Sigue intentando',
                showConfirmButton: false,
                timer: 1000
            })
            setStats({
                ...stats,
                wrong: stats.wrong + 1
            })
            
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        e.target.reset() //quitar la ultima opcion seleccionada
        modificar()
        //fin de la prueba
        if (pregunta.numberQuestion === questionJS.length) {
            Swal.fire({
                position: 'bottom',
                icon: 'success',
                title: 'Has Acabado ',
                showConfirmButton: false,
                timer: 3000
            })
            EnviarData({stats}) //enviar datos a heroku
            navigate('/home')
        }


    }


    return (
        <>
            <div>
                <form onSubmit={handleSubmit}> {/* siempre debe ir el el form */}
                    <div >
                        <TituloPreguntaDiv>
                            <img width={'20%'} src={pregunta.question.d} alt='' />
                            <h2>{pregunta.question.question}</h2>
                        </TituloPreguntaDiv>

                        <OpcionesDiv>{/* capturar la seleccion con handleOnchange */}
                            <InputRadio
                                type="radio"
                                name={`respuesta`}
                                id={pregunta.question.a}
                                onChange={handleOnchange} 
                                value={pregunta.question.a}
                            />
                            <label>{pregunta.question.a}</label>
                        </OpcionesDiv>

                        <OpcionesDiv>
                            <InputRadio
                                type="radio"
                                name={`respuesta`}
                                id={pregunta.question.b}
                                onChange={handleOnchange}
                                value={pregunta.question.b}
                            />
                            <label>{pregunta.question.b}</label>
                        </OpcionesDiv>
                        <OpcionesDiv>
                            <InputRadio
                                type="radio"
                                name={`respuesta`}
                                id={pregunta.question.c}
                                onChange={handleOnchange}
                                value={pregunta.question.c}
                            />
                            <label>{pregunta.question.c}</label>
                        </OpcionesDiv>
                    </div>

                    <button
                        onClick={() => {
                            //para cambiar de pregunta sin pasar el limite de preguntas
                            if (pregunta.numberQuestion < questionJS.length) {
                                setPregunta({
                                    ...pregunta,
                                    numberQuestion: pregunta.numberQuestion + 1
                                })
                            }
                        }
                        }

                        variant="primary" type="submit">Enviar</button>
                    <h2 style={{ textAling: "center" }}>{stats.score}/{questionJS.length}</h2>
                </form>
            </div>
        </>
    )
}

export default PruebaJS