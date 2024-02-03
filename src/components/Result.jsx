import styled from "@emotion/styled"


const Result = ({resultado}) => {
    // Desestructuracion de resultado
    const {FROMSYMBOL,PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
 
    return (
    <div>
        <h2><span>{FROMSYMBOL}</span></h2>
        <p>Precio actual: <span>{PRICE}</span></p>
        <p>Precio más alto el dia de hoy: <span>{HIGHDAY}</span></p>
        <p>Precio más bajo el dia de hoy: <span>{LOWDAY}</span></p>
        <p>Variacion -24 hrs <span>{CHANGEPCT24HOUR}</span></p>
        <p>Ultima vez actualizado <span>{LASTUPDATE}</span></p>
    </div>
  )
}

export default Result