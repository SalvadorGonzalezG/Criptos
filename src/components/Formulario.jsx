import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas' // importamos el componente y automanticmante se pasa hacia mi hook
import { useEffect } from 'react' // Lo ocuparemos para mandar llamar una api.

const InputSubmit = styled.input`
    background-color: purple;
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

    &:hover{
        background-color: #b612b6;
        cursor: pointer;
    }

`

const Formulario = () => {
    

    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu moneda:', monedas)
    
    // (CONSUMIENDO LA API) mandamos llamar la api con useEffect y ademas de forma asincrona con async & await
    useEffect(()=>{
        const consultApi = async() => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"

            const req = await fetch(url)
            const res = await req.json()
            // en la api en .Data se encuentran las criptomonedas, siendo esto el dato que deseamos.
            console.log(res.Data)
        }
        consultApi();
    },[]) // que se consulte una unica vez.

  return (
    <form>

        <SelectMonedas />

        <InputSubmit 
            type="submit"
            value="Cotizar." 
        
        />
    </form>
  )
}

export default Formulario