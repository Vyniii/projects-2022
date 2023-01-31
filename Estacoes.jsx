import {useState} from "react";
import "../styles/estacoes.css"

export default function Estacoes (){
const [janeiro, setjaneiro] = useState("")
const [fevereiro,setfevereiro] =useState("")
const [março,setmarço] =useState("")
const [abril,setabril] =useState("")
const [maio,setmaio] =useState("")
const [junho,setjunho] =useState("")
const [julho,setjulho] =useState("")
const [agosto,setagosto] =useState("")
const [setembro,setsetembro] =useState("")
const [outubro,setoutubro] =useState("")
const [novembro,setnovembro] =useState("")
const [dezembro,setdezembro] =useState("")
const [estacoes, setestacoes] = useState("")

function Estacao(){

    switch(estacoes){
        case "janeiro":
            setjaneiro(janeiro)
            break;
        case "fevereiro":
            setfevereiro(fevereiro)
            break;
        case "fevereiro":
            setmarço(março)
            break;
        case "fevereiro":
            setabril(abril)
            break;
        case "fevereiro":
            setmaio(maio)
            break;
        case "fevereiro":
            setjunho(junho)
            break;
        case "fevereiro":
            setjulho(julho)
            break;
        case "fevereiro":
            setagosto(agosto)
            break;
        case "fevereiro":
            setsetembro(setembro)
            break;
        case "fevereiro":
            setoutubro(outubro)
            break;
        case "fevereiro":
            setnovembro(novembro)
            break;
        case "fevereiro":
            setdezembro(dezembro)
            break;
            
        
}
}

    return (
         <div className = "estacoes">
        <h2>estações do ano</h2>

    <div className="operacao-calculadora">
        <input 
      type="radio"
      id="janeiro"
      name="operacoes"
      value="Verão"
      onClick={ e => setestacoes( e.target.value )}/>
      <label htmlFor="janeiro">janeiro</label>
      </div>

      <div className="operacao-calculadora">
        <input 
      type="radio"
      id="fevereiro"
      name="operacoes"
      value="Verão"
      onClick={ e => setestacoes( e.target.value )}/>
      <label htmlFor="fevereiro">fevereiro</label>
      </div>

      <div className="operacao-calculadora">
        <input 
      type="radio"
      id="março"
      name="operacoes"
      value="Verão"
      onClick={ e => setestacoes( e.target.value )}/>
      <label htmlFor="março">março</label>
      </div>

      <div className="operacao-calculadora">
        <input 
      type="radio"
      id="abril"
      name="operacoes"
      value="Outono"
      onClick={ e => setestacoes( e.target.value )}/>
      <label htmlFor="abril">abril</label>
      </div>

      <div className="operacao-calculadora">
        <input 
      type="radio"
      id="maio"
      name="operacoes"
      value="Outono"
      onClick={ e => setestacoes( e.target.value )}/>
      <label htmlFor="maio">maio</label>
      </div>

      <div className="operacao-calculadora">
        <input 
      type="radio"
      id="fevereiro"
      name="operacoes"
      value="Outono"
      onClick={ e => setestacoes( e.target.value )}/>
      <label htmlFor="fevereiro">fevereiro</label>
      </div>

      <div className="operacao-calculadora">
        <input 
      type="radio"
      id="junho"
      name="operacoes"
      value="Inverno"
      onClick={ e => setestacoes( e.target.value )}/>
      <label htmlFor="junho">junho</label>
      </div>

      <div className="operacao-calculadora">
        <input 
      type="radio"
      id="julho"
      name="operacoes"
      value="Inverno"
      onClick={ e => setestacoes( e.target.value )}/>
      <label htmlFor="julho">julho</label>
      </div>

      <div className="operacao-calculadora">
        <input 
      type="radio"
      id="agosto"
      name="operacoes"
      value="Inverno"
      onClick={ e => setestacoes( e.target.value )}/>
      <label htmlFor="agosto">agosto</label>
      </div>

      <div className="operacao-calculadora">
        <input 
      type="radio"
      id="outubro"
      name="operacoes"
      value="Primavera"
      onClick={ e => setestacoes( e.target.value )}/>
      <label htmlFor="outubro">outubro</label>
      </div>

      <div className="operacao-calculadora">
        <input 
      type="radio"
      id="novembro"
      name="operacoes"
      value="Primavera"
      onClick={ e => setestacoes( e.target.value )}/>
      <label htmlFor="novembro">novembro</label>
      </div>

      <div className="operacao-calculadora">
        <input 
      type="radio"
      id="dezembro"
      name="operacoes"
      value="Primavera"
      onClick={ e => setestacoes( e.target.value )}/>
      <label htmlFor="dezembro">dezembro</label>
      </div>




      <p className="mensagem-calculadora">{estacoes}</p>













</div>
)}