import "../styles/basico.css"

export default function Basico(props){

   
    let mensagem = "mensagem: " + (props.texto ?? "escreva algo aq")
   
    return(
        <div className="basico">
            <h2>{props.titulo ?? "coloque um titulo aqui" }</h2>
            <p>{ mensagem }</p>
            <p id="data">{props.numero ? props.numero + 10 : 0}---{props.datapost}</p>
        </div>
    );
}