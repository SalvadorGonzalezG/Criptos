import styled from "@emotion/styled"

const Container = styled.div`
    color: #0b0b0b;
    font-family: 'EB Garamond', sans-serif;
    display: flex;
    align-items: center;
    gap: .5rem;
    margin-top: 5px;
`
const Imagen = styled.img`
    display: block;
    width: 130px;
`
const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }

`
const Precio = styled.p`
    font-size: 25px;
    span{
        font-weight: 700;
    }
`

const Result = ({ resultado }) => {
    // Desestructuracion de resultado
    const { FROMSYMBOL, PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado

    return (
        <Container>
            <Imagen src={`https://cryptocompare.com${IMAGEURL}`} alt="Imagen Cripto" />
            <div>
                <h2><span>{FROMSYMBOL}</span></h2>
                <Precio>Precio actual: <span>{PRICE}</span></Precio>
                <Texto>Precio más alto el dia de hoy: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio más bajo el dia de hoy: <span>{LOWDAY}</span></Texto>
                <Texto>Variacion -24 hrs <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Ultima vez actualizado <span>{LASTUPDATE}</span></Texto>
            </div>
        </Container>
    )
}

export default Result