import styled from "@emotion/styled"
import { FcHighPriority } from "react-icons/fc";

const Texto = styled.div`
    background-color: #f7dbdb;
    color: #f33823;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    border-radius: 15px;
    opacity: 0.7;
`

const Error = ({children}) => {
  return (
    <Texto>
        <FcHighPriority/>
        {children}
        <FcHighPriority/>
    </Texto>
  )
}

export default Error