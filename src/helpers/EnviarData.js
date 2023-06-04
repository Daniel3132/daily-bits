import axios from 'axios'
import { urlHeroku } from './Url'

const EnviarData = ({stats}) => {
    axios.post(urlHeroku, stats )
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    return (
        console.log('Enviado')
    )
}

export default EnviarData
