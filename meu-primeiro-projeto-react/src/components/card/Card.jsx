import Atributo from '../atributo/Atributo.jsx';
import Titulo from '../titulo/Titulo'
import Conteudo from '../conteudo/Conteudo';
import './card.css'

function Card(){
    return(
        <div className="card">
            <div className="cardImage"></div>
            <div>
            <img src="../../public/img/001.png"></img>
            </div>
            <div className="cardConteudo">
        <Conteudo>N°001</Conteudo>
        <Titulo>Bulbasaur</Titulo>
        <ul>
            <li> <Atributo nome="planta"/></li>
            <li> <Atributo nome="venenoso"/></li>
        </ul>
            </div>
        </div> 
    )
}
export default Card