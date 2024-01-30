import React from 'react'
import styled from '@emotion/styled'

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

    &:hover{
        background-color: #b612b6;
        cursor: pointer;
    }

`

const Formulario = () => {
  return (
    <form>
        <InputSubmit 
            type="submit"
            value="Cotizar." 
        
        />
    </form>
  )
}

export default Formulario