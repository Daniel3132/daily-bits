import Swal from "sweetalert2"
import EnviarData from "./EnviarData"

const nombrePerfil = sessionStorage.getItem('nombre')

export const final = (Good, Wrong, navigate) => {
    console.log('final')
    Swal.fire({
        position: 'bottom',
        icon: 'success',
        title: 'Has Acabado ',
        showConfirmButton: false,
        timer: 3000
    })
    const stats = {
        nombre: nombrePerfil,
        score: Good,
        wrong: Wrong,
        totalAnsw: Good + Wrong
    }
    console.log(stats)
    navigate('/home')
    EnviarData({ stats }) //enviar datos a heroku
}