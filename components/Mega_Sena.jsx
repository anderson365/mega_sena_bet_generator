import { useState } from "react";
import Mostrar_Aposta from "./Mostrar_Aposta"
import Gerar_Numeros from "./Gerar_Numeros"


export default function Mega_Sena() {

    const ballsQuantity = 6;
    const [bet, setBet] = useState(null);

    return <div style={{
        display: "flex", 
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        height: "80vh"
        }}>
        
        <h2>GERADOR DE APOSTAS DA MEGA-SENA</h2>
       
        <Mostrar_Aposta bet={bet} ballsQuantity={ballsQuantity}></Mostrar_Aposta>

        <button style={{width: "100px"}} onClick={() => setBet(Gerar_Numeros(ballsQuantity))}>Gerar aposta</button>
    
    </div>
}