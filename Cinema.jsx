import { useState } from "react";
import "../styles/cinema.css"

export default function Cinema(){

    const [preco, setPreco] = useState()
    const [precopromo, setPrecoPromo] = useState()
    const [precoacres, setPrecoAcres] = useState()


    function cinemas(){
        setPrecoPromo(`R$ ${(preco - (preco * 0.2)).toFixed(2)}`) 
        setPrecoAcres(`R$ ${(preco * 1.1).toFixed(2)}`)
    }

    function limpar(){
        setPreco()
        setPrecoPromo()
        setPrecoAcres()
    }


    return(
        <div className="conteiner-cinema">

            <h3> Cinema Preço</h3>
            <input 
                className="campo-cinema"
                type="text" 
                placeholder="coloque o valor do cinema"
                value={preco}
                onChange={e => setPreco(e.target.value)}
                 />


            <h3>
                Preço as segunda, terça, quinta e sexta:
            </h3>
            <p
                className="mensagem-cinema"
            >{precopromo}</p>


            <h3>
                Preço quarta,sabado e domingo
            </h3>
            <p
                className="mensagem-cinema"
            >{precoacres}</p>


            <button
                className="botao-cinema"
                onClick={cinemas}
            >Calcular</button>

            <button
                className="botao-cinema"
                onClick={limpar}
            >Limpar</button>

        </div>
    );
}