import "../styles/calculos.css"

export default function Calculos(props){
    let mensagemcalculo = "mensagem: " + (props.texto ?? "escreva algo aq")

    
    return(
        <div className="Calculos">
        <h2>{props.titulo ?? "coloque um titulo aqui" }</h2>
        <p>{ mensagemcalculo }</p>
        <p id='number'>{ `A soma entre ${props.n1} + ${props.n2} = ${props.n1 + props.n2}`}</p>
    </div>
    );
}