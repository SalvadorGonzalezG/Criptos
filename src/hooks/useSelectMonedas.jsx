import { useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #FFF;
    display: block;
    font-family:'EB Garamond', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`
const Select = styled.select`
    width: 100%;
    font-size: 15px;
    padding: 12px;
    border-radius: 10px;
    margin-bottom: 5px;
`

const useSelectMonedas = (label, opciones) => {
    // Declarando el estado he inicializarlo como un string Vacio.
    const [state, setState] = useState('')

    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={ e => setState(e.target.value)}
            >
                <option value="">SELECCIONE:</option>

                {opciones.map(opcion=>(
                    <option
                    key={opcion.id}
                    value={opcion.id}
                    >{opcion.nombre}</option>
                    
                ))}
            </Select>
        </>
    )
    return [state, SelectMonedas ]
}

export default useSelectMonedas