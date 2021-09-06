import './conteudo.css'

function Conteudo (props){
    return(
        <p className="conteudo">
            {props.children}
        </p>

    )
}

export default Conteudo