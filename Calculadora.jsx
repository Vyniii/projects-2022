import { useState } from "react";
import "../styles/calculadora.css"

export default function Calculadora(){

    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [operacao, setOperacao] = useState("")
    const [resultado, setResultado] = useState("")

    function calcular(){

        switch (operacao) {
            case "somar":
                setResultado(n1+n2)
                break;
            case "subtrair":
                setResultado(n1-n2)
                break;
            case "dividir":
                setResultado(n1/n2)
                break;
            case "multiplicar":
                setResultado(n1*n2)
                break;
            case "resto":
                setResultado(n1%n2)
                break;
            case "exponencial":
                setResultado(n1**n2)
                break;
        
            default:
                setResultado("Selecione uma operação!")
        }
    }

    return(
        <div className="conteiner-calculadora" >

            <h2>Calculadora</h2>

            <input 
                className="campo-calculadora"
                type="number" 
                placeholder="Primeiro número" 
                onChange = { e => setN1( e.target.valueAsNumber ) }
            />

            <input 
                className="campo-calculadora"
                type="number" 
                placeholder="Segunda número" 
                onChange = { e => setN2( e.target.valueAsNumber ) }
            />

            <div className="operacao-calculadora">
                <input 
                    type="radio"
                    id="somar"
                    name="operacoes"
                    value="somar"
                    onClick={ e => setOperacao( e.target.value ) }
                />
                <label htmlFor="somar">Somar</label>
            </div>

            <div className="operacao-calculadora">
                <input 
                    type="radio"
                    id="subtrair"
                    name="operacoes"
                    value="subtrair"
                    onClick={ e => setOperacao( e.target.value ) }
                />
                <label htmlFor="subtrair">subtrair</label>
            </div>

            <div className="operacao-calculadora">
                <input 
                    type="radio"
                    id="dividir"
                    name="operacoes"
                    value="dividir"
                    onClick={ e => setOperacao( e.target.value ) }
                />
                <label htmlFor="dividir">divdir</label>
            </div>

            
            <div className="operacao-calculadora">
                <input 
                    type="radio"
                    id="multiplicar"
                    name="operacoes"
                    value="multiplicar"
                    onClick={ e => setOperacao( e.target.value ) }
                />
                <label htmlFor="multiplicar">multiplicar</label>
            </div>

            
            <div className="operacao-calculadora">
                <input 
                    type="radio"
                    id="resto"
                    name="operacoes"
                    value="resto"
                    onClick={ e => setOperacao( e.target.value ) }
                />
                <label htmlFor="resto">resto</label>
            </div>

            
            <div className="operacao-calculadora">
                <input 
                    type="radio"
                    id="exponencial"
                    name="operacoes"
                    value="exponencial"
                    onClick={ e => setOperacao( e.target.value ) }
                />
                <label htmlFor="exponencial">exponencial</label>
            </div>

            <button 
                className="botao-calculadora"
                onClick = { calcular }
            >Calcular</button>

            <p className="mensagem-calculadora">{ resultado }</p>

        </div>
    );
}