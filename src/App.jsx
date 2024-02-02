import { useState } from 'react'
import styled from '@emotion/styled' // permite definir un stiled component
import ImagenCripto from './img/cryptocurrency.png'
import Formulario from './components/Formulario'

const Contenedor = styled.div `
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
  `
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
  `

const Heading = styled.h1`
  font-family: 'EB Garamond', sans-serif;
  color: #FF00FF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #b18aab;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {

  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt='Imagen Criptomonedas'/>
      <div>
        <Heading>Cotiza la criptomoneda de tu preferencia.</Heading>
        <Formulario/>
      </div>
      
    </Contenedor>
    
  )
}

export default App
