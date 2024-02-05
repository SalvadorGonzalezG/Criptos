import { useState, useEffect } from 'react'
import styled from '@emotion/styled' // permite definir un stiled component
import ImagenCripto from './img/crypto.png'
import Formulario from './components/Formulario'
import Result from './components/Result'
import Spiner from './components/Spiner'
import { SiStyledcomponents } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { PiWebhooksLogoFill } from "react-icons/pi";
import { ImSpinner6 } from "react-icons/im";

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
  width: 95%;
  margin: 110px auto 0 auto;
  display: block;
  `

const Heading = styled.h1`
  font-family: 'EB Garamond', sans-serif;
  color: #de46de;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #54c7fc;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {

  //definimos el estado extraemos monedas y setmonedas este va a ser un objeto y este sera llenado con los datos del formulario.
  const [monedas, setMonedas] = useState({})

  const [resultado, setResultado] = useState({})

  // estado para un spiner al momento de cargar las imagenes
  const [ loading, setLoading ] = useState(false)


  useEffect(()=>{
    // para que se ejecute cuando tenga algo lo condicionamos con un if a dicho objeto
    if(Object.keys(monedas).length > 0){
    // funcion que cotizara cripto realizara el llamado a la API
      const cotizarCripto =  async () => {
        // cuando comienze a ejecutarse nuestra funcion 
        setLoading(true)
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
          // una vez que finalice todo el spiner desaparece
          setLoading(false)

        }
        cotizarCripto()
    }
  },[monedas]) // arreglo de dependencias estara escuchando por los cambios en monedas
  return (
    <>
    
    <Contenedor>
      <Imagen src={ImagenCripto} alt='Imagen Criptomonedas'/>
      <div>
        <Heading>Cotiza la criptomoneda de tu preferencia.</Heading>
        <Formulario
          setMonedas={setMonedas}
        />
        {loading && <Spiner/>}
        { resultado.PRICE && <Result resultado={resultado}/> }
      </div>
    </Contenedor>
    <div className='page'>
    <div className='below'>
      <h1 className='icons'>
        <FaReact/> 
        < PiWebhooksLogoFill/> 
        <SiStyledcomponents/> 
        <TbApi/> 
        <ImSpinner6/> 
        <a href='https://github.com/SalvadorGonzalezG/Criptos' target='blank'> <button className='boton' >GitHub</button></a>
      </h1>
      
    </div>
  </div>
  </>
  )
}

export default App
