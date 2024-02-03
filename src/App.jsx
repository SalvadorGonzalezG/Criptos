import { useState, useEffect } from 'react'
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

  //definimos el estado extraemos monedas y setmonedas este va a ser un objeto y este sera llenado con los datos del formulario.
  const [monedas, setMonedas] = useState({})

  const [resultado, setResultado] = useState({})


  useEffect(()=>{
    // para que se ejecute cuando tenga algo lo condicionamos con un if a dicho objeto
    if(Object.keys(monedas).length > 0){
    // funcion que cotizara cripto realizara el llamado a la API
      const cotizarCripto =  async () => {
        // objetDestructu
        const {moneda, criptomoneda} = monedas
          // Generamos la pagina de forma dinamica.
          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
          console.log(url)
          // extraemos los datos con fetch
          const req = await fetch(url)
          // los datos los convertimos a formato .json
          const res = await req.json()
          // sitaxis para acceder a objetos con [][] de forma dinamica
          setResultado(res.DISPLAY[criptomoneda][moneda])

        }
        cotizarCripto()
    }
  },[monedas]) // arreglo de dependencias estara escuchando por los cambios en monedas
  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt='Imagen Criptomonedas'/>
      <div>
        <Heading>Cotiza la criptomoneda de tu preferencia.</Heading>
        <Formulario
          setMonedas={setMonedas}
        />
          
      </div>
      
    </Contenedor>
    
  )
}

export default App
