export default function Mostrar_Aposta(props){

    const ballStyle = {
        backgroundColor: "#CCC",
        padding: "5px 0 0 7px",
        margin: "5px",
        height: "34px",
        width: "34px",
        borderRadius: "17px",
        fontWeight: "bold",
        border: "1px solid #000",
        color: "#000"
    }

    function printDivs(bet, ballsQuantity){
        
        const arrayDivs = []

        for(let i = 0; i < ballsQuantity; i++){
            arrayDivs.push(<div style={ballStyle} key={i}>{bet ? bet[i] : "00"}</div>)
        }

        return arrayDivs
    }

    return <div style={{
        display: "flex",
        justifyContent: "space-around",
        }}>
        {printDivs(props.bet,props.ballsQuantity)}
    </div>

}