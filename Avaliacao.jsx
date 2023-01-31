import { useState } from "react";
import"../styles/avaliacao.css"

export default function Avaliacao(){
    
    const[aluno,setAluno] = useState("")
    const[nota,setNota] = useState(0)
    const[frequencia,setFrequencia] = useState(0)
    const[mensagem,setMensagem] = useState("")
    
    function final(){
        if(frequencia >= 75 && nota >= 6.0){
            setMensagem("O aluno  "  + aluno  + " foi aprovado"  )
        }
        else if ((nota== 0) || (frequencia==0)){
            setMensagem("informe a media e nota do aluno")
        }
        else
            setMensagem("O aluno " + aluno  +  "  foi reprovado"  )   
        
    }
   
    return(
        <div className="conteiner-concatenacaomedia">

            <h2
            className="titulo-concatenacaomedia"
            >avaliação final</h2>

            <input 
                className="campo-concatenacaomedia"
                type="text" 
                placeholder="Aluno"
                onChange={e => setAluno(e.target.value)}
                 />

            <input
                className="campo-concatenacaomedia" 
                type="number" 
                placeholder="Digite a media final"
                onChange={e => setNota(e.target.value)}
                 />
        
            <input
                className="campo-concatenacaomedia" 
                type="number" 
                placeholder="Digite a frequência"
                onChange={e => setFrequencia(e.target.value)}
              />

            <button
            className="botao-concatenacaomedia"
            onClick={final}
            >OK</button>

            <p
                className="campo-concatenacaomedia"
                >{mensagem}</p>

        </div>
    );
}