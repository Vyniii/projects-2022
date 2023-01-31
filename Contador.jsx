import { useState } from "react";
import "../styles/contador.css"


export default function Contador(){
    
    const [numero, setnumero] = useState(0)

    function somar(){
       setnumero(numero + 1)
    }
    function subtrair(){  
      setnumero(numero - 1)
    }

    return(
        <div className="conteiner-contador">

        <h2 className="painel-contador"> Contador</h2>
        <h2 className="painel-contador">{numero}</h2>

        <button className="botao" onClick={somar}>+</button>
        <button className="botao" onClick={subtrair}>-</button>
        </div>
    );
}
