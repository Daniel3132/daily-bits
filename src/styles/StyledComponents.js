const { default: styled } = require("styled-components");

export const TituloPreguntaDiv = styled.div`
margin: 0 auto;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
text-align: left;
gap: 10%;
height: 15rem;
width: 90vw;
`

export const OpcionesDiv = styled.div`
margin: 0 auto;
display: flex;
flex-direction: row-reverse;
align-items: center;
justify-content: space-around;
text-align: center;
height: 3rem;
width: 90vw;
border: 3px solid white;
font-size: 1.5rem;
margin-bottom: 5%;
`

export const InputRadio = styled.input`
width: 8%;
`
export const btnEnviar = styled.input`
width: 8%;
`