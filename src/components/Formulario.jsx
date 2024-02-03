import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas' // importamos el componente y automanticmante se pasa hacia mi hook

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
    

    const [ SelectMonedas ] = useSelectMonedas('Elige tu moneda:', monedas)
    
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