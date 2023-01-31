import "../styles/concatenacao.css"
import { useState } from "react"

export default function Concatenacao(){

    const [nome, setnome] = useState("")
    const [sobrenome, setsobrenome] = useState("")
    const [mensagem, setmensagem] = useState("")

    function concatenar(){
        setmensagem("ola! " + nome + " " + sobrenome)
    }

    function limpar(){
      setnome("")
      setsobrenome("")
      setmensagem("")
    }

    return(
    <div className="conteiner-concatenacao">

            <h2
            className="titulo-concatenacao"
            >state em componente contolados</h2>

            <input
            className="campo-concatenacao" 
            type="Text"
            placeholder="digite seu nome" 
            value={nome}
            onChange={ e => setnome(e.target.value) }
            />

            <input
            className="campo-concatenacao" 
            type="Text"
            placeholder="digite seu sobrenome" 
            value={sobrenome}
            onChange={ e => setsobrenome(e.target.value) }
            />

            <button 
            className="botao-concatenacao"
            onClick={concatenar}
            >concatenar</button>

            <button 
            className="botao-concatenacao"
            onClick={limpar}
            >limpar</button>

            <p
              className="campo-concatenacao-msg" >{mensagem}              
            </p>


    </div>
    )
}