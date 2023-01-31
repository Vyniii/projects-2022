import "../styles/login.css"
import { useState } from "react"

export default function Login(){

    const[user,setuser] = useState("")
    const[senha,setsenha] = useState("")
    const[mensagem,setMensagem] = useState("")
    
    function telalogin (){
        if(( user == "user") && (senha == "1234")){
            setMensagem("login feito com sucesso!")
        }
        else if ((user == 0) || (senha ==0)){
            setMensagem("coloque login ou senha")
        }
        else {
            setMensagem("login ou senha invalido")
        }
    }   
   
    return(
        <div className="conteiner-login">

            <h2
            className="titulo-login"
            >tela inicial</h2>

            <input 
                className="campo-login"
                type="text" 
                placeholder="informe o login: "
                onChange={e => setuser(e.target.value)}
                 />

            <input
                className="campo-login" 
                type="text" 
                placeholder="informe a senha: "
                onChange={e => setsenha(e.target.value)}
                 />
        
            <button
            className="botao-login"
            onClick={telalogin}
            >verificar</button>

            <p
                className="campo-loginmsg"
                >{mensagem}</p>

        </div>
    );
}