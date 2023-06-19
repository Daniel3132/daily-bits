import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import '../styles/home.css'

const Categorias = () => {
    return (
        <>
            <section className='categoriasDiv'>
                <div>
                    <p>Practica tu conocimiento en la categoria que prefieras</p>
                </div>
                <div className='circunferencias'>
                    
                    <div className="filas">
                    <div className='imgPlusLabel'>
                        <Link to=''><img src='https://res.cloudinary.com/dcyn2bjb9/image/upload/v1648436160/samples/daily-bits/Ellipse_9_osnjmp.png' alt='' /></Link>
                        <label>HTML</label>
                    </div>
                    </div>
                                        

                    <div className='filas'>
                        <div className='imgPlusLabel'>
                            <Link to=''><img src='https://res.cloudinary.com/dcyn2bjb9/image/upload/v1648436160/samples/daily-bits/Ellipse_9_1_jjfum0.png' alt='' /></Link>
                            <label>CSS</label>
                        </div>
                        <div className='imgPlusLabel'>
                            <Link to='/pruebaJS'><img src='https://res.cloudinary.com/dcyn2bjb9/image/upload/v1648436160/samples/daily-bits/Ellipse_9_2_pf9ymo.png' alt='' /></Link>
                            <label>JS</label>
                        </div>
                    </div>

                    <div className='filas'>
                        <div className='imgPlusLabel'>
                            <Link to=''><img src='https://res.cloudinary.com/dcyn2bjb9/image/upload/v1648436160/samples/daily-bits/Ellipse_9_3_sctdyr.png' alt='' /></Link>
                            <label>FIGMA</label>
                        </div>
                        <div className='imgPlusLabel'>
                            <Link to=''><img src='https://res.cloudinary.com/dcyn2bjb9/image/upload/v1648436160/samples/daily-bits/Ellipse_9_4_y4m4ow.png' alt='' /></Link>
                            <label>UX</label>
                        </div>
                    </div>
                </div>
            </section >
            <Footer />
        </>
    )
}

export default Categorias