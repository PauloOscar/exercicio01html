import './ tiulo.css'

function Titulo (props) {

    return (
    <h1 className = "meuTitulo">
        {props.children}
    </h1>)
}

export default Titulo