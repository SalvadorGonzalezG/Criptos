import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas' // importamos el componente y automanticmante se pasa hacia mi hook
import { useState, useEffect } from 'react' // Lo ocuparemos para mandar llamar una api.
import Error from './Error'

const InputSubmit = styled.input`
    background-color: #9e029e;
    width: 100%;
    padding: 10px;
    color: #FFF;
    border: none;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 10px;
    transition: background-color .3s ease;
    margin-top: 30px;
    font-family:'EB Garamond', sans-serif;
    

    &:hover{
        background-color: #c135c1;
        cursor: pointer;
    }

`

const Formulario = ({setMonedas}) => {
    // estado donde setcriptos llenara el array al momento de actualizar el estado.
    const [ criptos, setCriptos ] = useState([])
    // estado inicializado en false seca colocado para los errores
    const [ error, setError ] = useState(false)

    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu moneda:', monedas)
    
    const [ criptomoneda, SelectCriptomoneda ] = useSelectMonedas('Elige tu criptomoneda', criptos)
    
    // (CONSUMIENDO LA API) mandamos llamar la api con useEffect y ademas de forma asincrona con async & await
    useEffect(()=>{
        const consultApi = async() => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"

            const req = await fetch(url)
            const res = await req.json()
            // en la api en .Data se encuentran las criptomonedas, siendo esto el dato que deseamos.
            //console.log(res.Data)
            // Obteniendo la info de la api medinate una constante llamada array info
            const arrayCripto = res.Data.map(cripto =>{ //.map crea un nuevo arreglo
                
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                // retornamos el objeto para que se retorne el objeto y array cripto se llene
                return objeto
            })
            // el estado sera modificado y este llenara el array.
            setCriptos(arrayCripto)
        }
        consultApi();
    },[]) // que se consulte una unica vez.
        //creamos la funcion para prevenir el refresh de la pagina al dar click a cotizar
    const handleSubmit = e => {
        e.preventDefault()
        console.log("Enviando FORMULARIO")
       
        //Si alguno de los 2 datos incluyen un sting vacio envia un error y deten el codigo
        if([moneda, criptomoneda].includes('')){
            // devolvemos el estado del error con true
            setError(true)

            return
        }
        // al pasar la validacion el error desaparece al actualizar el estado.
        setError(false)

        setMonedas({
            moneda,
            criptomoneda
        })

    }
  return (
    <>
    { error && <Error>Llena todos los campos.</Error> }

    <form
        onSubmit={handleSubmit}
    >

        <SelectMonedas />
        <SelectCriptomoneda />

        <InputSubmit 
            type="submit"
            value="Cotizar." 
        
        />
    </form>
    </>
  )
}

export default Formulario